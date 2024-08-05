<script setup>
import { reactive, computed } from 'vue'

// form data
const form = reactive({
  name: '',
  email: '',
  password: ''
})

// form errors
const errors = reactive({
  name: null,
  email: null,
  password: null
})

const validateName = () => {
  errors.name = !form.name ? 'Name is required' : form.name.length < 2 ? 'Name must be at least 2 characters long' : null
}

const validateEmail = () => {
  errors.email = !form.email ? 'Enter a valid email' : !/\S+@\S+\.\S+/.test(form.email) ? 'Enter a valid email' : null
}

const validatePassword = () => {
  errors.password = !form.password ? 'Password must be at least 6 characters long' : form.password.length < 6 ? 'Password must be at least 6 characters long' : null
}

const isValidForm = computed(() => {
  return form.name && form.name.length >= 2 && /\S+@\S+\.\S+/.test(form.email) && form.password.length >= 6
})

const submitForm = () => {
  console.log('Form submitted', form)
  form.name = ''
  form.email = ''
  form.password = ''
}
</script>

<template>
  <form
    @submit.prevent="submitForm"
    class="form"
  >
    <div class="form-group">
      <label
        for="name"
        class="form-label"
      >
        Name:
      </label>
      <input
        id="name"
        type="text"
        v-model="form.name"
        @input="validateName"
        @blur="validateName"
        class="form-input"
      />
      <p
        v-if="errors.name"
        class="error"
      >
        {{ errors.name }}
      </p>
    </div>

    <div class="form-group">
      <label
        for="email"
        class="form-label"
      >
        Email:
      </label>
      <input
        id="email"
        type="email"
        v-model="form.email"
        @input="validateEmail"
        @blur="validateEmail"
        class="form-input"
      />
      <p
        v-if="errors.email"
        class="error"
      >
        {{ errors.email }}
      </p>
    </div>

    <div class="form-group">
      <label
        for="password"
        class="form-label"
      >
        Password:
      </label>
      <input
        id="password"
        type="password"
        v-model="form.password"
        @input="validatePassword"
        @blur="validatePassword"
        class="form-input"/>
      <p
        v-if="errors.password"
        class="error"
      >
        {{ errors.password }}
      </p>
    </div>

    <button
      type="submit"
      :disabled="!isValidForm"
      class="form-button"
    >
      Submit
    </button>
  </form>
</template>

<style scoped lang="scss">
.form {
  background: #f4f4f4;
  padding: 2rem;
  width: 600px;
  margin: 2rem auto;
  border-radius: 4px;

  &-group {
    margin-bottom: 1rem;
  }

  &-label {
    display: inline-block;
    margin-bottom: .5rem;
    font-size: 1.2em;
  }

  &-input {
    display: block;
    width: 100%;
    padding: .5rem 1rem;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
      outline: none;
    }
  }

  &-button {
    display: block;
    width: 100%;
    padding: .5rem 2rem;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-top: 2rem;
    cursor: pointer;
    font-size: 1.2em;

    &:hover {
      background: #0056b3;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  .error {
    color: #b94a48;
    background-color: #f2dede;
    padding: .25rem 1rem;
    margin: 0;
    border: 1px solid transparent;
    border-radius: .25rem;
  }
}
</style>
