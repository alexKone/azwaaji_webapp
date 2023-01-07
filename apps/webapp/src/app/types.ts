export interface IProfile {
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: string;
  address: Address;
  information: Information;
  user: User;
  conversations?: (null)[] | null;
}
export interface Address {
  street: string;
  city: string;
  zipcode: string;
  country: string;
}
export interface Information {
  description: string;
  children: number;
  maritalStatus: string;
  profile_sought: string;
  smoke: boolean;
  hijra: string;
  sport: string;
}
export interface User {
  email: string;
  username: string;
  last_login: string;
  created_at: string;
}
