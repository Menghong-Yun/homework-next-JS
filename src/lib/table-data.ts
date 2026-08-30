// Represents a product returned by the Fake Store API
// https://fakestoreapi.com/products
export type Products = {
  id: string | number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

