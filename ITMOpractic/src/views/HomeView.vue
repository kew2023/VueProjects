<template>
    <vOurBook></vOurBook>

    <vFilter :viewType="viewType" @filter="(title, author, type, genry) => {
        booksArr = startArr.filter((item) => {

            item.title.toLowerCase().includes(title.toLowerCase()) &&
                item.author.toLowerCase().includes(author.toLowerCase()) &&
                item.type.toLowerCase().includes(type.toLowerCase()) &&
                item.genry.toLowerCase().includes(genry.toLowerCase())

        })
    }" @sortByRating="(key) => { booksArr.sort((a, b) => sortByRating(a, b, key)) }"
        @sortByPrice="(key) => { booksArr.sort((a, b) => sortByPrice(a, b, key)) }"
        @sortByTime="(key) => { booksArr.sort((a, b) => sortByTime(a, b, key)) }" @changeViewType="viewType = !viewType">
    </vFilter>

    <section class="books" id="books">
        <div class="content__container">
            <vBookList :booksArr="booksArr" :viewType="viewType" />
            <button class="books__button">
                <div class="button__left">Все курсы</div>
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

import vOurBook from '@/components/v-ourbook.vue';
import vFilter from '@/components/v-filters.vue';
import vBookList from '@/components/v-bookList.vue';
import vForm from '@/components/v-form.vue';

const booksArr = ref([]);
booksArr.value = [
    {
        title: 'КПК "Работа на высокие результаты ГИА-9 и ГИА-11 по русскому языку"',
        date: 'Сентябрь 2024',
        time: 72,
        doc: 'Удостоверение',
        logo: '1',
        price: [5_500, 5_700],
        rating: 1,
        author: 'Я',
        type: '',

    },
    {
        title: 'КПК «Проектная деятельность как способ повышения качества образования в школе»',
        date: 'Сентябрь 2024',
        time: 90,
        doc: 'Удостоверение',
        logo: '2',
        price: [4_900, 9_999],
        rating: 2
    },
    {
        title: 'КПК для учителей информатики для преподавания обучающимся с ОВЗ',
        date: 'Ноябрь 2024',
        time: 103,
        doc: 'Удостоверение',
        logo: '3',
        price: '',
        rating: 3
    },
    {
        title: 'КПК для учителей информатики',
        date: 'Ноябрь 2024',
        time: 90,
        doc: 'Удостоверение',
        logo: '4',
        price: '',
        rating: 4
    },
    {
        title: 'КПК к марафону #ЗАЗОЖ ПУТЬ К УСПЕХУ',
        date: 'Сентябрь 2024',
        time: 90,
        doc: 'Удостоверение',
        logo: '5',
        price: [4_900, 9_999],
        rating: 5
    },
    {
        title: 'Личная эффективность работника образования',
        date: 'Сентябрь 2024',
        time: 72,
        doc: 'Удостоверение',
        logo: '6',
        price: 8_500,
        rating: 6
    },
    {
        title: 'Проектная деятельность: особенности организации и управления проектами, реализуемыми в рамках...',
        date: 'Сентябрь 2024',
        time: 72,
        doc: 'Удостоверение',
        logo: '7',
        price: 8_500,
        rating: 7
    },
    {
        title: '«Апгрейд» для учителя, или на урок с «цифровым» портфелем',
        date: 'Июль 2024',
        time: 72,
        doc: 'Удостоверение',
        logo: '8',
        price: 5_500,
        rating: 8
    },
    {
        title: 'Особенности закупочной деятельности в образовательной организации',
        date: 'Июль 2024',
        time: 72,
        doc: 'Удостоверение',
        logo: '9',
        price: 5_500,
        rating: 9
    }
];

const startArr = booksArr.value;

function sortByRating (a, b, key) {
    return key * (a.rating - b.rating);
}

function sortByPrice (a, b, key) {
    let priceA = Array.isArray(a.price) ? Math.min(...a.price) : (a.price || 0);
    let priceB = Array.isArray(b.price) ? Math.min(...b.price) : (b.price || 0);
    return key * (priceA - priceB);
}

function sortByTime (a, b, key) {
    return key * (a.time - b.time);
}


const viewType = ref();
viewType.value = true;



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