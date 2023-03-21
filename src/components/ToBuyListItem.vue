<script lang="ts" setup>
import { useShopListStore } from '../store/store';

import TrashIcon from '../assets/icons/trash.svg?component';
import EditIcon from '../assets/icons/edit.svg?component';

const store = useShopListStore();

const { item, index } = defineProps<{
  item: {
    name: string;
    highPriority: boolean;
  };
  index: number;
}>();

const addIndex = (a: number, b: number) => {
  return a + b;
};

console.log(index, store.isEditingItem);
</script>

<template>
  <tr
    :class="{
      'text-orange-500': item.highPriority
    }"
  >
    <td>{{ addIndex(index, 1) }}º</td>
    <td>{{ item.name }}</td>
    <td>{{ item.highPriority ? 'high' : '---' }}</td>

    <th>
      <button
        class="btn btn-ghost btn-xs"
        v-if="store.isEditingItem !== index"
        @click="store.$patch({ isEditingItem: index })"
        :disabled="
          store.isEditingItem !== index && store.isEditingItem !== null
        "
      >
        <EditIcon class="mr-2 w-5 h-5" />
        edit
      </button>
      <button
        v-if="store.isEditingItem !== null && index === store.isEditingItem"
        class="btn btn-ghost text-primary btn-xs"
      >
        <EditIcon class="mr-2 w-5 h-5" />
        save
      </button>
      <button
        v-if="store.isEditingItem !== null && index === store.isEditingItem"
        class="btn btn-ghost text-error btn-xs"
        @click="store.$patch({ isEditingItem: null })"
      >
        <EditIcon class="mr-2 w-5 h-5" />
        cancel
      </button>
    </th>

    <th>
      <button class="btn btn-ghost btn-xs" @click="store.deleteItem(index)">
        <TrashIcon class="mr-2 w-5 h-5" /> delete
      </button>
    </th>
  </tr>
</template>
