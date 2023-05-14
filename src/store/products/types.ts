export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Product = {
  id: string;
  imgUrl: string;
  title: string;
  price: number;
  description: string;
};

export type ProductsSliceState = {
  items: Product[];
  status: Status;
};
