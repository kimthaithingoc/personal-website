export interface ICertification {
  id: string;
  name: string;
  image: string;
  issuer?: string;
  date: string;
  expires?: string;
  credentialUrl?: string;
}
