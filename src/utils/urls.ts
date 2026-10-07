// Kanonische URL-Form ist slash-los (interne Links, Canonical, og:url, JSON-LD;
// Cloudflare "drop-trailing-slash") — hier wird darauf normalisiert, Startseite bleibt "/".
export function normalizePathname(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}
