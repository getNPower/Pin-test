<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

/*
If a component receives an array of objects (item) containing many fields, but only the id and name are needed for rendering,
it is advisable to limit the amount of data passed before processing.
This will reduce the amount of unnecessary data flowing through the system and improve performance.
In general, we should do this at a higher level so that only the necessary data is passed to the component, avoiding anything superfluous.
 */

// Filtering data: retain only id and name.
const filteredItems = computed(() => {
  return props.items.map(item => ({
    id: item.id,
    name: item.name
  }))
})
</script>

<template>
  <div>
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
