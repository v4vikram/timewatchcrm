"use client";
import React from "react";
import { cn } from "@/lib/utils"; // Shadcn utility for classNames

const Spinner = ({
  size = "md",
  color = "primary",
  variant = "border",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const colorClasses = {
    primary: "border-blue-600",
    secondary: "border-purple-600",
    white: "border-white",
    black: "border-black",
  };

  if (variant === "pulse") {
    return (
      <div
        className={cn(
          "rounded-full animate-ping",
          sizeClasses[size],
          colorClasses[color],
          className
        )}
      />
    );
  }

  // default border spinner
  return (
    <div
      className={cn(
        "border-4 border-t-transparent border-solid rounded-full animate-spin",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
};

export default Spinner;
