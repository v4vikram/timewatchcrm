"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { loginSchema } from "@/schema/auth";
import React, { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { useLogin, useLogout, useFetchMe } from "@/hooks/useAuth";



const loginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { mutate: login } = useLogin();
  const { mutate: logout } = useLogout();
  const { data: user, isLoading, isError } = useFetchMe();

  const handleLogin = async (values, { setErrors }) => {
    try {
      await login(values);
      router.push("/dashboard");
    } catch (error) {
      console.log("Backend error:", error);
      setErrors(error.response?.data?.errors || { email: error.message });
    }
  };

  useEffect(() => {
    if (user?.data) {
      router.push("/dashboard");
    }
  }, [user])



  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <div className="min-h-screen flex justify-center items-center p-4">
          <button onClick={() => logout()}>
            Logout
          </button>
          <Form className="animate-in slide-in-from-right duration-300 space-y-6 bg-gray-50 p-6">
            {/* Email */}
            <div>
              <Label>Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  className="w-full bg-gray-50 border-2 rounded-md py-4 pl-12 focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <Label>Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Field
                  as={Input}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-gray-50 border-2 rounded-md py-4 px-12 pr-12 focus:ring-2 focus:ring-primary"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default loginPage;
