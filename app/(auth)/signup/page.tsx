"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!supabase) {
      return <div>Loading...</div>; // or fallback UI
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Signup successful! Check your email for verification.");
      router.push("/login");
    }

    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded p-8 w-96"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="border rounded w-full mb-3 p-2"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border rounded w-full mb-3 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full mb-3 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        {message && (
          <p className="mt-3 text-center text-sm text-gray-600">{message}</p>
        )}

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline">
            Log in
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
