import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { buttomStyles } from "../styles/ButtomStyle";
import { InputStyles } from "../styles/InputStyle";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  function navigateToFirstPage() {
    navigation.navigate("FirstPage");
  }
  function navigateToAdress() {
    if (name.length < 8 || name.length > 120) {
      alert("O nome deve ter entre 8 e 120 caracteres");
    } else if (phone.length < 8) {
      alert("Preencha um número de celular válido ");
    } else if (email.length < 10) {
      alert("Preencha um email válido");
    } else if (rg.length < 6) {
      alert("Preencha um RG válido");
    } else if (cpf.length != 11) {
      alert("Preencha um CPF válido");
    } else if (password.length < 8 || password.length > 16) {
      alert("A senha deve ter entre 8 e 16 caracteres");
    } else {
      navigation.navigate("Adress", {
        profile: {
          name: name,
          phone: phone,
          email: email,
          rg: rg,
          cpf: cpf,
          password: password,
        },
      });
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Nova Conta</Text>
      <KeyboardAwareScrollView style={styles.scroll}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          onChangeText={setName}
        ></TextInput>
        <Text style={styles.label}>Celular</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="phone-pad"
          onChangeText={setPhone}
        ></TextInput>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="email-address"
          onChangeText={setEmail}
        ></TextInput>
        <Text style={styles.label}>RG</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="number-pad"
          onChangeText={setRg}
        ></TextInput>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="number-pad"
          onChangeText={setCpf}
        ></TextInput>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          secureTextEntry={true}
          onChangeText={setPassword}
        ></TextInput>
        <View style={styles.buttomView}>
          <TouchableOpacity
            style={[
              buttomStyles.buttom,
              { backgroundColor: "#D7DFE0", width: "40%" },
            ]}
            onPress={navigateToFirstPage}
          >
            <Text style={[buttomStyles.buttomText, { color: "#5B41F5" }]}>
              Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[buttomStyles.buttom, { width: "40%" }]}
            onPress={navigateToAdress}
          >
            <Text style={buttomStyles.buttomText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212E3E",
  },
  header: {
    alignSelf: "center",
    fontSize: 35,
    color: "#D7DFE0",
    padding: 20,
  },
  scroll: {
    width: "100%",
    padding: 20,
  },
  buttomView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 40,
  },
  label: {
    fontSize: 20,
    color: "#D7DFE0",
  },
});
