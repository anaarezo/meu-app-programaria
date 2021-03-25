import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginComponent = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Digite seu usuário");
  const [password, onChangePassword] = React.useState(null);
  return (
    <SafeAreaView>
      <View accessibilityRole="form">
        <Text style={styles.title}>Bem-vinda!</Text>
        <Text style={styles.labelLogin}>Entre para continuar</Text>
        <Text style={styles.labelUser}>Usuário:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.labelUser}>Senha:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Digite sua senha"
          keyboardType="password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Fazer o login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  title: {
    paddingTop: 60,
    paddingHorizontal: 16,
    fontSize: 35,
    fontWeight: "bold",
    color: "#192a4d",
  },
  labelLogin: {
    paddingHorizontal: 16,
    fontSize: 20,
    color: "#192a4d",
  },
  labelUser: {
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    // placeholderTextColor: "red",
  },
  button: {
    margin: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#692ca0",
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 25,
  },
});
