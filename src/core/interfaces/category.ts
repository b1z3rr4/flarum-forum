export type Category = {
  id: string;
  type: 'categories';
  attributes: {
    name: string;
    description: string;
    slug: string;
    color?: string;
    icon?: string;
  };
};
