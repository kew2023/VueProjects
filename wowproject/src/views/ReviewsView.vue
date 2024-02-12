<template lang="">
    <div class="main__container">
        <div class="main__line"></div>
        <div class="main__title" @click="() => { reviews.length = 0; countReviews = 0 }">Отзывы</div>
        <div class="main__author" v-if="reviews.length > 0">
            <div class="author__bar">
                <img src="../assets/icon.png" alt="" class="author__logo">
                <div class="author__info">
                    <div class="info__container">
                        <div class="author__name">Ivan Mazepa</div>
                        <div class="author__rating">
                            <img src="../assets/stars.png" alt="">
                        </div>
                    </div>
                <div class="author__text">50 отзывов за 1 месяц</div>
            </div>
            </div>
            <div class="author__filter">
                    <div class="filter__title">Фильтр рейтинга</div>
                    <select class="filter__list" name="filter" id="0">
                        <option value="1">Все отзывы или от 1 до 5</option>
                        <option value="2">Вариант 2</option>
                        <option value="3">Вариант 3</option>
                    </select>
                </div>
        </div>
        <div class="main__reviews" v-if="reviews.length > 0">
            <Review :reviews="reviews" />
        </div>
        <div class="main__noreviews" v-else>Ещё не было отзывов ...</div>
        <div class="main__button_more" @click="loadMore">
            Показать больше отзывов
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";
import Review from '@/components/V-Review.vue';

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
    margin-left: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
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

.main__author {
    display: flex;
    margin-bottom: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    padding: 20px;
}

.author__logo {
    width: 21.702px;
    height: 21.702px;
    padding: 19px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

.author__bar {
    display: flex;
}

.author__info {
    width: 100%;
    display: flex;
    align-items: top;
    padding-top: 5px;
    margin-left: 20px;
}

.info__container {
    margin-right: 20px;
}

.author__name {
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
}

.author__text {
    color: #FFCE4F;
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    padding-bottom: 10px;
    position: relative;
    top: -2px;
    /* 175% */
}

.author__rating img {
    width: 70px;
    height: 10px;
}

.author__filter {
    margin-left: auto;
}

.filter__title {
    color: #FFF;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    right: -20px;
    bottom: -5px;
    position: relative;
}

.filter__list {
    width: 100%;
    height: 66px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    color: #FFF;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 20px;
    padding-right: 20px;
}

.filter__list option {
    background: rgba(255, 255, 255, 0.08);
    color: rgb(0, 0, 0);
}

.main__reviews {}

.main__noreviews {
    color: #FFF;
    font-size: 18px;
}

.main__button_more {
    display: inline-flex;
    padding: 23px 30px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #FF9839;
    color: var(--ffffff, #FFF);
    font-size: 16px;
    font-weight: 600;
    align-self: center;
    margin-top: 20px;
}

@media (max-width: 1919px) {

    .main__container {
        margin-left: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .main__title {
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .main__author {
        display: block;
        margin-bottom: 20px;
    }

    .author__bar {
        display: flex;
    }

    .author__info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .info__container {
        margin-right: 20px;
    }

    .author__name {
        font-size: 16px;
    }

    .author__text {
        font-size: 14px;
        position: relative;
        top: -2px;
        /* 175% */
    }

    .author__filter {
        margin-top: 20px;
    }

    .filter__list {
        height: 55px;
        font-size: 14px;
    }

}

@media (max-width: 1279px) {
    .main__container {
        position: relative;
        top: -20px;
    }

    .main__line {
        width: 75vw;
        position: absolute;
        left: -236px;
    }

}

@media (max-width: 1023px) {
    .main__container {
        margin-left: 0;
    }

    .main__line {
        width: 100%;
        position: absolute;
        left: 0px;
        top: -122px;
    }

}
</style>