export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message?: string) {
    super(message ?? 'An error occurred');
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class BadRequestError extends HttpError {
  constructor(message = 'Bad Request') {
    super(400, message);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized') {
    super(401, message);
  }
}

export class ConflictError extends HttpError {
  constructor(message = 'Conflict') {
    super(409, message);
  }
}

export class InternalError extends HttpError {
  constructor(message: string, statusCode: number) {
    super(statusCode, message);
  }
}
