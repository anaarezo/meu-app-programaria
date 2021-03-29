import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LoginComponent = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Bem-vinda!!!</Text>
      <Text style={styles.subtitle}>Faça o Login:</Text>
      <TextInput
        style={styles.field}
        placeholder="Digite seu CPF"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.field}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Fazer o login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingTop: 50,
    fontSize: 25,
    fontWeight: "bold",
    color: "#3b3b3b",
  },
  subtitle: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3b3b3b",
  },
  field: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    margin: 10,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#3b3b3b",
    fontSize: 16,
  },
  button: {
    margin: 16,
    padding: 16,
    height: 60,
    backgroundColor: "#692ca0",
    borderRadius: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
