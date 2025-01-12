// Define the type for a Strapi blog post
export type StrapiBlog = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: {
      data: {
        type: "component";
        attributes: {
          body: {
            type: "richtext";
            value: string;
          };
        };
      };
    };
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    publishedAt: string; // ISO 8601 date string
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
          width: number;
          height: number;
          name: string;
          alternativeText: string;
          caption: string;
        };
      };
    };
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
        };
      };
    };
  };
};
