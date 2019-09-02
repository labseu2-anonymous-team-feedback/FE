import { trimError, isLoggedIn } from './index';

describe('Util', () => {
  it('trim Error', () => {
    const data = 'GraphQL error: Password should be at least 8 characters';
    const response = trimError(data);
    expect(response).toEqual('Password should be at least 8 characters');
  });

  it('return empty when nothing is passed to trim Error', () => {
    const response = trimError();
    expect(response).toEqual(undefined);
  });

  it('should return false if token does not exist', () => {
    const response = isLoggedIn();
    expect(response).toEqual(false);
  });

  it('should return false if token is expired', () => {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfX3V1aWQiOiI0NDg1YjE3Ni0zYTA4LTQ0NzYtYTRmNy1mMTFkYWQzOGY5NTUiLCJ1c2VybmFtZSI6ImVhc3lidW95IiwiaWF0IjoxNTY3NDE1MTA3LCJleHAiOjE1NzI1OTkxMDd9.2xz19RfEJdpxMY4sNDeNQ51U1ca8PfdHq8fmnpNTZ1E',
    );
    const response = isLoggedIn();
    expect(response).toEqual(true);
  });
});
