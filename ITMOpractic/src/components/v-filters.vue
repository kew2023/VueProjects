<template>
    <section class="filters">
        <div class="content__container">
            <div class="filters__filters">
                <div class="filters__filter_name filters__filter">
                    <div class="filter__title">Название курса</div>
                    <input class="filter__input" type="search" placeholder="Поиск" v-model="courseTitle">
                </div>
                <div class="filters__filter_price filters__filter">
                    <div class="filter__title">Стоимость</div>
                    <select class="filter__input" aria-placeholder="Выбрать из списка">
                        <option disabled selected>Выбрать из списка</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>

                <div class="filters__filter_type filters__filter">
                    <div class="filter__title">Тип курса</div>
                    <select class="filter__input" type="search">
                        <option>Выбрать из списка</option>
                        <option>Повышение квалификации</option>
                    </select>
                </div>
                <div class="filters__button_wrapper">
                    <button class="filters__button" @click="emit('filterByTitle', courseTitle)">
                        Применить
                    </button>
                </div>
            </div>

            <div class="filters__sorted">
                <div class="filters__sorting">
                    <div class="sort__type" :class="{ 'sort_select': sortType == 1 }" @click="emit('sortByRating', sortKeyRating);
                    sortKeyRating = sortKeyRating == -1 ? 1 : -1; sortType = 1">
                        <p>По рейтингу</p>
                        <img :src="arrows" class="sorting__arrows" v-if="sortKeyRating == -1">
                        <img :src="arrows_back" class="sorting__arrows" v-else>
                    </div>
                    <div class="filters__line"></div>

                    <div class="sort__type" :class="{ 'sort_select': sortType == 2 }" @click="emit('sortByRating', sortKeyRating);
                    sortKeyRating = sortKeyRating == -1 ? 1 : -1; sortType = 2">
                        <p>По рейтингу</p>
                        <img :src="arrows" class="sorting__arrows" v-if="sortKeyRating == -1">
                        <img :src="arrows_back" class="sorting__arrows" v-else>

                    </div>
                    <div class="filters__line line__adapt"></div>


                    <div class="sort__type" :class="{ 'sort_select': sortType == 3 }" @click="emit('sortByPrice', sortKeyPrice);
                    sortKeyPrice = sortKeyPrice == -1 ? 1 : -1; sortType = 3">
                        <p>По цене</p>
                        <img :src="arrows" class="sorting__arrows" v-if="sortKeyPrice == -1">
                        <img :src="arrows_back" class="sorting__arrows" v-else>
                    </div>
                    <div class="filters__line"></div>

                    <div class="sort__type" :class="{ 'sort_select': sortType == 4 }" @click="emit('sortByTime', sortKeyTime);
                    sortKeyTime = sortKeyTime == -1 ? 1 : -1; sortType = 4">
                        <p>По длительности</p>
                        <img :src="arrows" class="sorting__arrows" v-if="sortKeyTime == -1">
                        <img :src="arrows_back" class="sorting__arrows" v-else>
                    </div>
                </div>

                <div class="filters__views" v-if="props.viewType" @click="emit('changeViewType')">
                    <img class="views_list" :src="viewList">
                    <img class="views_table" :src="viewTableSelect">
                </div>
                <div class="filters__views" v-else @click="emit('changeViewType')">
                    <img class="views_list" :src="viewListSelect">
                    <img class="views_table" :src="viewTable">
                </div>


            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

import arrows from '@/assets/arrows.svg';
import arrows_back from '@/assets/arrows_back.svg';

import viewList from '@/assets/list_sort.svg';
import viewListSelect from '@/assets/list_sort_select.svg';
import viewTable from '@/assets/table_sort.svg';
import viewTableSelect from '@/assets/table_sort_select.svg';

// eslint-disable-next-line
const emit = defineEmits(['sortByRating', 'sortByPrice', 'sortByPrice', 'changeViewType', 'filterByTitle']);
// eslint-disable-next-line
const props = defineProps(['viewType']);

let courseTitle = '';

const sortKeyRating = ref();
sortKeyRating.value = -1;
const sortKeyPrice = ref();
sortKeyPrice.value = -1;
const sortKeyTime = ref();
sortKeyTime.value = -1;


