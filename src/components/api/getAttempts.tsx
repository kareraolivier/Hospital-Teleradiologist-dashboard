import axios from "axios";
import { Link } from "../../config";
import { getAuthToken } from "../../utils/auth";
import { getSingleUser } from "./getSingleUser";
export const getAttempts = async () => {
  try {
    const response = await axios.get(`${Link.Api}/login-attempts`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    const attempts = response.data;

    const attemptsWithUserData = await Promise.all(
      attempts.map(async (el: any) => {
        const data = await getSingleUser(el.user);
        return { ...el, name: `${data.firstName} ${data.lastName}` };
      })
    );

    return attemptsWithUserData;
  } catch (error) {
    throw error;
  }
};
