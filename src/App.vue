<script setup lang="ts">
import { ref } from 'vue'

// refs
const header = ref('shopping list app')
const editing = ref(false)
const items = ref<{id: number, label: string }[]>([
  /* { id: 1, label: "10 bananas" },
  { id: 2, label: "2 cookie boxes" },
  { id: 3, label: "20 water bottles" } */
])
const newItem = ref("")
const newItemHighPriority = ref(false)

// methods
const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value })
  newItem.value = ""
}

const doEdit = (e: boolean) => {
  editing.value = e
}

/* lesson observations */ 
// v.model.lazy
// v.model.number
// v.model.trim
// v.model can be used on inputs, radio boxes, selects etc.
// need to use .value in refs inside the script tag if i want the value

</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button class="btn" v-if="editing" @click="doEdit(false)">cancel</button>
    <button class="btn btn-primary" v-else @click="doEdit(true)">add item</button>
  </div>
  <form class="add-item-form" v-if="editing" @submit.prevent="saveItem">
    <input v-model.trim="newItem" type="text" placeholder="add an item">
    <label>
      <input type="checkbox" v-model="newItemHighPriority">
      high priority
    </label>
    <button :disabled="newItem.length < 5" class="btn btn-primary">save item</button>
  </form>
  <ul>
    <li v-for="({ id, label }, index) in items" :key="id">
      {{ label }}
    </li>
  </ul>
  <p v-if="!items.length">
    nothing to see
  </p>
</template>
