export interface ProductType {
    id: number;
    suptitle: string;
    name: string;
    price: number;
    description: string;
    images: {
      data: Array<{ attributes: { url: string } }>
    };
    category: {
      data: { attributes: { name: string } };
    };
    item: {
      data: { attributes: { name: string } };
    };
  }
  