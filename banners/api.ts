interface Window {
  _env_?: {
    BASE_URL?: string;
    STORE_URL?: string;
  };
}

export const BASE_URL =
  (window as unknown as Window)._env_?.BASE_URL || "www.example.com";

export const STORE_URL =
  (window as unknown as Window)._env_?.BASE_URL || "www.example.com";
