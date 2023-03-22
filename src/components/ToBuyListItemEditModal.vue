<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { VueFinalModal } from 'vue-final-modal';
import { useForm } from '@vorms/core';

import { useShopListStore } from '../store/store';

import XIcon from '../assets/icons/x.svg?component';
import CheckIcon from '../assets/icons/check.svg?component';

import { IListItem, IListItemForm } from '../ts';

const { item } = defineProps<{
  item: IListItem;
}>();

const emit = defineEmits<{
  (e: 'submit', id: number, values: IListItemForm): void;
  (e: 'cancel'): void;
}>();

const store = useShopListStore();

// couldn't get errors to work with this lib
const { register, handleSubmit } = useForm({
  initialValues: {
    itemName: store.items[item.id - 1].name,
    priority: store.items[item.id - 1].highPriority
  },
  onSubmit(values) {
    emit('submit', item.id, values);
  }
});

const { value: itemName, attrs: itemNameAttrs } = register('itemName');
const { value: priority, attrs: priorityAttrs } = register('priority');
</script>

<template>
  <VueFinalModal
    class="confirm-modal flex items-center justify-center"
    content-class="confirm-modal-content bg-neutral flex flex-col p-8 rounded-md w-11/12 md:w-3/6 lg:w-2/6"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h1 class="mb-4 text-2xl font-semibold text-primary">
      Edit {{ store.items[item.id - 1].name }}
    </h1>
    <div>
      <form @submit.prevent="handleSubmit">
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

        <div class="flex flex-row flex-wrap justify-end gap-4">
          <button
            type="reset"
            class="btn-error no-animation btn"
            @click="emit('cancel')"
          >
            <XIcon class="mr-2 inline h-4 w-4" /> Cancel
          </button>
          <button type="submit" class="btn-primary no-animation btn">
            <CheckIcon class="mr-2 inline h-4 w-4" /> Edit Item
          </button>
        </div>
      </form>
    </div>
  </VueFinalModal>
</template>
