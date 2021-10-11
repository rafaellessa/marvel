export interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export interface UserInformationResponse {
  id: string;
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}
