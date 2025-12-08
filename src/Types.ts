//Types.tsx

export interface User {
  loggedIn: boolean;
  uid: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}
