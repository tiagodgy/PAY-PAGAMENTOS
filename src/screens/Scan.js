import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";

export default function Scan() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>Scan</Text>
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