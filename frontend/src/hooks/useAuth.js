"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import useAuthStore from "@/store/useAuthStore";

export function useLogin() {
  const login = useAuthStore((s) => s.login);

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("✅ Login success:", data);
    },
    onError: (err) => {
      console.error("❌ Login failed:", err);
    },
  });
}

// export function useRegister() {
//   const register = useAuthStore((s) => s.register);

//   return useMutation({
//     mutationFn: register,
//     onSuccess: (data) => {
//       console.log("✅ Register success:", data);
//     },
//     onError: (err) => {
//       console.error("❌ Register failed:", err);
//     },
//   });
// }

export function useLogout() {
  const logout = useAuthStore((s) => s.logout);

  return useMutation({
    mutationFn: async () => logout(),
    onSuccess: () => {
      console.log("👋 Logged out");
    },
  });
}

export function useFetchMe() {
  const fetchMe = useAuthStore((s) => s.fetchMe);

  return useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    retry: false, // don’t retry on auth failure
  });
}
