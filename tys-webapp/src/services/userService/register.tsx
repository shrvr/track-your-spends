import type { AxiosResponse } from 'axios';

import { publicRequest } from 'src/apiMethods';

// Register service
interface RegistrationPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  profession: string;
}

export interface RegistrationResponse {
  message: string;
  _id: string;
  email: string;
}

const register = async (data: RegistrationPayload): Promise<RegistrationResponse> => {
  try {
    const response: AxiosResponse<RegistrationResponse> = await publicRequest.post(
      '/auth/register',
      data,
    );
    return response.data;
  } catch (err: any) {
    return err;
  }
};

export default register;
