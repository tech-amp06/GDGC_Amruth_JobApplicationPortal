import axios from 'axios';

export const auth = async ({ username, password }: { username: string, password: string }) => {
  try {
    console.log("Credentials: ", username, password);
    const response = await axios.post('http://localhost:3000/auth/login', { "username": username, "user_password": password });

    if (response.data) {
      console.log("API Call Successful: ", response.data);
      return response.data;
    } else {
      console.log("Invalid Credentials", response.data);
      return null;
    }
  }
  catch (error) {
    console.log("API Call failed: ", error)
    throw error;
  }
}