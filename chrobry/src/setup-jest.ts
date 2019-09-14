// tslint:disable-next-line: no-import-side-effect
import 'jest-preset-angular';

const mock = () => {
  let storage: { [key: string]: string } = {};

  return {
    getItem: (key: string) => (key in storage ? storage[key] : undefined),
    // tslint:disable-next-line: strict-boolean-expressions
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    // tslint:disable-next-line: no-dynamic-delete
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {})
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance'],
});

Object.defineProperty(document.body.style, 'transform', {
  value: () =>
    ({
      enumerable: true,
      configurable: true,
    }),
});
