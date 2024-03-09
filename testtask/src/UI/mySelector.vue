<template>
    <p class="selector__title" @click.prevent.self="selectorDisplay = true">{{ arr[textItem] }}</p>
    <div class="container" @click.prevent.self="selectorDisplay = false" v-if="selectorDisplay">
        <ul>
            <li @click="emit('selectSort', 'sortRatingTop'); textItem = 0"
                :class="{ selected: props.sortType == 2 & props.sortKeyArr[0].value == -1 }">
                Сначала высокий рейтинг
            </li>
            <li @click="emit('selectSort', 'sortRatingBad'); textItem = 1"
                :class="{ selected: props.sortType == 2 & props.sortKeyArr[0].value == 1 }">
                Сначала низкий рейтинг
            </li>
            <li @click="emit('selectSort', 'sortPriceTop'); textItem = 2"
                :class="{ selected: props.sortType == 3 & props.sortKeyArr[1].value == -1 }">
                Сначала высокая цена
            </li>
            <li @click=" emit('selectSort', 'sortPriceBad'); textItem = 3"
                :class="{ selected: props.sortType == 3 & props.sortKeyArr[1].value == 1 }">
                Сначала низкая цена
            </li>
            <li @click=" emit('selectSort', 'sortTimeTop'); textItem = 4"
                :class="{ selected: props.sortType == 4 & props.sortKeyArr[2].value == -1 }">
                Сначала долгие
            </li>
            <li @click="emit('selectSort', 'sortTimeBad'); textItem = 5"
                :class="{ selected: props.sortType == 4 & props.sortKeyArr[2].value == 1 }">
                Сначала короткие
            </li>
        </ul>
    </div>
</template>

<script setup>
let textItem = 0;

import { ref } from 'vue';

// eslint-disable-next-line
const emit = defineEmits(['selectSort']);
// eslint-disable-next-line
const props = defineProps(['sortType', 'sortKeyArr']);
const selectorDisplay = ref();
selectorDisplay.value = false;

const arr = ['Сначала высокий рейтинг', 'Сначала низкий рейтинг', 'Сначала высокая цена', 'Сначала низкая цена', 'Сначала долгие', 'Сначала короткие'];
</script>

<style lang="css" scoped>
.selector__title {
    width: 100%;
    font-weight: bold;
    text-align: center;
}

.selector__title::after {
    content: "⮟";
    margin-left: 20px
}

.container {
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 30px;
    background: rgb(20, 20, 20);
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 10%
}

li {
    text-align: center;
    color: rgb(100, 100, 100);
    font-size: 14px
}

.selected {
    font-weight: bold;
    color: rgb(150, 150, 150);
}
</style>
