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
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore, storage } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredentials.user.uid;

      const userInfo = {
        fullname,
        role,
        phone,
        twitter,
        linkedin,
      };

      await setDoc(doc(firestore, "users", uid), userInfo);
      await uploadProfileImage(uid, image);
    } catch (error) {
      console.log(error.message);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ paddingHorizontal: 0 }}
    >
      <ScrollView style={{ height: "100%" }}>
        <ImageBackground
          source={image && { uri: image }}
          style={{ width: "100%", height: 150, backgroundColor: "#FBFBFB" }}
        >
          <TouchableOpacity
            onPress={pickImage}
            style={{
              width: "100%",
              flex: 1,
            }}
          >
            {!image && (
              <View
                style={{
                  width: "100%",
                  // height: 200,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="user" size={90} color="#FE2B4C" />
                <Text
                  style={{ fontSize: 22, color: "#FE2B4C", fontWeight: "bold" }}
                >
                  Add Profile Photo
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </ImageBackground>

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
            <Text style={{ fontSize: 18 }}>Full Name</Text>
            <TextInput
              placeholder="John Doe"
              style={{
                textAlign: "right",
                flex: 1,
                paddingLeft: 15,
                fontSize: 18,
              }}
              onChangeText={(text) => setFullname(text)}
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
            <Text style={{ fontSize: 18 }}>Email</Text>
            <TextInput
              placeholder="john.doe@example.com"
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
            <Text style={{ fontSize: 18 }}>Phone Number</Text>
            <TextInput
              placeholder="(+233) 558 666 655"
              style={{
                textAlign: "right",
                flex: 1,
                paddingLeft: 15,
                fontSize: 18,
              }}
              onChangeText={(text) => setPhone(text)}
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
            <Text style={{ fontSize: 18 }}>Role</Text>
            <TextInput
              placeholder="Developer"
              style={{
                textAlign: "right",
                flex: 1,
                paddingLeft: 15,
                fontSize: 18,
              }}
              onChangeText={(text) => setRole(text)}
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
            <Text style={{ fontSize: 18 }}>Twitter</Text>
            <TextInput
              placeholder="@devjoemedia"
              style={{
                textAlign: "right",
                flex: 1,
                paddingLeft: 15,
                fontSize: 18,
              }}
              onChangeText={(text) => setTwitter(text)}
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
            <Text style={{ fontSize: 18 }}>LinkedIn</Text>
            <TextInput
              placeholder="/josephnartey"
              style={{
                textAlign: "right",
                flex: 1,
                paddingLeft: 15,
                fontSize: 18,
              }}
              onChangeText={(text) => setLinkedin(text)}
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
              placeholder="Enter Password"
              style={{
                textAlign: "right",
                flex: 1,
                paddingLeft: 15,
                fontSize: 18,
              }}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={{ marginVertical: 15 }}>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

export const uploadProfileImage = async (uid, image) => {
  try {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    const imagesRef = ref(storage, `images/${uid}`);
    await uploadBytes(imagesRef, blob);
  } catch (error) {
    console.log(error);
  }
};

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
