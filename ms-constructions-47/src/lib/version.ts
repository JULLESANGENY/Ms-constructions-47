// Small helper to append a cache-busting query param to assets
// In dev you can set APP_VERSION to any value and refresh to force reload
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || process.env.APP_VERSION || "dev";

export function v(path: string) {
  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}v=${encodeURIComponent(APP_VERSION)}`;
}
