import * as React from "react";
import { SafeAreaView } from "react-native";
import LoginComponent from "../components/LoginComponent";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginComponent navigation={navigation} />
    </SafeAreaView>
  );
};

export default Login;
