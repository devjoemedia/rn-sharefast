import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import code from "../../assets/a.jpg";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { logout } from "../redux/authSlice";

const Home = () => {
  const { navigate } = useNavigation();
  const userInfo = {
    name: "Joseph Nartey",
    role: "Senior Developer",
    phone: "05405392555",
    email: "joenart@gmail.com",
    location: "Easthamptten, UK",
  };

  const { user, authenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(logout());
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.9, justifyContent: "space-around" }}>
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ color: "#222", fontSize: 18 }}>
            Exchange contact information
          </Text>
          <Text style={{ color: "#666", fontSize: 16 }}>
            Scan this QR below to share your contacts
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#FE2B4C",
              padding: 10,
              minWidth: 100,
              borderRadius: 4,
            }}
            onPress={handleSignOut}
          >
            <Text style={{ color: "#FE2B4C", textAlign: "center" }}>
              SignOut
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <QRCode value={JSON.stringify(userInfo)} size={250} />
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 16 }}
        >
          <Image
            source={code}
            style={{ width: 60, height: 60, borderRadius: 50, marginRight: 10 }}
          />

          <View>
            <Text style={{ color: "#222", fontSize: 18 }}>Joseph Nartey</Text>
            <Text style={{ color: "#666", fontSize: 16 }}>
              Senior Developer
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopWidth: 2,
          borderTopColor: "#ccc",
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ color: "#666", fontSize: 16 }}>
          want to add a new connection?
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#FE2B4C",
            padding: 10,
            minWidth: 100,
            borderRadius: 4,
          }}
          onPress={() => navigate("Scanner")}
        >
          <Text style={{ color: "#FE2B4C", textAlign: "center" }}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
