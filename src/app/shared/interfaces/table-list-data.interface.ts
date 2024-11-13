export interface TableListData<T> {
  content: T[];
  totalPages: number;
  last: boolean;
  totalElements: number;
  first: boolean;
  numberOfElements: number;
  number: number;
  size: number;
  empty: boolean;
}
