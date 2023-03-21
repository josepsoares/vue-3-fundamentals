<script lang="ts" setup>
import { useShopListStore } from '../store/store';
import ToBuyListItem from './ToBuyListItem.vue';
import ToBuyListAddNewItemForm from './ToBuyListAddNewItemForm.vue';

import IndexPointingDownIcon from '../assets/emojis/index-pointing-down.svg?component';
import BananaIcon from '../assets/emojis/banana.svg?component';
import ShopCartIcon from '../assets/emojis/cart.svg?component';
import AddIcon from '../assets/icons/add.svg?component';

const store = useShopListStore();
</script>

<template>
  <div class="bg-stone-700 p-10 rounded-md shadow-md">
    <div>
      <h1 class="flex items-center text-4xl pb-4 text-primary font-bold">
        Shop List <ShopCartIcon class="ml-2 w-9 h-9" />
      </h1>
      <p class="inline-flex items-center font-semibold text-yellow-400">
        banana doomsday edition <BananaIcon class="ml-2 w-5 h-5" />
      </p>
    </div>

    <table v-if="store.items.length" class="table w-full my-10">
      <thead>
        <tr>
          <th></th>
          <th>item name</th>
          <th>priority</th>
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
      <p>start your list by adding an item</p>
      <IndexPointingDownIcon class="mt-1 w-5 h-5" />
    </div>

    <div class="flex flex-row flex-wrap gap-4">
      <button
        v-if="store.isAddingItem"
        class="btn btn-error font-semibold"
        @click="store.$patch({ isAddingItem: !store.isAddingItem })"
      >
        Cancel
      </button>
      <button
        v-else
        class="btn btn-primary font-semibold"
        :disabled="store.items.length >= 5"
        @click="store.$patch({ isAddingItem: !store.isAddingItem })"
      >
        <AddIcon class="text-white fill-white inline mr-2 w-4 h-4" /> Add Item
      </button>

      <button class="btn btn-warning font-semibold" @click="store.cleanItems">
        Clear List Items
      </button>
    </div>

    <div class="mt-4 text-error" v-if="store.items.length >= 5">
      You can't add more items, the limit is 5 items. Delete one of the items to
      add a new one.
    </div>

    <ToBuyListAddNewItemForm v-if="store.isAddingItem" />
  </div>
</template>
