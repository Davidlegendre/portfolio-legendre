
import pako from "pako";
export function compressToBase64(obj: any): string {
  const json = JSON.stringify(obj);
  const deflated = pako.deflate(json);
  return Buffer.from(deflated).toString('base64');
}

export function decompressFromBase64(str: string): any {
  const buffer = Buffer.from(str, 'base64');
  const inflated = pako.inflate(buffer, { to: 'string' });
  return JSON.parse(inflated);
}

export const compressedStorage = {
  getItem: (name: string): string | null => {
    const item = localStorage.getItem(name);
    if (!item) return null;
    try {
      // 🔓 descomprime → devuelve el JSON string original
      return decompressFromBase64(item); 
    } catch (err) {
      console.error("Error al descomprimir commonData:", err);
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    try {
      // `value` aquí es un string (ya serializado por createJSONStorage)
      const compressed = compressToBase64(value);
      localStorage.setItem(name, compressed);
    } catch (err) {
      console.error("Error al comprimir commonData:", err);
    }
  },
  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  },
};