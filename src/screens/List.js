import { SafeAreaView, Text, StyleSheet, StatusBar, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { API } from "../services/Api";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

export default function List() {
  const isFocused = useIsFocused();
  const [id, setId] = useState("");
  const [invoices, setInvoices] = useState([]);

  function getInvoices() {
    fetch(API + "/invoices?user_id=" + id).then(async (response) => {
      const data = await response.json();
      setInvoices(data);
    });
  }
  useEffect(() => {
    AsyncStorage.getItem("id")
      .then((value) => {
        setId(value);
      })
      .catch();
  }, []);
  useEffect(getInvoices, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerView}>
        <Text style={styles.header}>Boletos pagos</Text>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {invoices.map((invoice) => (
          <View style={styles.invoiceView}>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text style={styles.invoiceText}>{invoice.date}</Text>
              <Text style={styles.invoiceText}>R$ {invoice.amount}</Text>
            </View>
            <Text style={styles.cashBackText}>
              Cashback R$ {invoice.cashback}
            </Text>
            <Text numberOfLines={1} style={styles.invoiceRecipient}>
              {invoice.recipient}
            </Text>
          </View>
        ))}
      </ScrollView>
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
    marginBottom: 30,
  },
  invoiceView: {
    borderRadius: 5,
    backgroundColor: "#D7DFE0",
    width: "90%",
    height: 120,
    alignSelf: "center",
    padding: 10,
    marginVertical: 15,
  },
  invoiceText: {
    fontSize: 20,
  },
  invoiceRecipient: {
    position: "absolute",
    bottom: 10,
    fontSize: 30,
    color: "#5B41F5",
    fontWeight: "bold",
    marginHorizontal: 10,
    flexWrap: "wrap",
  },
  cashBackText: {
    fontSize: 20,
    marginTop: 15,
    color: "#2FAB48",
    fontWeight: "bold",
  },
});
