export type Discussion = {
  id: string;
  type: 'discussions';
  attributes: {
    title: string;
    slug: string;
    commentCount: number;
    participantCount: number;
    createdAt: string;
    lastPostedAt: string;
    lastPostNumber: number;
  };
  relationships: {
    user: { data: { id: string; type: 'users' } };
    category?: { data: { id: string; type: 'categories' } };
  };
};
