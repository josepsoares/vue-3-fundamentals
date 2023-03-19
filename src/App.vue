<script setup lang="ts">
import { ref } from 'vue'

const header = ref('shopping list app')
const items = ref([
  { id: 1, label: "10 bananas" },
  { id: 2, label: "2 cookie boxes" },
  { id: 3, label: "20 water bottles" }
])
const newItem = ref("")
const newItemHighPriority = ref(false)
const iceCreamFlavors = ref([])

// v.model.lazy
// v.model.number
// v.model.trim
// v.model can be used on inputs, radio boxes, selects etc.

</script>

<template>
  <h1>{{ header }}</h1>
  <form @submit.prevent="items.push({ id: items.length + 1, label: newItem })">
    <input v-model.trim="newItem" type="text" placeholder="add an item">
    <label>
      <input type="checkbox" v-model="newItemHighPriority">
      high priority
    </label>
    <button class="btn btn-primary">save item</button>
  </form>
  <ul>
    <li v-for="({ id, label }, index) in items" :key="id">
      {{ label }}
    </li>
  </ul>
</template>
