<template>
  <div class="input">
    <input
        placeholder="Поиск"
        :value="modelValue"
        @input="onInput"
        type="text"
    >
    <search-icon @click="onSearch" class="input__icon"/>
  </div>
</template>

<script>
import SearchIcon from "@/components/icons/SearchIcon";
export default {
  name: "CustomInput",
  components: {SearchIcon},
  props: {
    modelValue: {
      type: [Number, String],
      default: ''
    }
  },
  methods: {
    onInput(e) {
      this.$emit('update:modelValue', e.target.value)
    },
    onSearch() {
      this.$emit('onSearch')
    },
  }
}
</script>

<style lang="scss" scoped>

.input {
  display: flex;
  align-items: center;
  max-width: 631px;
  background-color: #5A5C66;
  padding: 19px 26px 19px;
  input {
    width: 100%;
    padding: 0;
    font-size: 14px;
    background: transparent;
    border: none;
    outline: none;
    color: white;

    &::placeholder {
      color: #B3B7BF;
      font-size: 14px;
      font-weight: 400;
    }
  }

  &__icon {
    cursor: pointer;
  }
}

</style>
