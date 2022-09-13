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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Nova Conta</Text>
      <KeyboardAwareScrollView style={styles.scroll}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput style={[InputStyles.input, { width: "100%" }]}></TextInput>
        <Text style={styles.label}>Celular</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="phone-pad"
        ></TextInput>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="email-address"
        ></TextInput>
        <Text style={styles.label}>RG</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="number-pad"
        ></TextInput>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          keyboardType="number-pad"
        ></TextInput>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={[InputStyles.input, { width: "100%" }]}
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.buttomView}>
          <TouchableOpacity
            style={[
              buttomStyles.buttom,
              { backgroundColor: "#D7DFE0", width: "40%" },
            ]}
          >
            <Text style={[buttomStyles.buttomText, { color: "#5B41F5" }]}>
              Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[buttomStyles.buttom, { width: "40%" }]}>
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
    color: "#5B41F5",
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
