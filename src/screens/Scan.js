import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { buttomStyles } from "../styles/ButtomStyle";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../services/Api";
import Icon from "react-native-vector-icons/Ionicons";

export default function Scan({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("id")
      .then((value) => {
        setId(value);
      })
      .catch();
  }, []);

  useEffect(getName);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, [scanned]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("InvoiceData", { barcode: data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function getName() {
    fetch(API + "/users/" + id).then(async (result) => {
      const data = await result.json();
      setName(data.fullname);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerView}>
        <Text style={styles.header}>Olá, {name}</Text>
      </View>

      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            width: "80%",
            height: "60%",
            marginTop: 30,
          }}
        />
      )}
      {scanned && (
        <Icon
          name="ios-scan-circle-outline"
          size={250}
          color="#D7DFE0"
          style={{ marginTop: 50 }}
        />
      )}
      {scanned && (
        <TouchableOpacity
          onPress={() => setScanned(false)}
          style={[buttomStyles.buttom, styles.buttom]}
        >
          <Text style={[buttomStyles.buttomText, { color: "#D7DFE0" }]}>
            Escanear boleto
          </Text>
        </TouchableOpacity>
      )}
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
  buttom: {
    position: "absolute",
    bottom: 20,
    width: "80%",
  },
});
