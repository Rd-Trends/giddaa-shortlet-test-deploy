export default class ConnectionError extends Error {
  constructor() {
    super();
    this.message = 'Network failed.'
  }
}
