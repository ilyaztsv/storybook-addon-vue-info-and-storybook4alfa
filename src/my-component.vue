<template functional>
  <h1 class="my-component">
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    text: {
      type: String,
      default: '...'
    }
  }
};
</script>

<style>
.my-component {
  color: red;
}
</style>
