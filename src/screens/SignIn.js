import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { buttomStyles } from "../styles/ButtomStyle";
import { InputStyles } from "../styles/InputStyle";

export default function SignIn({ navigation }) {
  function navigateToSignUp() {
    navigation.navigate("SignUp");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("./images/logoPayPagamentos.png")}
        style={styles.logo}
      />
      <TextInput
        placeholder="CPF"
        style={InputStyles.input}
        keyboardType="number-pad"
      ></TextInput>
      <TextInput
        placeholder="Senha"
        style={InputStyles.input}
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity style={[buttomStyles.buttom, { marginTop: 30 }]}>
        <Text style={buttomStyles.buttomText}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[buttomStyles.buttom, { backgroundColor: "#D7DFE0" }]}
      >
        <Text
          style={[buttomStyles.buttomText, { color: "#5B41F5" }]}
          onPress={navigateToSignUp}
        >
          Abrir conta gratuita
        </Text>
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
    marginBottom: 50,
  },
});
