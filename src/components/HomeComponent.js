import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Aqui é a home onde tudo acontece.
          </Text>
          <Button title="Voltar" onPress={() => navigation.goBack()} />
          <Button
            title="Vá para o Profile"
            onPress={() =>
              navigation.replace("Profile", {
                someParam: "Param",
              })
            }
          />
          <Button
            title="Vá para o Profile"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: "Profile",
                    params: { someParam: "reset" },
                  },
                ],
              })
            }
          />
          <Button
            title="Vá para o Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title="Vá para o Profile"
            onPress={() =>
              navigation.navigate("Profile", { someParam: "Param1" })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
