import { ResponseUnsafeHeadersRemoverInterceptor } from './response-unsafe-headers-remover.interceptor';

describe('ResponseUnsafeHeadersRemoverInterceptor', () => {
  it('should be defined', () => {
    expect(new ResponseUnsafeHeadersRemoverInterceptor()).toBeDefined();
  });
});
