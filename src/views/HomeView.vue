<script setup>
import ListComponent from '@/components/ListComponent.vue'

// This is a mock data
const itemsData = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
</script>
<template>
  <div>
    <ListComponent :items="itemsData" />
  </div>
</template>
