import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { AntDesign } from "@expo/vector-icons";
import { auth } from "../../firebaseConfig";

const Header = ({ title }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log("ErrMsg:", error.message);
    }
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: "#FE2B4C",
        height: 75,
      }}
    >
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
        <AntDesign name="logout" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={{ color: "#fff", fontSize: 22 }}>
        {title || "ShareFast"}
      </Text>

      <TouchableOpacity onPress={() => navigate("UserProfile")}>
        <AntDesign name="user" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
