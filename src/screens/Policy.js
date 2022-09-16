import {
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { useEffect, useState } from "react";
import { buttomStyles } from "../styles/ButtomStyle";
import { PolicyText } from "../screens/components/PolicyText";

import { API } from "../services/Api";

export default function Policy({ navigation, route }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [profileData, setProfileData] = useState({});
  const [adressData, setAdressData] = useState({});
  const [dateData, setDateData] = useState("");

  function navigateToChargeDate() {
    navigation.navigate("ChargeDate");
  }
  function navigateToSignIn() {
    if (!isEnabled) {
      alert("É necessário aceitar os termos para avançar");
    } else {
      fetch(API + "/users", {
        method: "POST",
        body: JSON.stringify({
          fullname: profileData.name,
          contact: profileData.phone,
          email: profileData.email,
          number_rg: profileData.rg,
          cpf: profileData.cpf,
          password: profileData.password,
          adress: {
            cep: adressData.zipCode,
            street: adressData.street,
            city: adressData.city,
            state: adressData.state,
            region: adressData.district,
            number: adressData.number,
            complement: adressData.adjunct,
          },
          billing_day: dateData,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(async () => {
          navigation.navigate("SignIn");
        })
        .catch(() => alert("Erro ao cadastrar usuário"));
    }
  }
  useEffect(() => {
    const date = route.params.date;
    const profile = route.params.profile;
    const adress = route.params.adress;
    setProfileData(profile);
    setAdressData(adress);
    setDateData(date);
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Termos de uso</Text>
      <ScrollView style={styles.scroll}>
        <PolicyText />
      </ScrollView>
      <View style={styles.switchView}>
        <Switch
          trackColor={{ false: "#767577", true: "#53FF75" }}
          thumbColor={isEnabled ? "#5B41F5" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{ marginHorizontal: 20, color: "#D7DFE0", fontSize: 20 }}>
          Aceito os termos
        </Text>
      </View>

      <View style={styles.buttomView}>
        <TouchableOpacity
          style={[
            buttomStyles.buttom,
            { backgroundColor: "#D7DFE0", width: "40%" },
          ]}
          onPress={navigateToChargeDate}
        >
          <Text style={[buttomStyles.buttomText, { color: "#5B41F5" }]}>
            Voltar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttomStyles.buttom, { width: "40%", marginLeft: 20 }]}
          onPress={navigateToSignIn}
        >
          <Text style={buttomStyles.buttomText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 30,
    color: "#D7DFE0",
    padding: 20,
  },
  buttomView: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  scroll: {
    width: "90%",
  },
  switchView: {
    width: "80%",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
