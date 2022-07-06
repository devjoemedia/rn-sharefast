import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import headerBg from "../../assets/a.jpg";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../redux/authSlice";
import { auth } from "../../firebaseConfig";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(
        login({
          email: userCredentials.user.email,
          uid: userCredentials.user.uid,
          displayName: userCredentials.user.displayName,
          photoUrl: userCredentials.user.photoURL,
        })
      );
      // dispatch(login({ name: "John", email: "john@test.com" }));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ paddingHorizontal: 0 }}
    >
      <ScrollView style={{ height: "100%" }}>
        <View>
          <Image source={headerBg} style={{ width: "100%", height: 150 }} />
        </View>

        <View style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 2,
              borderBottomColor: "#ccc",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 18 }}>Email</Text>
            <TextInput
              placeholder="jane.doe@example.com"
              style={{
                textAlign: "right",
                flex: 1,
                paddingLeft: 15,
                fontSize: 18,
              }}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 2,
              borderBottomColor: "#ccc",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 18 }}>Password</Text>
            <TextInput
              secureTextEntry
              placeholder="Enter a password"
              style={{
                textAlign: "right",
                flex: 1,
                paddingLeft: 15,
                fontSize: 18,
              }}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={{ marginVertical: 15 }}>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#FE2B4C",
                marginVertical: 20,
                paddingBottom: 5,
                width: "auto",
                fontSize: 18,
              }}
            >
              Forget? Reset Password
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FE2B4C",
    padding: 10,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
});
