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

const Register = () => {
  const navigation = useNavigation();

  const [image, setImage] = useState(null);

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
            />
          </View>
          <View style={{ marginVertical: 15 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
