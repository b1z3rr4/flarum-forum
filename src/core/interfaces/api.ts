import { Category } from './category';
import { Discussion } from './discussion';
import { Post } from './post';
import { Attributes, Group, User } from './user';
import { Included } from './utils';

// (POST /api/token)
export type LoginRequest = {
  identification: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  userId: number;
};

// (POST /api/users)
export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  data: {
    id: string;
    type: 'users';
    attributes: {
      username: string;
      email: string;
      joinedAt: string;
    };
  };
};

// (GET /api/categories)
export type ListCategoriesResponse = {
  data: Category[];
};

// (GET /api/discussions)
export type ListDiscussionsResponse = {
  data: Discussion[];
  included: [Included<Attributes>];
};

// (GET /api/discussions?filter[search]=<termo-de-busca>)
export type SearchDiscussionsRequest = {
  filter: { search: string };
};

export type SearchDiscussionsResponse = ListDiscussionsResponse;

// (GET /api/discussions?filter[category]=<id-da-categoria>)
export type ListDiscussionsByCategoryRequest = {
  filter: { category: string };
};

export type ListDiscussionsByCategoryResponse = ListDiscussionsResponse;

// (GET /api/posts?filter[discussion]=<id-do-topico>)
export type ListPostsByDiscussionRequest = {
  filter: { discussion: string };
};

export type ListPostsByDiscussionResponse = {
  data: Post[];
};

// (GET /api/discussions/<id-do-topico>)
export type DiscussionDetailResponse = {
  data: Discussion;
};

// (POST /api/posts)
export type CreatePostRequest = {
  content: string;
  relationships: {
    discussion: { data: { id: string; type: 'discussions' } };
  };
};

export type CreatePostResponse = {
  data: Post;
};

// (POST /api/discussions)
export type CreateDiscussionRequest = {
  title: string;
  relationships: {
    category?: { data: { id: string; type: 'categories' } };
  };
  content: string;
};

export type CreateDiscussionResponse = {
  data: Discussion;
  included: [Included<Attributes>];
};

// (GET /api/users)
export type ListUsersResponse = {
  data: User[];
  included?: Group[];
};
