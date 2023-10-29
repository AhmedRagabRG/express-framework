export class ApiError extends Error {
  message: any;
  StatusCode: any;
  type: string | undefined;

  constructor(StatusCode: number, message: string, type?: string) {
    super(message);
    this.message = message;
    this.StatusCode = StatusCode
    this.type = type
  }
}

