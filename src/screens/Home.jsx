import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import code from "../../assets/a.jpg";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { firestore, storage } from "../../firebaseConfig";

const Home = () => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState(null);

  const { uid, email } = useSelector(({ user }) => user.user);

  const getUserDetails = async () => {
    try {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);

      const url = await getDownloadURL(ref(storage, `images/${uid}`));

      const userData = { ...docSnap.data(), image: url, email };
      if (docSnap.exists()) {
        setUser(userData);
      }
    } catch (error) {
      console.log("ErrMsg: " + error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

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
        </View>

        <View style={{ alignItems: "center" }}>
          <QRCode value={JSON.stringify(user)} size={250} />
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 16 }}
        >
          <Image
            source={{ uri: user?.image }}
            style={{ width: 60, height: 60, borderRadius: 50, marginRight: 10 }}
          />

          <View>
            <Text style={{ color: "#222", fontSize: 18 }}>
              {user?.fullname}
            </Text>
            <Text style={{ color: "#666", fontSize: 16 }}>{user?.role}</Text>
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
