export const authTypeDef = `
  input Credentials {
      email: String!
      password: String!
  }
  type GenerateTokenResponse {
      Message:String
      accessToken:String
  }
 `;

export const authMutations = `
    generateToken(credentials: Credentials): GenerateTokenResponse
`;