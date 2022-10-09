export interface Product {
  id: string;
  name: string;
  picture: string;
  code: string;
  price: number;
  quantity: number;
  type: string;
  category: string;
  subCategory: string;
  stripeProductId: string;
  stripePriceId: string;
  errors: {
    name: string;
    picture: string;
    code: string;
    price: string;
    quantity: string;
    type: string;
    category: string;
    subCategory: string;
    stripeProductId: string;
    stripePriceId: string;
  }
}

export type Page = {
  content: Product[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}