import { Attributes } from './user';

export type Discussion = {
  id: string;
  type?: 'discussions';
  attributes: {
    title: string;
    slug: string;
    commentCount: number;
    participantCount: number;
    createdAt: string;
    lastPostedAt: string;
    lastPostNumber: number;
  };
  relationships?: {
    user: {
      data: {
        id: string;
        type: string | 'users';
        attributes?: Attributes;
      };
    };
    category?: { data: { id: string; type: string | 'categories' } };
    tags?: { data: { id: string; type: string | 'tags' } };
  };
};
