import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>List</Text>
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
