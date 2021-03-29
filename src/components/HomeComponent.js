import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HomeComponent = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.buttonSignOut}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonSignOutText}>Sair do Aplicativo</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Image
          style={styles.profileImage}
          source={require("../assets/girl_profile.png")}
        />
        <View style={styles.block}>
          <Text style={styles.name}>Olá, Maria!</Text>
          <Text>CPF: 023.323.234-10</Text>
          <Text>Ag: 23434</Text>
          <Text>Conta: 23423-0</Text>
        </View>
      </View>
      <View>
        <Image
          style={styles.cardImage}
          source={require("../assets/credit-card-front.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileImage: {
    margin: 16,
    width: 100,
    height: 100,
  },
  block: {
    margin: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardImage: {
    marginLeft: 16,
    borderRadius: 12,
    width: 300,
    height: 200,
  },
  buttonSignOut: {
    width: 150,
    padding: 10,
    backgroundColor: "#ff5a5a",
    borderRadius: 12,
  },
  buttonSignOutText: {
    color: "#ffffff",
  },
});
