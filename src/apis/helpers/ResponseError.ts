export default class ResponseError extends Error {
  type: string | number;

  constructor(message: string, type: string | number) {
    super(message);
    this.type = type;
  }
}
