import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {icons} from '../../../constants/images';
import {colors} from '../../../constants/colors';
import {memo, useCallback, useEffect, useRef, useState} from 'react';
import {backgroundColor} from '../../../util/data';
import Card from '../../../components/ui/Card';
import {useNavigation} from '@react-navigation/native';
import Calendar from '../../../components/ui/Calendar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {setQuestions} from '../../../store/prompts';
import {receiveQuestion} from '../../../util/prompts';
import Loading from '../../../components/ui/Loading';

const {width, height} = Dimensions.get('screen');

const renderItem = ({item, index}) => {
  console.log('index--', item);
  return <Card item={item} />;
};

const HomeScreen = () => {
  const flatlistRef = useRef();
  const [skipToEnd, setSkipTopEnd] = useState(false);
  const [dataBackend, setDataBackend] = useState([]);
  const [date, setdate] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const tokenBackend = useSelector(state => state.auth.token);
  // const dataBackend = useSelector(state => state.prompt.questions);

  let next = icons.back;

  if (currentIndex === dataBackend?.length - 1) {
    next = icons.done;
  }

  const goToSettings = () => {
    navigation.navigate('settings');
  };

  const onViewRef = useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      setCurrentIndex(viewableItems.viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const skipToEndHandler = useCallback(currentIndex => {
    flatlistRef.current.scrollToIndex({
      index:
        dataBackend?.length - 1 > currentIndex
          ? currentIndex + 1
          : dataBackend?.length - 1,
      animated: true,
    });
  }, []);

  useEffect(() => {
    async function getQuestion() {
      const data = await receiveQuestion();
      dispatch(setQuestions(data));
      if (data?.length > 0) {
        setDataBackend([...data]);
      }
    }
    getQuestion();
  }, [dispatch, receiveQuestion]);

  if (dataBackend?.length < 0) {
    return <Loading />;
  }

  return (
    <KeyboardAwareScrollView
      style={[styles.root, {backgroundColor: backgroundColor[currentIndex]}]}
      enableOnAndroid
      extraHeight={height * 0.5}>
      <View style={{height: height}}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Hello <Text style={styles.name}>Sarah!</Text>
          </Text>
          <Pressable style={styles.titleImgContainer} onPress={goToSettings}>
            <Image
              source={icons.settings}
              style={styles.icon}
              resizeMode="cover"
            />
          </Pressable>
        </View>
        <Text style={styles.thankYou}>
          Thank you for showing up for yourself today
        </Text>
        <Text style={styles.select}>Select a date</Text>
        <Calendar currentIndex={currentIndex} />
        <FlatList
          ref={flatlistRef}
          snapToAlignment="start"
          decelerationRate={'fast'}
          snapToInterval={width}
          horizontal
          data={dataBackend}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
        />
        <View style={{alignSelf: 'center', marginVertical: 35}}>
          <Pressable
            style={styles.arrowContainer}
            onPress={() => {
              skipToEndHandler(currentIndex);
            }}>
            <Image
              source={next}
              style={[
                styles.arrow,
                currentIndex !== dataBackend?.length - 1
                  ? {transform: [{rotate: '180deg'}]}
                  : null,
              ]}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  root: {flex: 1},
  title: {
    flexDirection: 'row',
    marginTop: height * 0.12,
    // backgroundColor: '#ccc',
    padding: 20,
  },
  titleImgContainer: {
    backgroundColor: colors.black100,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
  },
  titleText: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'Outfit-Regular',
    fontSize: 24,
    color: colors.grey200,
  },
  icon: {height: 17, width: 18, tintColor: colors.white},
  select: {
    fontFamily: 'Outfit-Regular',
    color: colors.grey200,
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  thankYou: {
    fontFamily: 'Outfit-Regular',
    fontSize: 28,
    paddingLeft: 20,
    paddingRight: 50,
    paddingVertical: 25,
  },
  arrowContainer: {
    backgroundColor: colors.red300,
    padding: 10,
    borderRadius: 20,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  name: {color: colors.red300},
});
