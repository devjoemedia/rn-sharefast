import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import code from "../../assets/a.jpg";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { firestore, storage } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const UserProfile = () => {
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
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Image
            source={{ uri: user?.image }}
            style={{ width: 80, height: 80, borderRadius: 50, marginRight: 10 }}
          />
        </View>

        <View>
          <Text style={{ color: "#222", fontSize: 18 }}>{user?.fullname}</Text>
          <Text style={{ color: "#666", fontSize: 16 }}>{user?.role}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: "rgba(30,30,40,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="twitter" size={24} color="white" />
        </View>

        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: "rgba(30,30,40,0.5)",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Entypo name="linkedin" size={24} color="white" />
        </View>
      </View>

      <View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="phone" size={24} color="#666" />
          <Text style={{ color: "#666", fontSize: 22, marginLeft: 20 }}>
            {user?.phone}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="mail" size={24} color="#666" />
          <Text style={{ color: "#666", fontSize: 22, marginLeft: 20 }}>
            {user?.email}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="location-sharp" size={24} color="#ccc" />
          <Text style={{ color: "#666", fontSize: 22, marginLeft: 20 }}>
            Califonia, LA
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
