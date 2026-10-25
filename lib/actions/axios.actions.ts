'use server';
import axios from "axios";
import { headers } from "next/headers";
import { v4 } from "uuid";
import { hostApi } from "../constantes";

/**
 * api → requests autenticados (con interceptor de sesión)
 * apiPublic → requests sin sesión: login, tipos de documento, etc.
 */
const apiPublic = axios.create({ baseURL: hostApi });

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function handleAxiosError(error: any): { mensaje: string; sesion: boolean } {
  const statusCode = error?.response?.status;
  const isAuthError = statusCode === 401 || statusCode === 403;
  const mensaje =
    error?.response?.data?.status?.message || error.message || "Error desconocido";
  return { mensaje, sesion: isAuthError };
}

// ─────────────────────────────────────────────
// Peticiones GET
// ─────────────────────────────────────────────

export async function peticionGET({ endpoint }: { endpoint: string }): Promise<any> {

  try {
    const res = await apiPublic.get(endpoint);
    return {
      success: !res.data.status.isError,
      mensaje: res.data.status.message,
      datos: res.data.data,
      sesion: false,
    };
  } catch (error: any) {
    const { mensaje, sesion } = handleAxiosError(error);
    return { success: false, mensaje, datos: null, sesion };
  }
}