<template>
    <div v-if="posts.length > 0">
        <h2 style="margin-left: 15px;">Список постов</h2>
        <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)">
        </PostItem>
    </div>
    <h2 v-else style="color: red; margin-left: 15px;">Список постов пуст</h2>
</template>
<script>
import PostItem from './PostItem.vue';

export default {
    props: {
        posts: {},
    },
    components: { PostItem }
};
</script>
<style scoped></style>

