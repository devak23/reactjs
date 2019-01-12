export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: IProduct[] = [
  {
    description: 'A collection of navigational components that compose declaratively in our app',
    id: 1,
    name: 'React Router',
    price: 8
  },
  {
    description: 'A library that helps manage the state across the  app',
    id: 2,
    name: 'React Redux',
    price: 12
  },
  {
    description: 'A library that helps you interact with GraphQL backend',
    id: 3,
    name: 'React Apollo',
    price: 12
  }
];
