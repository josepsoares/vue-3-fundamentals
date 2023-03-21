<script lang="ts" setup>
import { useShopListStore } from '../store/store';

const store = useShopListStore();
</script>
<template>
  <form class="mt-10" @submit.prevent="store.addItem">
    <div class="w-full mb-2">
      <div>
        <input
          type="text"
          v-model.trim="store.newItem.name"
          placeholder="item name"
          class="input input-bordered input-primary w-full max-w-lg"
        />
        <label class="label">
          <span
            class="label-text-alt"
            :class="{ 'text-error': store.newItemNameCharacterCount >= 50 }"
          >
            {{ store.newItemNameCharacterCount }}/100<span
              v-if="store.newItemNameCharacterCount >= 50"
            >
              - you can't add an item with 100 or more characters</span
            >
          </span>
        </label>
      </div>
    </div>

    <div class="form-control mb-8">
      <label class="label cursor-pointer w-[150px]">
        <input
          v-model="store.newItem.isHighPriority"
          type="checkbox"
          class="checkbox checkbox-primary"
        />
        <span class="label-text">High Priority Item</span>
      </label>
    </div>

    <button
      :disabled="
        store.newItem.name.length < 5 || store.newItemNameCharacterCount >= 50
      "
      class="btn btn-primary"
    >
      save item
    </button>
  </form>
</template>
