export type Post = {
  id: string;
  type: 'posts';
  attributes: {
    contentHtml: string;
    createdAt: string;
    number: number;
  };
  relationships: {
    discussion: { data: { id: string; type: 'discussions' } };
    user: { data: { id: string; type: 'users' } };
  };
};
