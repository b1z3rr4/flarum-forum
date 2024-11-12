export type User = {
  id: string;
  type: 'users';
  attributes: {
    username: string;
    joinDate: string;
    bio?: string;
    avatarUrl?: string;
  };
};
