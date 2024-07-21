import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';
import {images} from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import {memo} from 'react';

const {width, height} = Dimensions.get('screen');

const Card = ({item}) => {
  console.log('item', item);
  let startStyles = null;
  let endStyles = null;

  if (item?.name === 'feeling') {
    startStyles = styles.startStyles;
  }
  if (item?.name === 'thankYou') {
    endStyles = styles.endStyles;
  }

  return (
    <View
      style={[
        styles.root,
        startStyles,
        endStyles,
        item?.name === 'thankYou'
          ? {paddingHorizontal: 0, paddingBottom: 0}
          : null,
      ]}>
      {item?.name !== 'thankYou' && (
        <>
          <Text style={styles.content}>
            {item?.question ? item?.question : item?.title}
          </Text>
          <TextInput
            textAlignVertical="top"
            placeholder={'Enter Your Reply'}
            multiline
            style={styles.input}
            placeholderTextColor={colors.grey100}
          />
        </>
      )}
      {item?.name === 'thankYou' && (
        <LinearGradient
          colors={['#DF8A9D', '#FEFEFE']}
          style={styles.linearGradient}>
          <Image
            source={images.thankYou}
            style={styles.thankYou}
            resizeMode="contain"
          />
          <Text style={styles.thankYouText}>Thank You</Text>
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white100,
    marginHorizontal: 7,
    marginBottom: 5,
    width: width * 0.8,
    borderRadius: 25,
    paddingBottom: 10,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
  },
  content: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    height: height * 0.1,
    paddingTop: 10,
    paddingBottom: 10,
    // paddingRight: 70,
    paddingLeft: 15,
    // backgroundColor: '#ccc',
  },
  inputContainer: {},
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.greyBorder,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  thankYou: {width: 100, height: 100, alignSelf: 'center'},
  thankYouText: {
    alignSelf: 'center',
    fontFamily: 'Outfit-Regular',
    fontSize: 38,
  },
  startStyles: {marginLeft: 35},
  endStyles: {marginRight: 35},
  linearGradient: {
    flex: 1,
    borderRadius: 25,
    justifyContent: 'center',
  },
});

export default memo(Card);
