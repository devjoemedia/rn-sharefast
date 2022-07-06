import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GetStarted from "./src/screens/GetStarted";
import Landing from "./src/screens/Landing";
import Scanner from "./src/screens/Scanner";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./src/screens/Register";
import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import MemberProfile from "./src/screens/MemberProfile";
import { useNavigation } from "@react-navigation/native";
import UserProfile from "./src/screens/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { login, logout } from "./src/redux/authSlice";
import Header from "./src/components/Header";

const Stack = createStackNavigator();

export default function RootStack() {
  const { user, authenticated } = useSelector(({ user }) => ({
    user: user?.user,
    authenticated: user?.authenticated,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            email: authUser?.email,
            uid: authUser?.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user && authenticated ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: true,
                headerTintColor: "#FFFFFF",
                headerStyle: {
                  backgroundColor: "#FE2B4C",
                },
                header: () => <Header />,
              }}
            />
            <Stack.Screen
              name="MemberProfile"
              component={MemberProfile}
              options={{
                headerShown: true,
                header: () => <Header title="MemberProfile" />,
              }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{
                headerShown: true,
                header: () => <Header title="UserProfile" />,
              }}
            />
            <Stack.Screen name="Scanner" component={Scanner} />
          </>
        ) : (
          <>
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Landing" component={Landing} />

            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: true,
                headerTintColor: "#FFFFFF",
                headerStyle: {
                  backgroundColor: "#FE2B4C",
                },
              }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: true,
                headerTintColor: "#FFFFFF",
                headerStyle: {
                  backgroundColor: "#FE2B4C",
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
});
