import axios from "@/lib/axiosInstance";
// REGISTER
export const registerUser = async (userData) => {
  const res = await axios.post("/auth/register", userData);
  return res.data;
};

// LOGIN
export const loginUser = async (credentials) => {
  const res = await axios.post("/auth/login", credentials);
  return res;
};

// GET LOGGED-IN USER INFO
export const getMe = async () => {
  const res = await axios.get("/auth/me");
  return res.data;
};

// LOGOUT USER
export const logoutUser = async () => {
  const res = await axios.post("/auth/logout");
  return res.data;
};