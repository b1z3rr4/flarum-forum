export type User = {
  id: string;
  type: 'users';
  attributes: Attributes;
};

export type Attributes = {
  username: string;
  joinDate: string;
  bio?: string;
  avatarUrl?: string;
  displayName?: string;
};
