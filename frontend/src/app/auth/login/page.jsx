"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { loginSchema } from "@/schema/auth";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const loginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={async (values, { setErrors }) => {
        try {
          console.log("Submitting login with values:", values);
          // const loginRes = await login(values);

          // console.log("loginRes", loginRes);

          // if (loginRes.status === 200) {
          //   setCurrentPage("success");

          //   const intervalId = setInterval(() => {
          //     clearInterval(intervalId); // stop it after first run
          //     router.replace(`/dashboard/membership`);
          //   }, 3000);
          // }
        } catch (e) {
          console.log("e.response?.data?.errors", e.response?.data?.errors);
          setErrors(e.response?.data?.errors);
          console.error("Register failed", e.response.data.errors, error);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="animate-in slide-in-from-right duration-300 space-y-6">
          {/* Email */}
          <div>
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Field
                as={Input}
                name="email"
                type="email"
                className="w-full bg-gray-50 border-2 rounded-2xl py-4 px-12 focus:ring-2 focus:ring-primary"
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
                className="w-full bg-gray-50 border-2 rounded-2xl py-4 px-12 pr-12 focus:ring-2 focus:ring-primary"
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
      )}
    </Formik>
  );
};

export default loginPage;
