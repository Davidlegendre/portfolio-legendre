import { toast } from "react-toastify";

export function isNullOrWhitespace( input: any) {

  if (typeof input === 'undefined' || input == null) return true;

  return input.replace(/\s/g, '').length < 1;
}

export function validation(e: string, mensaje: string){
 
 
  if(isNullOrWhitespace(e))
    {
      toast(mensaje, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    }
    return true
}

export function getEmails(){
  const emails = process.env.NEXT_PUBLIC_EMAILS?.split('|');
  
  return [
    {
      nombre: "David Legendre",
      email: emails![0],
    },
    {
      nombre: "David Legendre",
      email: emails![1],
    },
  ]
  
}