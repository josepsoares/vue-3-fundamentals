import { defineStore } from 'pinia';
import { useStorage, RemovableRef } from '@vueuse/core';

interface IShopListStoreState {
  items: RemovableRef<
    {
      name: string;
      highPriority: boolean;
    }[]
  >;
  isAddingItem: boolean;
  isEditingItem: number | null;
  newItem: {
    name: string;
    isHighPriority: boolean;
  };
}

export const useShopListStore = defineStore('counter', {
  state: () =>
    ({
      items: useStorage('vue3-shoplist-items', []),
      isAddingItem: false,
      isEditingItem: null,
      newItem: {
        name: '',
        isHighPriority: false
      }
    } as IShopListStoreState),
  getters: {
    newItemNameCharacterCount: state => state.newItem.name.length
  },
  actions: {
    addItem() {
      this.items.push({
        name: this.newItem.name,
        highPriority: this.newItem.isHighPriority
      });

      this.newItem.name = '';
      this.newItem.isHighPriority = false;
    },
    updateItem(id: number, name: string, highPriority: boolean) {
      this.items[id - 1] = { ...this.items[id - 1], name, highPriority };
    },
    sortItems(order: 'asc' | 'desc') {},
    deleteItem(i: number) {
      if (this.items.length > 1) {
        this.items.splice(i, 1);
      } else {
        this.items = [];
      }
    },
    cleanItems() {
      this.items = [];
    }
  }
});
