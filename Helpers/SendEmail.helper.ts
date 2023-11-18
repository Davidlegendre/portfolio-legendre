import axios, { AxiosError } from "axios";
import { Mail } from "@/Interfaces/EmailModel";
import { toast } from "react-toastify";

export default async function SendEmail(Email: Mail) {
  const url = "https://mailservice-dev-mkzd.4.us-1.fl0.io/api/Mail/send";
  const json = JSON.stringify(Email)
  try {
    const result = await axios(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'        
      },
      
      data: json,
    });

    return result.status;
  } catch (error: any) {
    console.error(error);
    toast("Email no enviado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return false;
  }
}
