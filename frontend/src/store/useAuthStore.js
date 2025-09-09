import { create } from "zustand";
import { loginUser, registerUser, getMe, logoutUser } from "@/api/authApi";

const useAuthStore = create((set) => ({
    user: null,
    success: false,
    error: null,

    // ✅ no need to manage token manually (cookie handles auth)
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null, success: false, error: null }),

    login: async (credentials) => {
        try {
            const data = await loginUser(credentials); // cookie will be set by backend
            set({ user: data?.user, success: true, error: null });
            return data;
        } catch (err) {
            set({
                user: null,
                success: false,
                error: err?.response?.data || err.message,
            });
            throw err; // let react-query catch it
        }
    },

    register: async (userData) => {
        try {
            const data = await registerUser(userData);
            set({ user: data?.user, success: true, error: null });
            return data;
        } catch (err) {
            set({
                user: null,
                success: false,
                error: err?.response?.data || err.message,
            });
            throw err;
        }
    },

    fetchMe: async () => {
        try {
            const data = await getMe(); // will succeed only if cookie is valid
            set({ user: data?.data, success: true, error: null });
            return data;
        } catch (err) {
            set({
                user: null,
                success: false,
                error: err?.response?.data || err.message,
            });
            return null;
        }
    },

    logout: async () => {
        // 🔹 Backend should clear cookie (e.g., /auth/logout)
        try {
            const data = await logoutUser();
            set({ user: null, success: false, error: null });
            return data;
        } catch (err) {
            set({
                user: null,
                success: false,
                error: err?.response?.data || err.message,
            });
            throw err;
        }

    },
}));

export default useAuthStore;
