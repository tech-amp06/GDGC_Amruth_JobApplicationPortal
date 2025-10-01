import axios from 'axios';

export const registerUser = async ({username, user_password, uname, user_role, current_company}: {username: string, user_password: string, uname: string, user_role: string, current_company: string, experience: number, skills: string[]}) => {
  try {
    const response = await axios.post('http://localhost:3000/register/signup', { 
      "username": username, 
      "user_password": user_password, 
      "uname": uname, 
      "user_role": user_role, 
      "current_company": current_company
    })

    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  }
  catch (error) {
    console.log(error);
  }
}