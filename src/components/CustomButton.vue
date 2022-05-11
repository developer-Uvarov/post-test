<template>
    <button class="btn">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: "CustomButton"
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
</style>
