import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {useFonts} from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit/static/Outfit-Regular.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit/static/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <View style={styles.qrContainer}>
          <Image style={styles.qrCode} source={require('./assets/image-qr-code.png')} />
          <Text style={styles.title}>Improve your front-end skills by building projects</Text>
          <Text style={styles.paragraph}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //Is there a way to use variables for css in react native?? 
  //i.e. --white: hsl(0, 0%, 100%) 
  container: {
    flex: 1,
    backgroundColor: 'hsl(212, 45%, 89%)', //light gray
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrContainer: {
    backgroundColor: 'hsl(0, 0%, 100%)', //white
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  qrCode: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  title: {
    color: 'hsl(218, 44%, 22%)', //dark blue
    fontFamily: 'Outfit-Bold', 
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    width: 260,
  },
  paragraph: {
    color: 'hsl(220, 15%, 55%)', //grayish blue
    fontFamily: 'Outfit',
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 30,
    width: 260,
  }
});
