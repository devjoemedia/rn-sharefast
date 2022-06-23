import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.text]}>ShareFast</Text>
      </View>

      <View>
        <Text style={[styles.text, { color: "#666" }]}>ShareFast </Text>
        <Text style={[styles.text, { color: "#666" }]}>Contacts</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("MemberProfile")}
          onPress={() => navigation.navigate("Landing")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    borderBottomColor: "#FE2B4C",
    borderBottomWidth: 4,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 22,
    color: "#666",
  },
});
