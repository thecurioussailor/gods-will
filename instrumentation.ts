// This file runs before the server starts, ensuring localStorage polyfill is available
// for any modules that might access it during initialization
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  const localStorageMock = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  };
  
  (global as any).localStorage = localStorageMock;
  
  if (typeof globalThis !== 'undefined') {
    (globalThis as any).localStorage = localStorageMock;
  }
}

export async function register() {
  // Instrumentation code can go here if needed
}

