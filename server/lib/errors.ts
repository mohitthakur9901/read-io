export class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const Errors = {
  NotFound: (resource: string) => new AppError(404, 'RESOURCE_NOT_FOUND', `${resource} not found`),
  InvalidInput: (msg: string) => new AppError(400, 'INVALID_INPUT', msg),
  Internal: () => new AppError(500, 'INTERNAL_ERROR', 'An internal server error occurred'),
};
