// Builds a URL to a file in public/ (or a page) that works when the site is served from a subfolder.
export function url(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
