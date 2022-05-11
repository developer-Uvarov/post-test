<template>
  <div class="container">
    <custom-input v-model="searchValue" @on-search="onSearch"/>
    <custom-navbar :selected-value="selectedSort" :list="tableHeaderList" @change="onSort"/>
    <custom-loader v-if="isPostsLoading"/>
    <div v-else>
      <post-list :posts="posts"/>
      <page-pagination
          :total-pages="totalPages"
          :current-page="currentPage"
          @on-change-page="setPage"
      />
    </div>
  </div>

</template>

<script>
import axios from "axios";
import updateQuery from "@/utils/updateQuery";

import CustomInput from "@/components/CustomInput";
import CustomNavbar from "@/components/CustomNavbar";
import PostList from "@/components/PostList";
import CustomLoader from "@/components/CustomLoader";
import PagePagination from "@/components/PagePagination";

export default {
  name: 'IndexPage',
  components: {PagePagination, CustomLoader, PostList, CustomNavbar, CustomInput},
  data() {
    return {
      posts: [],
      searchValue: '',
      selectedSort: { sort: 'id', order: 'asc' },

      totalPages: 0,
      currentPage: 1,
      limit: 10,

      tableHeaderList: [
        {value: 'id', label: 'ID'},
        {value: 'title', label: 'Заголовок'},
        {value: 'body', label: 'Описание'},
      ],
      isPostsLoading: false
    }
  },
  watch: {
    '$route.query'() {
      this.fetchPosts()
    }
  },
  methods: {
    setQuery(pairs) {
      this.$router.push({ name: 'index', query: updateQuery(this.$route.query, pairs) })
    },
    onSort({ sort, order }) {
      this.selectedSort = {
        sort, order
      }
      this.setQuery([{ key: 'sort', value: sort }, { key: 'order', value: order }])
    },
    onSearch() {
      this.setQuery([{ key: 'search', value: this.searchValue }])
    },
    setPage(page) {
      this.currentPage = page
      this.setQuery([{ key: 'page', value: page }])
    },
    initValues() {
      const { page, search, sort, order } = this.$route.query
      if (sort && order) {
        this.selectedSort = {
          sort,
          order
        }
      }
      if (page) {
        this.currentPage = Number(page)
      }
      if (search) {
        this.searchValue = search
      }
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            q: this.$route.query.search,
            _sort: this.$route.query.sort,
            _order: this.$route.query.order,
            _page: this.$route.query.page,
            _limit: this.limit,
          }
        })
        this.totalPages = Math.ceil(Number(response.headers['x-total-count']) / this.limit)
        this.posts = response.data
        this.isPostsLoading = false
      } catch (e) {
        alert('Ошибка')
      }
    },
  },
  mounted() {
    this.initValues()
    this.fetchPosts()
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.container {
  max-width: 1077px;
  margin: 20px auto;
}
</style>
