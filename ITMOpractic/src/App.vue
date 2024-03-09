<template>
    <section class="wrapper">
        <vHeader :books="books"></vHeader>
        <router-view></router-view>

        <vFooter></vFooter>
    </section>
</template>

<script setup>

import vHeader from '@/components/v-header.vue';
import vFooter from "@/components/v-footer.vue";


let doc = document;
console.log(doc.getElementById('form'))

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
    transition-duration: 0.1s;
}

button:active {
    transform: scale(1.1);
}

a {
    text-decoration: none;
}

ul {
    list-style-type: none;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    height: 100%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
}

.content__container {
    width: 80%;
    display: flex;
    flex-direction: column;
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
    .books__button {
        width: 100%;
    }
}
</style>
