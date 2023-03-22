import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage, RemovableRef } from '@vueuse/core';

import { IListItemForm, TSort } from '../ts';

type TShopListItems = RemovableRef<
  {
    id: number;
    name: string;
    highPriority: boolean;
  }[]
>;

export const useShopListStore = defineStore('shop-list', () => {
  const items = ref<TShopListItems>(useStorage('vue3-shoplist-items', []));
  const isAddingItem = ref<boolean>(false);
  const isEditingItem = ref<number | null>(null);
  const sort = ref<TSort>('desc');

  function addItem(values: IListItemForm) {
    const name = values.itemName;
    const highPriority = values.priority;

    items.value.push({
      id: items.value.length + 1,
      name,
      highPriority
    });

    if (items.value.length >= 5) {
      isAddingItem.value = false;
    }
  }

  function updateItem(id: number, values: IListItemForm) {
    const name = values.itemName;
    const highPriority = values.priority;

    items.value.splice(id - 1, 1, {
      ...items.value[id - 1],
      name,
      highPriority
    });
  }

  function sortItems(order: TSort) {
    sort.value = order;
    items.value.reverse();
  }

  function deleteItem(i: number) {
    if (items.value.length > 1) {
      items.value.splice(i, 1);
    } else {
      items.value = [];
    }
  }

  function cleanItems() {
    items.value = [];
  }

  return {
    items,
    isAddingItem,
    isEditingItem,
    sort,
    addItem,
    updateItem,
    sortItems,
    deleteItem,
    cleanItems
  };
});
