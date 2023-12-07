<template>
  <div class="app">
    <PostForm @create="createPost"></PostForm>
    <PostList v-bind:posts="posts" @remove="removePost"></PostList>
  </div>
</template>


<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
  data () {
    return {
      posts: [
        { id: 1, title: 'JS', discription: 'Описание поста' },
        { id: 2, title: 'Python', discription: 'Описание поста 1' },
        { id: 3, title: 'C++', discription: 'Описание поста 2' }
      ],
    };
  },
  methods: {
    createPost (post) {
      this.posts.push(post);
    },
    removePost (removedPost) {
      this.posts = this.posts.filter((post) => { return post.id !== removedPost.id; });
    }
  },
  components: { PostForm, PostList }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
