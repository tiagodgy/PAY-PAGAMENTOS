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
import { Picker } from "@react-native-picker/picker";

import { buttomStyles } from "../styles/ButtomStyle";
import { InputStyles } from "../styles/InputStyle";
import es from "date-fns/esm/locale/es/index.js";

export default function Adress({ navigation, route }) {
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState();
  const [district, setDistrict] = useState("");
  const [number, setNumber] = useState("");
  const [adjunct, setAdjunct] = useState("");

  function navigateToSignUp() {
    navigation.navigate("SignUp");
  }
  function navigateToChargeDate() {
    if (zipCode.length != 8) {
      alert("O CEP deve ter 8 caracteres");
    } else if ((street.length = 0)) {
      alert("Por favor informe o nome da rua");
    } else if ((city.length = 0)) {
      alert("Por favor informe o nome da cidade");
    } else if ((district.length = 0)) {
      alert("Por favor informe o nome do bairro");
    } else if ((number.length = 0)) {
      alert("Por favor informe o número da residência");
    } else {
      navigation.navigate("ChargeDate", {
        profile: route.params.profile,
        adress: {
          zipCode: zipCode,
          street: street,
          city: city,
          state: state,
          district: district,
          number: number,
          adjunct: adjunct,
        },
      });
    }
  }

  function findAdress() {
    fetch("https://viacep.com.br/ws/" + zipCode + "/json/")
      .then(async (response) => {
        const data = await response.json();
        setStreet(data.logradouro);
        setCity(data.localidade);
        setState(data.uf);
        setDistrict(data.bairro);
        setAdjunct(data.complemento);
      })
      .catch();
  }
  useEffect(() => {
    if (zipCode.length == 8) {
      findAdress();
    } else {
      return;
    }
  }, [zipCode]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Endereço</Text>
      <KeyboardAwareScrollView style={styles.scroll}>
        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          onChangeText={setZipCode}
          keyboardType="number-pad"
        ></TextInput>
        <Text style={styles.label}>Rua</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          onChangeText={setStreet}
          value={street}
        ></TextInput>
        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          onChangeText={setCity}
          value={city}
        ></TextInput>
        <Picker
          selectedValue={state}
          onValueChange={(itemValue, itemIndex) => setState(itemValue)}
        >
          <Picker.Item label="Acre" value="AC" color="#D7DFE0" />
          <Picker.Item label="Alagoas" value="AL" color="#D7DFE0" />
          <Picker.Item label="Amapá" value="AP" color="#D7DFE0" />
          <Picker.Item label="Amazonas" value="AM" color="#D7DFE0" />
          <Picker.Item label="Bahia" value="BA" color="#D7DFE0" />
          <Picker.Item label="Ceara" value="CE" color="#D7DFE0" />
          <Picker.Item label="Distrito Federal" value="DF" color="#D7DFE0" />
          <Picker.Item label="Espirito Santo" value="ES" color="#D7DFE0" />
          <Picker.Item label="Goiás" value="GO" color="#D7DFE0" />
          <Picker.Item label="Maranhão" value="MA" color="#D7DFE0" />
          <Picker.Item label="Mato Grosso" value="MT" color="#D7DFE0" />
          <Picker.Item label="Mato Grosso do Sul" value="MT" color="#D7DFE0" />
          <Picker.Item label="Minas Gerais" value="MG" color="#D7DFE0" />
          <Picker.Item label="Pará" value="PA" color="#D7DFE0" />
          <Picker.Item label="Paraíba" value="PB" color="#D7DFE0" />
          <Picker.Item label="Paraná" value="PR" color="#D7DFE0" />
          <Picker.Item label="Pernambuco" value="PE" color="#D7DFE0" />
          <Picker.Item label="Piauí" value="PI" color="#D7DFE0" />
          <Picker.Item label="Rio de Janeiro" value="RJ" color="#D7DFE0" />
          <Picker.Item label="Rio Grande do Norte" value="RN" color="#D7DFE0" />
          <Picker.Item label="Rio Grande do Sul" value="RS" color="#D7DFE0" />
          <Picker.Item label="Rondônia" value="RO" color="#D7DFE0" />
          <Picker.Item label="Roraima" value="RR" color="#D7DFE0" />
          <Picker.Item label="Santa Catarina" value="SC" color="#D7DFE0" />
          <Picker.Item label="São Paulo" value="SP" color="#D7DFE0" />
          <Picker.Item label="Sergipe" value="SE" color="#D7DFE0" />
          <Picker.Item label="Tocantins" value="TO" color="#D7DFE0" />
        </Picker>
        <Text style={styles.label}>Bairro</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          onChangeText={setDistrict}
          value={district}
        ></TextInput>
        <Text style={styles.label}>Número da residência</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="number-pad"
          onChangeText={setNumber}
        ></TextInput>
        <Text style={styles.label}>Complemento</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          onChangeText={setAdjunct}
          value={adjunct}
        ></TextInput>
        <View style={styles.buttomView}>
          <TouchableOpacity
            style={[
              buttomStyles.buttom,
              { backgroundColor: "#D7DFE0", width: "40%" },
            ]}
            onPress={navigateToSignUp}
          >
            <Text style={[buttomStyles.buttomText, { color: "#5B41F5" }]}>
              Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[buttomStyles.buttom, { width: "40%" }]}
            onPress={navigateToChargeDate}
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
