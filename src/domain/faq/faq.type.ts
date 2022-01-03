export interface FaqType{
      _id: string;
      title: string;
      description: string;
      category: string[] | number[] | null;
      user: {
        _id: string;
        email: string;
      };
      createdAt: string;
    }