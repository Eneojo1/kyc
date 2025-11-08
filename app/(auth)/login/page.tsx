"use client";
import { CheckSquare, Eye, EyeOff, Square } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase-client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
  message: string;
  loading: boolean;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
    message: "",
    loading: false,
  });

  const [showPw, setShowPw] = useState(false);
  const router = useRouter();

  const toggleRemember = () =>
    setFormData((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { email, password, rememberMe } = formData;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, loading: true }));

    const storage = rememberMe ? localStorage : sessionStorage;

    const tempSupabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          storage,
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true,
        },
      }
    );

    // login user
    const { data, error } = await tempSupabase.auth.signInWithPassword({
      email,
      password,
    });

    setFormData((prev) => ({ ...prev, loading: false }));

    if (error) alert(error.message);
    else {
      alert("Login successful!");
      router.push("/dashboard"); // Redirect to home or desired page
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) {
      alert(error.message);
    } else {
      alert(
        "Password reset link sent to your email.If an account exists with that email, a password reset link has been sent."
      );
    }

    router.push("/forgot-password");
  };

  return (
    <div className={`${styles.card} bg-[url('/login-bg.png')]`}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder=" "
            className="login-input peer"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className={styles.label}>Username</label>
        </div>

        <div className={styles.inputGroup}>
          <input
            name="password"
            type={showPw ? "text" : "password"}
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
            className="login-input peer"
          />
          <label className={styles.label}>Password</label>
          <span
            onClick={() => setShowPw((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 cursor-pointer select-none"
          >
            {showPw ? (
              <EyeOff size={20} className="text-se6" />
            ) : (
              <Eye size={20} className="text-se6" />
            )}
          </span>
        </div>
        <div className="text-sm flex justify-between items-center pb-5">
          <span
            onClick={toggleRemember}
            className="flex items-center gap-1 text-se4 cursor-pointer"
          >
            {formData.rememberMe ? <CheckSquare /> : <Square />}
            Remember me
          </span>

          <p
            className="underline cursor-pointer text-se4"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex-1 !bg-se6 !text-se4"
          >
            Cancel
          </button>
          <button className="flex-1">
            {formData.loading ? "Signing in..." : "Login"}
          </button>
        </div>
        <p className="text-sm text-center mt-8 sm:mt-4 text-se4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-pr2 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

const styles = {
  card: `h-[calc(100vh-var(--header-height))] flex flex-col 
  items-center justify-center bg-pr3  bg-cover bg-center bg-no-repeat`,

  form: `w-[80%] sm:max-w-md rounded-xl backdrop-blur-lg
  shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] p-3 pt-5 sm:p-8`,

  inputGroup: `relative flex items-center w-full border-b-1
  border-se6 mb-6`,

  label: `absolute left-2 top-1/2 -translate-y-1/2 text-se6 text-base
  transition-all duration-700 pointer-events-none peer-focus:top-[-0.1rem]
  peer-focus:text-xs peer-focus:text-pr2
  peer-[&:not(:placeholder-shown)]:top-[-0.1rem]
  peer-[&:not(:placeholder-shown)]:text-xs
  peer-[&:not(:placeholder-shown)]:text-pr2`,
};
