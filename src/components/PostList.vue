<template>
  <table class="table">
    <transition-group name="post-list">
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
    </transition-group>

  </table>
</template>

<script>

export default {
  name: "PostList",
  components: {},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  border-collapse: collapse;
  height: 60vh;
  margin-inline: auto;
  max-width: 100%;
  tr {
    td {
      padding: 10px;
      border: 1px solid #E3E6EC;
      font-size: 13px;
      font-weight: 500;
      color: #474955;
    }
    td:first-child {
      padding: 25px 40px;
    }
    td:nth-child(2) {
      padding: 8px;
      min-width: 500px;
    }
  }
}
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.post-list-leave-active {
  position: absolute;
}
</style>