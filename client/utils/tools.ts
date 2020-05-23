export function isServer() {
  return process.env.SSR_ENV === 'server';
}