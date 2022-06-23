import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { SafeAreaView } from "react-native-safe-area-context";

const Scarner = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const userData = JSON.parse(data);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("MemberProfile", { details: userData });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
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
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "#FE2B4C", textAlign: "center" }}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Scarner;
