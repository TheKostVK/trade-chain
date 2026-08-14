/**
 * Возвращает базовый URL API.
 * @returns Базовый URL API.
 */
export const getApiBaseUrl = (): string =>
    import.meta.env.VITE_API_BASE_URL ?? (import.meta.env.DEV ? 'http://localhost:3001' : '');
