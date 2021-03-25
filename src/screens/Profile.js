import * as React from "react";
import { SafeAreaView } from "react-native";
import ProfileComponent from "../components/ProfileComponent";

const Profile = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileComponent navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default Profile;
