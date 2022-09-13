import { SafeAreaView, Text, StyleSheet, StatusBar, Image } from "react-native";
import LottieView from "lottie-react-native";
import { buttomStyles } from "../styles/ButtomStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function FirstPage({ navigation }) {
  function navigateToSignUp() {
    navigation.navigate("SignUp");
  }
  function navigateToSignIn() {
    navigation.navigate("SignIn");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("./images/logoPayPagamentos.png")}
        style={styles.logo}
      />
      <LottieView
        autoPlay
        style={{
          width: 250,
          height: 250,
        }}
        source={require("./animations/phoneFistPageAnimation.json")}
      />
      <TouchableOpacity style={buttomStyles.buttom} onPress={navigateToSignUp}>
        <Text style={buttomStyles.buttomText}>Abrir conta gratuita</Text>
      </TouchableOpacity>
      <TouchableOpacity style={buttomStyles.buttom} onPress={navigateToSignIn}>
        <Text style={buttomStyles.buttomText}>Fazer Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#212E3E",
  },
  logo: {
    width: "80%",
    height: 120,
    resizeMode: "contain",
    marginVertical: 30,
  },
});
