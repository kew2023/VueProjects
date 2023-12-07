<template>
    <form class="form" @submit.prevent>
        <h2>Создание поста</h2>
        <MyInput v-model:value="post.title" class='input' type="text" placeholder="Название поста"></MyInput>
        <MyInput v-model:value="post.discription" class='input' type="text" placeholder="Описание"></MyInput>
        <MyButton @click="createPost" style="align-self: flex-end;">Создать</MyButton>
    </form>
</template>
<script>
export default {

    data () {
        return {
            post: {
                title: '',
                discription: '',
            }
        };
    },
    methods: {
        createPost (event) {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                discription: ''
            };
        },
    },

};
</script>
<style>
form {
    margin: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}
</style>