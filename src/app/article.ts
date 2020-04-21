export class Article {
    _id: string;
    title: string;
    description: string;
    keywords: string;
    body: string;
    published: {
      type: Date
    };
    createD: {
      type: Date,
    };
    modified: {
      type: Date
    }
  }