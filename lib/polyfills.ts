// Polyfill localStorage for SSR
// This must run before any other code that might access localStorage
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  const localStorageMock = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  };
  
  // Set up localStorage on global object for Node.js environment
  (global as any).localStorage = localStorageMock;
  
  // Also set it up on globalThis for broader compatibility
  if (typeof globalThis !== 'undefined') {
    (globalThis as any).localStorage = localStorageMock;
  }
}

