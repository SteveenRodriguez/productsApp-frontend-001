// Sirve para determinar que se va a guardar en la BD

export interface Product {
  _id?: string;

  name: string;

  description: string;

  price: number;

  imageUrl: string;

  createAt?: string;
}
