"use client";
import React, { useState, useEffect } from "react";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { signUp, logIn } from "../services/auth";

const Page: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const auth = getAuth();

  // Helper function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isSignUp) {
      if (!isAcademicEmail(email)) {
        setError("Please use an academic email address.");
        return;
      }

      try {
        const actionCodeSettings = {
          url: `${window.location.origin}/joinus?email=${email}`,
          handleCodeInApp: true,
        };

        await sendSignInLinkToEmail(auth, email,actionCodeSettings);
        window.localStorage.setItem("emailForSignIn", email);
        setOtpSent(true);
      } catch (err: any) {
        setError(err.message || "Failed to send Link. Please try again.");
      }
    } else {
      try {
        await logIn(email, password); 
        router.push("/"); 
      } catch (err: any) {
        setError(err.message || "Invalid email or password.");
      }
    }
  };

  const verifyEmail = async () => {
    setError(null);

    try {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        const emailForSignIn = window.localStorage.getItem("emailForSignIn");
        if (!emailForSignIn) {
          setError("No email found. Please restart the process.");
          return;
        }
        await signInWithEmailLink(auth, emailForSignIn, window.location.href);
        await signUp(name, emailForSignIn, password);
        router.push("/"); 
      } else {
        setError("Invalid verification link.");
      }
    } catch (err: any) {
      setError(err.message || "Failed to verify email. Please try again.");
    }
  };

  const isAcademicEmail = (email: string) => {
    const academicDomains = ["edu", "ac", "in", "college", "university"];
    return academicDomains.some((domain) => email.endsWith(`.${domain}`));
  };

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      verifyEmail();
    }
  }, []);

  return (
    <div className="mt-40 mx-6 h-[60vh] max-w-md bg-white shadow-md rounded-lg">
      <div className="flex justify-between border-2 m-0 h-fit border-black rounded-t-sm">
        <button
          onClick={() => setIsSignUp(true)}
          className={`text-xl font-bold text-center p-2 w-[50%] border-r-2 border-black h-full ${isSignUp ? "bg-gray-100" : "bg-white"}`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setIsSignUp(false)}
          className={`text-xl font-bold text-center p-2 w-[50%] h-full ${isSignUp ? "bg-white" : "bg-gray-100"}`}
        >
          Log In
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-10 mx-2">
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        {isSignUp && !otpSent && (
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        )}

        <div>
          <input
            type="email"
            placeholder="Academic Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
        >
          {isSignUp ? (otpSent ? "Resend OTP" : "Send OTP") : "Log In"}
        </button>
      </form>

      {!isSignUp && (
        <p
          className="mt-4 text-center text-blue-500 cursor-pointer hover:underline"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
        </p>
      )}
    </div>
  );
};

export default Page;

