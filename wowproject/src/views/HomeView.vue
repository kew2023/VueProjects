<template>
    <div class='main__container'>
        <div class="main__line"></div>
        <div class="main__title" @click="() => { reviews.length = 0; countReviews = 0 }">Начальная страница
        </div>
        <div class="main__info">
            Какая-то основная информация при переходе
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import axios from "axios";

const reviews = ref([]);

const countReviews = ref();
countReviews.value = 0;
loadMore();

async function loadMore () {
    getPost(countReviews.value);
    countReviews.value += 5;
}

async function getPost (n) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        reviews.value = [...reviews.value, ...response.data.slice(n, n + 5)];
        console.log(response);
        console.log(reviews.value);
        for (let review of reviews.value) {
            review.price = review?.price ?? Math.round(Math.random() * 1000);
        }
    } catch (error) {
        console.error(error);
    }
}

</script>

<style lang="css" scoped>
.main__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 60px;
}

.main__info {
    font-size: 16px;
    color: #FFF;
}

.list__el {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
}

.el {
    border: 1px;
    border-radius: 1vw;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 20vw;
    height: 5vw;
    background-color: #202020;
    color: #a5a5a5;
    font-size: 30px;
}

.main__line {
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    border-radius: 1px;
    opacity: 0.2;
    background: var(--tx, #7D7781);
}

.main__title {
    color: #FFF;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 40px;
}

@media (max-width: 1919px) {

    .main__container {
        margin-left: 20px;
    }

    .list__el {
        grid-template-columns: repeat(2, 1fr);
    }

    .main__title {
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

}

@media (max-width: 1279px) {
    .main__title {
        margin-top: 0px;
    }

    .main__line {
        width: 77vw;
        position: absolute;
        left: 11.5%;
        top: 155px;
    }
}

@media (max-width: 1023px) {
    .main__container {
        margin-left: 0;
    }

    .list__el {
        grid-template-columns: repeat(2, 1fr);
    }

    .el {
        width: 25vw;
        height: 25vw;
    }

    .main__line {
        width: 90%;
        top: 280px;
        left: 5%
    }
}

@media (max-width: 520px) {
    .main__line {
        width: 90%;
        top: 255px;
        left: 5%
    }
}
</style>