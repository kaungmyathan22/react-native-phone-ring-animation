import { Feather } from "@expo/vector-icons";
import { MotiView } from 'moti';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Easing } from 'react-native-reanimated';

const _color = "#6E01EF";
const _size = 100;

export default function App () {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map(index => (
          <MotiView
            from={{ opacity: 0.7, scale: 1 }}
            animate={{
              opacity: 0,
              scale: 4,
            }}
            transition={{
              delay: index * 400,
              type: 'timing',
              duration: 3000,
              loop: true,
              repeatReverse: false,
              easing: Easing.out(Easing.ease)
            }}
            key={index}
            style={[
              StyleSheet.absoluteFillObject, styles.dot
            ]} />
        ))}
        <Feather name="phone-outgoing" size={32} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  }
});
