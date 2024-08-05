<script setup>
import { defineProps, toRefs, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const { items } = toRefs(props)
const hasItems = computed(() => items.value.length > 0)
</script>

<template>
  <div>
    <ul
      v-if="hasItems"
      class="list-group"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="list-group__item"
      >
        {{ item }}
      </li>
    </ul>
    <p
      v-else
      class="list-empty"
    >
      No items available.
    </p>
  </div>
</template>

<style scoped lang="scss">
.list {
  &-group {
    list-style-type: none;
    padding: 0;

    &__item {
      padding: 8px 0;
      border-bottom: 1px solid #ddd;
    }
  }

  &-empty {
    color: #888;
    font-style: italic;
  }
}
</style>
