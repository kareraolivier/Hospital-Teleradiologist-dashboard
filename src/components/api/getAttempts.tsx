import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
export const getAttempts = async () => {
  try {
    const response = await axios.get(`${Link.Api}/login-attempts`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
