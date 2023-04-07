import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken: string | null;
  accessToken: string | null;
  expiresAt: number | null;
  tokenType: string | null;
  scope: string | null;
  idToken: string | null;
  sessionState: string | null;
}

export interface Example {
  id: Generated<number>;
  name: string;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}

export interface DB {
  Account: Account;
  Example: Example;
  Session: Session;
  User: User;
  VerificationToken: VerificationToken;
}
