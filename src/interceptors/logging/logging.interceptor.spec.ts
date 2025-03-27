import { LoggingInterceptor } from './logging.interceptor';

describe('LogginInterceptor', () => {
  it('should be defined', () => {
    expect(new LoggingInterceptor()).toBeDefined();
  });
});
