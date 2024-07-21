import {ActivityIndicator, View} from 'react-native';
import {colors} from '../../constants/colors';

const Loading = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator color={colors.red300} size={50} />
    </View>
  );
};

export default Loading;
