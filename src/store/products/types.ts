export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ProductType = {
  id: string;
  imgUrl: string;
  title: string;
  price: number;
  description: string;
};

export type ProductsSliceState = {
  items: ProductType[];
  status: Status;
};
