<template>
    <vOurBook></vOurBook>

    <vFilter @filter="([name, author]) => {
        booksArr = startArr.filter((item) => {
            return (
                item.name.toLowerCase().includes(name.toLowerCase())
                && item.author.toLowerCase().includes(author.toLowerCase())

            )
        })
    }">
    </vFilter>

    <section class="books" id="books">
        <div class="content__container">
            <vBookList :booksArr="booksArr" />
            <button class="books__button">
                <div class="button__left">Все книги</div>
                <div class="button__right">
                    <img class="button__img_arrow" src="@/assets/arrow_right.svg">
                </div>
            </button>
        </div>
    </section>

    <vForm></vForm>
</template>

<script setup>

import { ref } from "vue";
import { useStore } from "vuex";

import vOurBook from '@/components/v-ourbook.vue';
import vFilter from '@/components/v-filters.vue';
import vBookList from '@/components/v-bookList.vue';
import vForm from '@/components/v-form.vue';

const store = useStore();

const booksArr = ref([]);
booksArr.value = store.getters.getBookArr;

const startArr = booksArr.value;

</script>

<style lang="css" scoped>
/* Курсы */

.books {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.books__button {
    display: flex;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    width: 270px;
}
</style>