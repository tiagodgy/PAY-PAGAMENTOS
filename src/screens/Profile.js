import { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const [id, setId] = useState("");

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
      <Text>{id}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212E3E",
    justifyContent: "center",
    alignItems: "center",
  },
});
