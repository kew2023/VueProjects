<template>
    <vHeader :courses="courses"></vHeader>

    <vOurCourse></vOurCourse>

    <vFilter :viewType="viewType"
        @filterByTitle="(title) => { coursesArr = startArr.filter((item) => item.title.toLowerCase().includes(title.toLowerCase())) }"
        @sortByRating="(key) => { coursesArr.sort((a, b) => sortByRating(a, b, key)) }"
        @sortByPrice="(key) => { coursesArr.sort((a, b) => sortByPrice(a, b, key)) }"
        @sortByTime="(key) => { coursesArr.sort((a, b) => sortByTime(a, b, key)) }" @changeViewType="viewType = !viewType">
    </vFilter>

    <section class="courses" id="courses" ref="courses">
        <div class="content__container">
            <vCoursesList :coursesArr="coursesArr" :viewType="viewType" />
            <button class="courses__button">
                <div class="button__left">Все курсы</div>
                <div class="button__right">
                    <img class="button__img_arrow" src="@/assets/arrow_right.svg">
                </div>
            </button>
        </div>
    </section>

    <vAdv></vAdv>

    <vForm></vForm>

    <vFooter></vFooter>
</template>

<script setup>
import { ref } from "vue";

import vHeader from '@/components/v-header.vue';
import vOurCourse from '@/components/v-ourcourses.vue';
import vFilter from '@/components/v-filters.vue';
import vCoursesList from '@/components/v-coursesList.vue';
import vAdv from '@/components/v-adv.vue';
import vForm from '@/components/v-form.vue';
import vFooter from "@/components/v-footer.vue";


const courses = ref(null);

const coursesArr = ref([]);
coursesArr.value = [
    {
        title: 'КПК "Работа на высокие результаты ГИА-9 и ГИА-11 по русскому языку"',
        date: 'Сентябрь 2024',
        time: 72,
        doc: 'Удостоверение',
        logo: '1',
        price: [5_500, 5_700],
        rating: 1
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

const startArr = coursesArr.value;

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

<style>
@font-face {
    font-family: 'Plovdiv Display';
    src: url('@/assets/fonts/PlovdivDisplay.otf');
}

* {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    line-height: normal;
    word-wrap: normal;
}

button {
    display: block;
    border: none;
    background: none;
}

a {
    text-decoration: none;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}

.content__container {
    width: 80%;
    display: flex;
    flex-direction: column;
}

/* Курсы */

.courses {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.courses__button {
    display: flex;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    width: 270px;
}

.button__left {
    color: var(--FINAL-black, #4B4A49);
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: url('@/assets/button_left_1.svg') 0% 50% / 100% no-repeat;
    width: 75%;
    height: 48px;
}

.button__right {
    display: flex;
    justify-content: center;
    align-items: center;

    background: url('@/assets/button_right_1.svg') 0% 50% / 100% no-repeat;
    width: 20%;
    height: 48px;
}


@media (min-width: 1920px) {
    .content__container {
        width: 1536px;
    }
}

@media (max-width: 1280px) {
    .content__container {
        width: 90%;
    }
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {}

@media (max-width: 480px) {}

@media (max-width: 320px) {
    .courses__button {
        width: 100%;
    }
}
</style>
