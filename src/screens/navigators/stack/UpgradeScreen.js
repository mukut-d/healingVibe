import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../constants/colors';
import {memo, useState} from 'react';
import {icons} from '../../../constants/images';
import Button from '../../../components/ui/Button';
import RadioButtonGroup from '../../../components/ui/RadioButtonGroup';

const UpgradeScreen = () => {
  const [checked, setChecked] = useState('first');
  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        Don't miss out on this opportunity to take your journal entries to the
        next level
      </Text>
      <Text
        style={{fontFamily: 'Outfit-Medium', fontSize: 19, marginBottom: 15}}>
        Select your plan
      </Text>
      <RadioButtonGroup />
      <Text
        style={{fontFamily: 'Outfit-Medium', fontSize: 19, marginVertical: 30}}>
        What you get?
      </Text>
      <View style={styles.pros}>
        <View style={styles.doneContainer}>
          <Image
            source={icons.done}
            style={styles.doneImg}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.doneText}>
          Lorem ipsum dolor sit amet, consectetur.
        </Text>
      </View>
      <View style={styles.pros}>
        <View style={styles.doneContainer}>
          <Image
            source={icons.done}
            style={styles.doneImg}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.doneText}>
          Lorem ipsum dolor sit amet, consectetur.
        </Text>
      </View>
      <View style={[styles.pros, styles.additionalStyles]}>
        <View style={styles.doneContainer}>
          <Image
            source={icons.done}
            style={styles.doneImg}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.doneText}>
          Lorem ipsum dolor sit amet, consectetur.
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{fontFamily: 'Outfit-Regular', lineHeight: 14}}>$</Text>
        <Text
          style={{fontSize: 35, lineHeight: 35, fontFamily: 'Outfit-Regular'}}>
          2.99
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.grey100,
            lineHeight: 35,
            fontFamily: 'Outfit-Regular',
          }}>
          /mo (billed monthly)
        </Text>
      </View>
      <Button additionalStyles={styles.additionalStylesButton}>
        Upgrade To Pro
      </Button>
      <Text style={styles.proText}>Already upgraded to pro?</Text>
      <View style={styles.restoreContainer}>
        <Text style={styles.restoreText}>Restore Previous Purchase</Text>
        <Image
          source={icons.restore}
          style={styles.restore}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white', paddingHorizontal: 20},
  title: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: colors.grey300,
    paddingVertical: 30,
  },
  doneContainer: {
    backgroundColor: colors.green100,
    borderRadius: 20,
    padding: 5,
  },
  doneImg: {width: 14, height: 14},
  doneText: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: colors.grey300,
  },
  pros: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  proText: {
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 5,
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
  },
  additionalStyles: {
    borderBottomWidth: 1,
    paddingBottom: 30,
    borderBottomColor: colors.grey,
    marginBottom: 10,
  },
  additionalStylesButton: {
    backgroundColor: colors.red300,
    marginTop: 45,
  },
  restore: {width: 18, height: 18},
  restoreText: {
    alignSelf: 'center',
    paddingVertical: 5,
    fontFamily: 'Outfit-Bold',
    color: colors.red300,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  restoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default memo(UpgradeScreen);
