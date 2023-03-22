<script lang="ts" setup>
import { useForm } from '@vorms/core';

import { useShopListStore } from '../store/store';

import CheckIcon from '../assets/icons/check.svg?component';
import XIcon from '../assets/icons/x.svg?component';

const store = useShopListStore();

// couldn't get errors to work with this lib
const { register, handleSubmit, setFieldValue, isSubmitting } = useForm({
  initialValues: {
    itemName: '',
    priority: false
  },
  onSubmit(values) {
    store.addItem(values);
    setFieldValue('itemName', '');
    setFieldValue('priority', false);
  }
});

const { value: itemName, attrs: itemNameAttrs } = register('itemName');
const { value: priority, attrs: priorityAttrs } = register('priority');
</script>
<template>
  <form class="mt-10" @submit.prevent="handleSubmit">
    <h2 class="mb-4 text-xl font-semibold text-primary">Add Item</h2>

    <div class="mb-2 w-full">
      <div>
        <input
          type="text"
          v-model.trim="itemName"
          v-bind="itemNameAttrs"
          placeholder="item name"
          class="input-bordered input-primary input w-full max-w-lg"
        />
        <label class="label">
          <span
            class="label-text-alt"
            :class="{
              'text-error': itemName.length >= 50
            }"
          >
            {{ itemName.length }}/50
          </span>
        </label>
        <div
          class="text-error"
          v-if="itemName.length >= 50 || itemName.length < 4"
        >
          Name item can't have less than 4 and more than 50 characters
        </div>
      </div>
    </div>

    <div class="form-control mb-8">
      <label class="label w-[150px] cursor-pointer">
        <input
          type="checkbox"
          v-model="priority"
          v-bind="priorityAttrs"
          class="checkbox-primary checkbox"
        />
        <span class="label-text">High Priority Item</span>
      </label>
    </div>

    <div class="flex flex-row flex-wrap justify-start gap-4">
      <button
        class="btn-error no-animation btn"
        @click="store.$patch({ isAddingItem: !store.isAddingItem })"
      >
        <XIcon class="mr-2 inline h-4 w-4" /> Cancel
      </button>
      <button
        type="submit"
        class="btn-primary no-animation btn"
        :disabled="
          itemName.length < 4 ||
          itemName.length >= 50 ||
          store.items.length >= 5
        "
      >
        <CheckIcon class="mr-2 inline h-4 w-4" />
        Add Item
      </button>
    </div>

    <div class="mt-4 w-full text-error" v-if="store.items.length >= 5">
      You can't add more items, the limit is 5 items. Delete one of the items to
      add a new one.
    </div>
  </form>
</template>
