import axios, { AxiosError } from "axios";
import { Mail } from "@/Interfaces/EmailModel";
import { toast } from "react-toastify";

export default async function SendEmail(Email: Mail) {
  const url = "https://mailservice-xgyv-dev.fl0.io/api/Mail/send";
  const json = JSON.stringify(Email)
  try {
    const result = await axios(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'        
      },
      
      data: json,
    });

    if (!result.status) {
      return false;
    }
    return true;
  } catch (error: any) {
    console.error(error.response.data.errors);
    const mensaje =
      error?.response?.data?.errors?.Subject.length > 0
        ? "Escriba su nombre"
        : error?.response?.data?.errors?.Body.length > 0
        ? "Escriba algun mensaje"
        : error?.response?.data?.errors?.ToUser.length > 0
        ? "Escriba su email"
        : "";
    toast(mensaje, {
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
