import axios from "axios";
import { Mail } from "@/Interfaces/EmailModel";

export default async function SendEmail(Email: Mail) {
  const url = "https://mailservice-xgyv-dev.fl0.io/api/Mail/send";
  try {
    const json = JSON.stringify(Email);
    const result = await axios(url, {
      method: 'post',     
      data: JSON.stringify(Email),
      headers:{
        "Content-Type": 'application/json'
      }
    });
    if (!result.status) return false;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
