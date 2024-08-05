<script setup>
import { ref } from 'vue'
import Modal from '@/components//ModalCoomponent.vue'

const isModalVisible = ref(false)

const openModal = () => {
  isModalVisible.value = true
}
</script>

<template>
  <div>
    <button @click="openModal">Open Modal</button>
    <Modal
      :show="isModalVisible"
      @update:show="isModalVisible = $event"
    >
      <p>This is a modal content!</p>
    </Modal>
  </div>
</template>

<style scoped lang="scss">

</style>
