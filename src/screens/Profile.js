import { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../services/Api";
import { buttomStyles } from "../styles/ButtomStyle";

export default function Profile({ navigation }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [rg, setRg] = useState("");

  function exit() {
    Alert.alert("Sair do app", "Você realmente deseja sair do app?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => {
          AsyncStorage.setItem("id", "");
          navigateToSignIn();
        },
      },
    ]);
  }

  function navigateToSignIn() {
    navigation.navigate("SignIn");
  }

  function getInfo() {
    fetch(API + "/users/" + id)
      .then(async (response) => {
        const data = await response.json();
        setName(data.fullname);
        setCpf(data.cpf);
        setPhone(data.contact);
        setRg(data.number_rg);
      })
      .catch();
  }

  useEffect(() => {
    AsyncStorage.getItem("id")
      .then((value) => {
        setId(value);
      })
      .catch();
  });
  useEffect(getInfo);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerView}>
        <Text style={styles.header}>Dados da conta</Text>
      </View>
      <Text style={styles.textData}>Nome: {name}</Text>
      <Text style={styles.textData}>Celular: {phone}</Text>
      <Text style={styles.textData}>CPF: {cpf}</Text>
      <Text style={styles.textData}>RG: {rg}</Text>
      <TouchableOpacity
        style={[buttomStyles.buttom, styles.buttom]}
        onPress={exit}
      >
        <Text style={[buttomStyles.buttomText, { color: "#D7DFE0" }]}>
          Sair do APP
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212E3E",
    alignItems: "center",
  },
  header: {
    alignSelf: "center",
    fontSize: 35,
    color: "#D7DFE0",
    padding: 20,
    alignSelf: "flex-start",
  },
  headerView: {
    borderBottomWidth: 1,
    borderColor: "#D7DFE0",
    width: "100%",
  },
  textData: {
    color: "#D7DFE0",
    alignSelf: "flex-start",
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 25,
  },
  buttom: {
    position: "absolute",
    bottom: 20,
    width: "80%",
  },
});
