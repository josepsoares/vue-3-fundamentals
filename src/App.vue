<script setup lang="ts">
import { ref, computed } from 'vue'

// refs
const header = ref('shopping list app')
const characterCount = computed(() => newItem.value.length)
const editing = ref(false)
const items = ref<{id: number, label: string, purchased: boolean, highPriority: boolean }[]>([
  { id: 1, label: "10 bananas", purchased: true, highPriority: false },
  { id: 2, label: "2 cookie boxes", purchased: true, highPriority: true },
  { id: 3, label: "20 water bottles", purchased: false, highPriority: false } 
])
const reversedItems = computed(() => {
  return [...items.value].reverse()
})
const newItem = ref("")
const newItemHighPriority = ref(false)

// methods
const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value, purchased: false, highPriority: newItemHighPriority.value })
  newItem.value = ""
  newItemHighPriority.value = false
}

const doEdit = (e: boolean) => {
  editing.value = e
}

const togglePurchased = (item: {id: number, label: string, purchased: boolean, highPriority: boolean }) => {
  item.purchased = !item.purchased
}

/* lesson observations */ 
// v.model.lazy
// v.model.number
// v.model.trim
// v.model can be used on inputs, radio boxes, selects etc.
// need to use .value in refs inside the script tag if i want the value
// computed properties always stay in sync with data they reference
// computed properties should not alter or change the existing data (use cloning for exemple with spread or lodash)

</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button class="btn" v-if="editing" @click="doEdit(false)">cancel</button>
    <button class="btn btn-primary" v-else @click="doEdit(true)">add item</button>
  </div>
  <form class="add-item-form" v-if="editing" @submit.prevent="saveItem">
    <div style="width: 60%">
      <input style="width: 100%" v-model.trim="newItem" type="text" placeholder="add an item">
      <p class="counter" :class="{priority: characterCount >= 100}">{{ characterCount }}/100<span v-if="characterCount >= 100" class="priority"> - you can't add an item with 100 or more characters</span></p>
    </div>
   
    <label>
      <input type="checkbox" v-model="newItemHighPriority">
      high priority
    </label>
    <button :disabled="newItem.length < 5 || characterCount >= 100" class="btn btn-primary">save item</button>
    
  </form>

  
   
  <ul>
    <li v-for="(item, index) in reversedItems" class="static-class" @click="togglePurchased(item)" :key="item.id" :class="{strikeout: item.purchased, priority: item.highPriority}">
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">
    nothing to see
  </p>
</template>
