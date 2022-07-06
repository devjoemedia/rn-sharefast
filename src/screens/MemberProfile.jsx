import { View, Text, Image } from "react-native";
import React from "react";
import code from "../../assets/a.jpg";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

const MemberProfile = ({ route }) => {
  const userDetails = route.params.details;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={code}
          style={{ width: 80, height: 80, borderRadius: 50, marginRight: 10 }}
        />

        <View>
          <Text style={{ color: "#222", fontSize: 18 }}>
            {userDetails?.fullname}
          </Text>
          <Text style={{ color: "#666", fontSize: 16 }}>
            {userDetails?.role}
          </Text>
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
            {userDetails?.phone}
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
            {userDetails?.email}
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
            {userDetails?.location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MemberProfile;
