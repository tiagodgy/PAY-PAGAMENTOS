import { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API } from "../services/Api";

import { buttomStyles } from "../styles/ButtomStyle";
import { InputStyles } from "../styles/InputStyle";

export default function SignIn({ navigation }) {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  function navigateToSignUp() {
    navigation.navigate("SignUp");
  }
  function navigateToHome() {
    if (cpf.length != 11) {
      alert("Preencha um cpf válido");
    } else if (password.length < 8 || password.length > 16) {
      alert("A senha informada não é válida");
    } else {
      fetch(API + "/users?cpf=" + cpf)
        .then(async (response) => {
          const data = await response.json();
          if (password == data[0].password) {
            AsyncStorage.setItem("id", data[0].id.toString());
            navigation.navigate("Home");
          } else {
            alert("Senha incorreta");
          }
        })
        .catch(() => alert("Não foi possível localizar os dados"));
    }
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
        onChangeText={setCpf}
      ></TextInput>
      <TextInput
        placeholder="Senha"
        style={InputStyles.input}
        secureTextEntry={true}
        onChangeText={setPassword}
      ></TextInput>
      <TouchableOpacity
        style={[buttomStyles.buttom, { marginTop: 30 }]}
        onPress={navigateToHome}
      >
        <Text style={buttomStyles.buttomText}>Logar</Text>
      </TouchableOpacity>

      <Text
        style={[buttomStyles.buttomText, { color: "#D7DFE0", marginTop: 20 }]}
        onPress={navigateToSignUp}
      >
        Abrir conta gratuita
      </Text>
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