let sortType = 0;

</script>

<style lang="css" scoped>
/* Фильтры и сортировки */

* {
    line-height: 140%;
}

.filters {
    background: #FFF;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 60px;
    margin-bottom: 60px;
}

.filters__filters {
    display: flex;
}

.next__line {
    display: none;
    width: 100%;
}

.filters__filter {
    margin-right: 20px;
    width: 25%;
}


.filter__title {
    margin-bottom: 8px;
    color: #302F2E;
    font-size: 16px;
    font-weight: 500;
    /* 22.4px */
}

.filter__input {
    border-radius: 25px;
    border: 1px solid #D7D7D7;
    background: #FFF;
    display: flex;
    width: 100%;
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}


.filters__filter_name {}

.filters__filter_price {}

.filters__filter_type {}

.filters__button_wrapper {
    margin-top: auto;
    margin-left: auto;
}

.filters__button {
    width: 100%;
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

.filters__sorted {
    height: 80px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    border-radius: 25px;
    border-right: 10px solid rgba(255, 255, 255, 0.20);
    border-bottom: 10px solid rgba(255, 255, 255, 0.20);
    border-left: 10px solid rgba(255, 255, 255, 0.20);
    background: #F3F3F3;
    align-items: center;
    padding-left: 60px;
    padding-right: 60px;
}

.filters__sorting {
    display: flex;
}

.sort__type {
    display: flex;
    color: #302F2E;
    font-size: clamp(10px, 2vw, 15px);
    font-weight: 400;
    /* 22.4px */
}

.sort__type p {
    display: inline-block;
    text-wrap: nowrap;
}

.sort_select {
    color: black;
    font-weight: bold;
}

.sorting__arrows {
    margin-left: 20px;
}

.filters__line {
    width: 1px;
    background: #D7D7D7;
    margin-left: clamp(10px, 2vw, 32px);
    margin-right: clamp(10px, 2vw, 32px);
}



.filters__views {
    display: flex;
    justify-content: space-between;
    width: 80px;
}

.views_list {
    width: 20px;
    height: 20px;
}

.views_table {
    width: 20px;
    height: 20px;
}


@media (max-width: 1280px) {}

@media (max-width: 1024px) {
    .filters__sorted {
        padding-left: 30px;
        padding-right: 30px;

    }

    .filters__sorting {
        margin-right: 20px;
    }

    .filters__line {
        margin-left: 20px;
        margin-right: 20px;
    }

    .sort__type {
        width: 40%;
    }

    .filters__sorting {
        flex-wrap: wrap;
        gap: 4px;
        margin-right: auto;
    }


    .line__adapt {
        display: none;
    }

    .filters__views {
        flex-direction: column;
        height: 85%;
        justify-content: space-around;
        align-items: center;
        width: auto;
    }
}

@media (max-width: 768px) {
    .filters__filters {
        flex-wrap: wrap;
    }

    .filters__filter {
        width: 30.3%;
        margin-right: auto;
    }

    .filters__line {
        margin-right: 20px;
        margin-left: 20px;
    }

    .next__line {
        display: block;
    }

    .filters__button_wrapper {
        display: flex;
        width: 100%;
        margin-top: 20px;
    }


    .filters__sorted {
        padding-left: 20px;
        padding-right: 20px;
    }



    .filters__sorting p {
        font-size: 16px;
        width: 100%;
    }

    .sorting__arrows {
        justify-self: end;
    }

}

@media (max-width: 544px) {
    .filters__sorted {
        height: 150px;
        padding-left: 15%;
        padding-right: 15%;
    }

    .filters__sorting {
        gap: 12px;
    }

    .sort__type {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .sort__type p {
        width: 140px;
    }

    .filters__line {
        display: none;
    }



    .filters__filters {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .filters__filter {
        width: 100%;
    }

    .filters__views {
        display: none;
    }
}


@media (max-width: 480px) {

    .filters__filter {
        width: 100%;
    }

    .filters__views {
        display: none;
    }
}

@media (max-width: 320px) {}
</style>