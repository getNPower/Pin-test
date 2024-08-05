<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['update:show'])
const isVisible = ref(props.show)

const close = () => {
  isVisible.value = false
  emit('update:show', false)
}

watch(() => props.show, (newVal) => {
  isVisible.value = newVal
})
</script>

<template>
  <teleport to="body">
    <div
      v-if="isVisible"
      class="modal-overlay"
    >
      <div class="modal-content">
        <button
          @click="close"
          class="modal-close-button"
        >
          Close
        </button>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
    position: relative;

    .modal-close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }
}
</style>
