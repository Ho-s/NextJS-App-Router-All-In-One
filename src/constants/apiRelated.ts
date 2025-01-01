export const API_HOST =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'http://127.0.0.1:3000');
export const GRAPHQL_ENDPOINT = 'https://spacex-production.up.railway.app/';
