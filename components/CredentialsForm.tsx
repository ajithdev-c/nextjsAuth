"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CredentialsForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      router.push("/welcomepage");
    } else {
      console.log("Error:", signInResponse);
      setError("Your Email or password incorrect");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
    >
      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500">
          {error}
        </span>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="w-full h-12 px-6 mt-4 text-lg text-white transition rounded-lg bg-green-500"
      >
        Log In
      </button>
    </form>
  );
};

export default CredentialsForm;
