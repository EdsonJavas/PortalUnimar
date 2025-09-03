import { useState, useEffect } from 'react';

/**
 * Hook customizado para debounce
 * @param value - Valor para aplicar debounce
 * @param delay - Delay em milissegundos
 * @returns Valor com debounce aplicado
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
