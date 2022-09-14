import {
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { buttomStyles } from "../styles/ButtomStyle";
import { Calendar } from "react-native-calendars";
import { format } from "date-fns";

export default function ChargeDate({ navigation, route }) {
  const [date, setDate] = useState(() => {
    const dataAtual = new Date();
    return format(dataAtual, "yyyy-MM-dd");
  });

  function navigateToSignUp() {
    navigation.navigate("SignUp");
  }
  function navigateToPolicy() {
    navigation.navigate("Policy", {
      profile: route.params.profile,
      adress: route.params.adress,
      date: date,
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Qual data de cobrança?</Text>
      <Calendar
        //minDate={dataAtual}
        style={styles.calendar}
        markedDates={{
          [date]: {
            selected: true,
            marked: true,
            selectedColor: "#FFF",
            dotColor: "red",
          },
        }}
        onDayPress={(currentDate) => setDate(currentDate.dateString)}
        theme={{
          selectedDayTextColor: "#5B41F5",
          todayTextColor: "#FFF",

          calendarBackground: "#455558", // cor do calendario em si
          dayTextColor: "#FFF", // cores dos dia
          arrowColor: "#FFF", // cores do avançar e voltar
          monthTextColor: "#FFF", // cor do mês selecionado
        }}
      />
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
          onPress={navigateToPolicy}
        >
          <Text style={buttomStyles.buttomText}>Continuar</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 30,
    color: "#D7DFE0",
    padding: 20,
  },
  buttomView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  calendar: {
    borderRadius: 10,
    margin: 20,
    padding: 30,
  },
});
