import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const registerUser = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredentials.user;
  } catch (error) {
    console.log(error.message);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return "User loged out";
  } catch (error) {
    console.log(error.message);
  }
};
