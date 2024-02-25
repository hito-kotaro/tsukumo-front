export interface Item {
  id: number;
  name: string;
  memo?: string;
  amount: number;
  dynamic: boolean;
}

export interface List {
  id: number;
  name: string;
  memo?: string;
}

export interface LocalStItem {
  id: number;
  name: string;
  items: Item[];
}

export interface MotoItem {
  id: number;
  name: string;
  memo: string;
  dynamic: boolean;
  amount: number;
}

// localStorageに格納されるのは、MotoListの配列MotoList[]
export interface MotoList {
  id: number;
  name: string;
  items: MotoItem[];
}
