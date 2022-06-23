import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import landingBg from "../../assets/a.jpg";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image source={landingBg} style={{ width: "100%", height: "100%" }} />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <View style={{ marginVertical: 20, flex: 1 }}>
          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>
            KEEP IN TOUCH WITH THE PEOPLE OF SHAREFAST
          </Text>
          <Text style={{ fontSize: 18, color: "#666", marginTop: 15 }}>
            Sign in with your sharefast email
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("Register")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Landing;

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
