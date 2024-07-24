export interface createUserParams {
  email?: string;
  phone?: string;
  password: string;
  seedPhraseEncrypted?: string;
  deviceToken?: string;
  provider?: string;
  twitterId?: string;
  name?: string;
  address?: string;
}

export interface loginParams {
  email?: string;
  phone?: string;
  password: string;
}
