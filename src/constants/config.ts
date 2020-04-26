export const gqlEndpoints = {
  hasura: 'https://insta-clone-sample.herokuapp.com/v1/graphql',
  fileUpload: 'https://image-processor.now.sh',
} as const;

export const auth0Config = {
  domain: 'dev-n0izdvs8.auth0.com',
  clientId: 'SnQ5wDnLvSs3Yx77rB9aaQkwABFgznCE',
  scope: 'openid profile email',
  audience: 'insta-clone-sample-api',
} as const;
