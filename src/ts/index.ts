export interface IListItem {
  id: number;
  name: string;
  highPriority: boolean;
}

export interface IListItemForm {
  itemName: string;
  priority: boolean;
}

export type TSort = 'desc' | 'asc';
