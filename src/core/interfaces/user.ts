export type User = {
  id: string;
  type: 'users';
  attributes: Attributes;
};

export type Attributes = {
  username: string;
  joinDate?: string;
  bio?: string;
  avatarUrl?: string;
  slug?: string;
  displayName?: string;
};

export type Group = {
  attributes: { nameSingular: string; namePlural: string; color: string; icon: string; isHidden: number };
  id: string;
  type: string;
};
