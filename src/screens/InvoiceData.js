import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import { buttomStyles } from "../styles/ButtomStyle";
import { API } from "../services/Api";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function InvoiceData({ navigation, route }) {
  const barcode = route.params.barcode;
  const [recipient, setRecipient] = useState("");
  const [value, setValue] = useState("");
  const [cashBack, setCashBack] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  function navigateToScan() {
    navigation.navigate("Scan");
  }

  function getDate() {
    const date = new Date();
    const dateFormat = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    setDate(dateFormat);
  }

  function getInvoiceData() {
    fetch(API + "/debts?id=" + barcode)
      .then(async (response) => {
        const data = await response.json();
        setRecipient(data[0].recipient);
        setValue(data[0].amount);
      })
      .catch(() => {
        alert("Não foi possível localizar o boleto");
        navigateToScan();
      });
  }
  function GetCashBack() {
    let cashData = parseFloat(value) * 0.1;
    cashData = cashData.toFixed(2);
    setCashBack(cashData);
  }

  function Payment() {
    fetch(API + "/invoices?code=" + barcode)
      .then(async (response) => {
        const data = await response.json();
        if (data[0] == undefined) {
          fetch(API + "/invoices", {
            method: "POST",
            body: JSON.stringify({
              recipient: recipient,
              amount: value,
              date: date,
              code: barcode,
              user_id: id,
              cashback: cashBack,
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then(async () => {
              navigation.navigate("List");
            })
            .catch(() => console.log("Erro ao pagar o boleto"));
        } else {
          alert("Esse boleto já foi pago!");
          navigateToScan();
        }
      })
      .catch();
  }
  useEffect(getInvoiceData);
  useEffect(GetCashBack);
  useEffect(getDate);
  useEffect(() => {
    AsyncStorage.getItem("id")
      .then((value) => {
        setId(value);
      })
      .catch();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.viewData}>
        <Text style={styles.textData}>Para: {recipient}</Text>
        <Text style={styles.textData}>Valor: R${value}</Text>
        <Text style={styles.textData}>Código do boleto: {barcode}</Text>
        <Text style={styles.textData}>Cashback: R${cashBack}</Text>
      </View>
      <TouchableOpacity style={buttomStyles.buttom} onPress={Payment}>
        <Text style={[buttomStyles.buttomText, { color: "#D7DFE0" }]}>
          PAGAR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[buttomStyles.buttom, { backgroundColor: "#D7DFE0" }]}
        onPress={navigateToScan}
      >
        <Text style={[buttomStyles.buttomText]}>Cancelar</Text>
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
  viewData: {
    borderWidth: 1,
    borderColor: "#D7DFE0",
    width: "90%",
    height: "60%",
    marginTop: 30,
    marginBottom: 30,
    padding: 20,
    flexWrap: "wrap",
    borderRadius: 5,
  },
  textData: {
    color: "#D7DFE0",
    alignSelf: "flex-start",
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 30,
  },
});
