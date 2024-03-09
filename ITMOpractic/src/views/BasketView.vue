<template>
    <div class="content__container">
        <BookList :booksArr="basketArr" :exampl="true"></BookList>
        <button class="basket__button">Заказать</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

import BookList from '@/components/v-bookList.vue';

const store = useStore();

const basketArr = ref();
basketArr.value = store.getters.getBookArr.slice(0, 3)

</script>

<style lang="css" scoped>
.content__container {
    margin-top: 100px;
    min-height: calc(100vh - 160px - 276px + 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
}

.basket__button {
    width: 180px;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    background: linear-gradient(272deg, #F6BE43 0%, #FFF06A 99.76%);

    color: #302F2E;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    /* 22.4px */
}
</style>