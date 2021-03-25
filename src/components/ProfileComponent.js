import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const Profile = ({ route, navigation }) => {
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
            Esta é a página de Profile {"\n"} {route.params.someParam}
          </Text>
          {route.params.someParam != "reset" ? (
            <Button title="Voltar" onPress={() => navigation.goBack()} />
          ) : null}
          <Button
            onPress={() => navigation.navigate("Home")}
            title="Vá para aHome"
          />
          <Button
            title="Vá para o Login"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: "Login",
                    params: { someParam: "reset" },
                  },
                ],
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
