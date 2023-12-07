<template lang="">
    <div class="post">
        <div class="post__data">
            <p>Название: <strong>{{ post.title }}</strong></p>
            <p>{{ post.discription }}</p>
        </div>
        <div class="post__btns">
            <MyButton @click="$emit('remove', post);">Удалить</MyButton>
        </div>
    </div>
    
</template>
<script>
import MyButton from './UI/MyButton';
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    components: {
        MyButton
    }
};
</script>
<style scoped>
.post {
    padding: 5px;
    border: 2px solid teal;
    border-radius: 10px;
    margin-top: 10px;
    margin: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>