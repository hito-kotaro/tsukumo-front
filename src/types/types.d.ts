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
