<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import { useShopListStore } from '../store/store';
import ToBuyListItem from './ToBuyListItem.vue';
import ToBuyListAddNewItemForm from './ToBuyListAddNewItemForm.vue';

import IndexPointingDownIcon from '../assets/emojis/index-pointing-down.svg?component';
import BananaIcon from '../assets/emojis/banana.svg?component';
import ShopCartIcon from '../assets/emojis/cart.svg?component';
import AddIcon from '../assets/icons/add.svg?component';
import BroomIcon from '../assets/icons/broom.svg?component';
import AscendingIcon from '../assets/icons/ascending.svg?component';
import DescendingIcon from '../assets/icons/descending.svg?component';

const store = useShopListStore();
</script>

<template>
  <div class="rounded-md bg-stone-700 p-10 shadow-md">
    <div>
      <h1 class="flex items-center pb-4 text-4xl font-bold text-primary">
        Shop List <ShopCartIcon class="ml-2 h-9 w-9" />
      </h1>
      <p class="inline-flex items-center font-semibold text-yellow-400">
        banana doomsday edition <BananaIcon class="ml-2 h-5 w-5" />
      </p>
    </div>

    <table v-if="store.items.length" class="my-10 table w-full">
      <thead>
        <tr>
          <th>
            <button
              class="btn-ghost no-animation btn-xs btn text-primary"
              @click="store.sortItems(store.sort === 'asc' ? 'desc' : 'asc')"
            >
              <DescendingIcon v-if="store.sort === 'desc'" class="h-5 w-5" />
              <AscendingIcon v-if="store.sort === 'asc'" class="h-5 w-5" />
            </button>
          </th>
          <th class="text-primary">item name</th>
          <th class="text-primary">priority</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <ToBuyListItem
          v-for="(item, index) in store.items"
          :item="item"
          :index="index"
        />
      </tbody>
    </table>

    <div v-if="!store.items.length" class="my-10">
      <p class="text-2xl">start your list by adding an item</p>
      <IndexPointingDownIcon class="mt-2 h-8 w-8" />
    </div>

    <div v-if="!store.isAddingItem" class="flex flex-row flex-wrap gap-4">
      <button
        class="btn-primary no-animation btn"
        :disabled="store.items.length >= 5"
        @click="store.$patch({ isAddingItem: !store.isAddingItem })"
      >
        <AddIcon class="mr-2 inline h-4 w-4" /> Add Item
      </button>

      <button class="btn-warning no-animation btn" @click="store.cleanItems">
        <BroomIcon class="mr-2 inline h-4 w-4" /> Clear List
      </button>

      <div class="mt-4 w-full text-error" v-if="store.items.length >= 5">
        You can't add more items, the limit is 5 items. Delete one of the items
        to add a new one.
      </div>
    </div>

    <div v-else>
      <div class="divider my-6"></div>
    </div>

    <ToBuyListAddNewItemForm v-if="store.isAddingItem" />
  </div>
</template>
