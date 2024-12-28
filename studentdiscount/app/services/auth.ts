import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase";

export const signUp = async (name: string, email: string, password: string, optOut: boolean = false) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        uid: user.uid,
        email: user.email,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to save user data to the database.");
    }

    console.log("User signed up and saved in the database.");
  } catch (error: any) {
    console.error("Sign-up Error:", error.message);
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully:", userCredential.user);
  } catch (error: any) {
    console.error("Log-in Error:",error.message);
  }
};
