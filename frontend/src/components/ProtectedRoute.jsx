"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./common/Spinner";
import { useFetchMe } from "@/hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { data, isLoading, refetch } = useFetchMe();
  const [success, setSuccess] = useState(true);

  console.log("ProtectedRoute - useFetchMe data:", data?.data);

  useEffect(() => {
    if (data?.data) {
      setSuccess(false);
      router.replace("/dashboard");
    } else {
      router.replace("/"); // redirect to login
    }
  }, [data]);

  if (success) {
    return (
      <div className="min-h-screen w-full justify-center items-center flex">
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
}
