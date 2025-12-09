//Types.tsx

export type Session = {
  token: string;
  expiresAt: Date;
};

export type DateStamp = {
  readonly createdAt: Date;
  updatedAt: Date;
};

export type User = {
  loggedIn: boolean;
  uid: string;
  created: DateStamp;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
};
