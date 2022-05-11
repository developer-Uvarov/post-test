<template>
  <div class="pagination">
    <custom-button
        class="pagination__btn"
        @click="prevPage"
    >
      Назад
    </custom-button>
    <ul class="pagination__list">
      <li
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          class="pagination__item"
          :class="{
            'pagination__item--active': currentPage === pageNumber
          }"
          @click="selectPage(pageNumber)"
      >
        {{ pageNumber }}
      </li>

    </ul>
    <custom-button
        class="pagination__btn"
        @click="nextPage"
    >
      Далее
    </custom-button>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton";
export default {
  name: "PagePagination",
  components: {CustomButton},
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
  },
  methods: {
    selectPage(page) {
      this.$emit('onChangePage', page)
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('onChangePage', this.currentPage + 1)
      }
    },
    prevPage() {
      if (this.currentPage > this.totalPages) {
        this.$emit('onChangePage', this.currentPage - 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline: auto;
  max-width: 100%;
  color: #474955;

  &__list {
    display: flex;
    justify-content: center;
    flex-direction: row;
    list-style-type: none;
    font-style: italic;
    font-size: 24px;
    font-weight: 500;
    color: #474955;
  }

  &__item {
    cursor: pointer;
    margin-inline: 10px;

    &--active {
      color: #7EBC3C;
    }
  }

  &__btn {
    font-size: 24px;
    font-weight: 500;
    background-color: #FFFFFF;
    border: #FFFFFF;
    color: #474955;

    &:hover {
      color: #7EBC3C;
      transition: 0.2s ease;
    }
  }
}
</style>
