<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ListComponent from '@/components/ListComponent.vue'

const store = useStore()

const items = computed(() => store.getters.itemTitles)
const loading = computed(() => store.state.loading)
const error = computed(() => store.state.error)

store.dispatch('fetchData')
</script>

<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <ListComponent :items="items" />
  </div>
</template>
