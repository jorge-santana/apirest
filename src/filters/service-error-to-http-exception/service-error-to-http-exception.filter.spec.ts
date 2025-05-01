import { ServiceErrorToHttpExceptionFilter } from './service-error-to-http-exception.filter';

describe('ServiceErrorToHttpExceptionFilter', () => {
  it('should be defined', () => {
    expect(new ServiceErrorToHttpExceptionFilter()).toBeDefined();
  });
});
