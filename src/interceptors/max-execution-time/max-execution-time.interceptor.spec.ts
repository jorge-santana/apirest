import { MaxExecutionTimeInterceptor } from './max-execution-time.interceptor';

describe('MaxExecutionTimeInterceptor', () => {
  it('should be defined', () => {
    expect(new MaxExecutionTimeInterceptor()).toBeDefined();
  });
});
