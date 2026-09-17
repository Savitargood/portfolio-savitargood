import '@testing-library/jest-dom'

// Polyfill IntersectionObserver for jsdom
class IntersectionObserverMock {
  observe = () => {}
  unobserve = () => {}
  disconnect = () => {}
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})
Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})
