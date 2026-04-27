export {};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
  interface Navigator {
    modelContext?: {
      provideContext: (config: object) => void;
    };
  }
}
