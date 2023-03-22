<script lang="ts" setup>
import { ModalsContainer, useModal } from 'vue-final-modal';

import { useShopListStore } from '../store/store';
import ToBuyListItemEditModal from './ToBuyListItemEditModal.vue';

import TrashIcon from '../assets/icons/trash.svg?component';
import EditIcon from '../assets/icons/edit.svg?component';

import { IListItem } from '../ts';

const { item, index } = defineProps<{
  item: IListItem;
  index: number;
}>();

const store = useShopListStore();

const { open, close } = useModal({
  component: ToBuyListItemEditModal,
  attrs: {
    item: item,
    onSubmit(id, values) {
      store.updateItem(id, values);
      close();
    },
    onCancel() {
      close();
    }
  }
});
</script>

<template>
  <tr
    :class="{
      'text-orange-500': item.highPriority
    }"
  >
    <td>{{ item.id }}º</td>
    <td>{{ item.name }}</td>
    <td>{{ item.highPriority ? 'high' : '---' }}</td>

    <th>
      <button
        class="btn-ghost no-animation btn-xs btn text-accent"
        @click="open()"
      >
        <EditIcon class="mr-2 h-5 w-5" /> Edit
      </button>
    </th>

    <th>
      <button
        class="btn-ghost no-animation btn-xs btn text-error"
        @click="store.deleteItem(index)"
      >
        <TrashIcon class="mr-2 h-5 w-5" /> Delete
      </button>
    </th>
  </tr>
  <ModalsContainer />
</template>
