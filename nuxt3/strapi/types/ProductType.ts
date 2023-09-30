export interface ProductType {
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
  