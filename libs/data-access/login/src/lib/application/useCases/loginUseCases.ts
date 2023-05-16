import { LoginRequest, LoginResponse } from '../../domain/entities/login';
import LoginRepository from '../../domain/interfaces/loginRepository';

export const postLogin = (
  loginInterface: LoginRepository,
  data: LoginRequest
): Promise<LoginResponse> => {
  return loginInterface.postLogin(data);
};
