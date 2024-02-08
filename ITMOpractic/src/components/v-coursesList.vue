<template>
    <div :class="{ courses__list_list: !props.viewType, courses__list: props.viewType }">
        <div :class="{ courses__item_list: !props.viewType, courses__item: props.viewType }"
            v-for="course of props.coursesArr" :key="course.rating" @click="console.log(props)">
            <div class="item__title">{{ course.title }}</div>
            <div class="item__info" :class="{ item__info_list: !props.viewType }">
                <div class="info__item">
                    <img src="../assets/calendar.svg" alt="">
                    <p>{{ course.date }}</p>

                </div>
                <div class="info__item">
                    <img src="../assets/alarm.svg" alt="">
                    <p>{{ course.time + " " + printHour(course.time) }}</p>
                </div>
                <div class="info__item">
                    <img src="../assets/diplom.svg" alt="">
                    <p>{{ course.doc }}</p>
                </div>
            </div>
            <div class="item__main" :class="{ item__main_list: !props.viewType }">
                <img class="item__logo" :src="logoArr[course.rating - 1]">
                <div class=" item__price">
                    <img class="price__logo" src="../assets/wallet.svg" v-if="course.price">
                    <div class="price__text"><span v-if="Array.isArray(course.price)">от {{ Math.min(...course.price) + "₽"
                    }}</span>
                        <span v-else>{{ course.price ? course.price + " ₽" : "Бесплатно" }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import logocourse_1 from "@/assets/logocourse_1.svg";
import logocourse_2 from "@/assets/logocourse_2.svg";
import logocourse_3 from "@/assets/logocourse_3.svg";
import logocourse_4 from "@/assets/logocourse_4.svg";
import logocourse_5 from "@/assets/logocourse_5.svg";
import logocourse_6 from "@/assets/logocourse_6.svg";
import logocourse_7 from "@/assets/logocourse_7.svg";
import logocourse_8 from "@/assets/logocourse_8.svg";
import logocourse_9 from "@/assets/logocourse_9.svg";

const logoArr = [logocourse_1, logocourse_2, logocourse_3,
    logocourse_4, logocourse_5, logocourse_6,
    logocourse_7, logocourse_8, logocourse_9];

// eslint-disable-next-line
const props = defineProps({
    coursesArr: {
        type: Array,
    },
    viewType: {
        type: Boolean,
    }
});

function printHour (n) {
    const words = ['час', 'часа', 'часов'];
    let newn = n % 100;
    if (newn > 19) newn = newn % 10;
    switch (newn) {
        case 0: return words[2];
        case 1: return words[0];
        case 2: return words[1];
        case 3: return words[1];
        case 4: return words[1];
        default: return words[2];
    }
}
</script>

<style lang="css" scoped>
.courses__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 60px;
}

.courses__list_list {
    display: grid;
    gap: 20px;
    margin-bottom: 60px;
}

.courses__item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 16px;
    background: #FFF;

    /* тень */
    box-shadow: -4px -4px 20px 0px rgba(54, 48, 45, 0.05), 4px 4px 20px 0px rgba(54, 48, 45, 0.05);
    backdrop-filter: blur(10px);
    /*height: 280px;*/
}

.green {
    backdrop-filter: blur(20px);
    background: rgb(250, 250, 238);
}

.courses__item_list {
    display: grid;
    grid-template-areas:
        "a c"
        "b c";
    grid-template-columns: 2fr 1fr;
    padding: 20px;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;

    border-radius: 16px;
    background: #FFF;

    /* тень */
    box-shadow: -4px -4px 20px 0px rgba(54, 48, 45, 0.05), 4px 4px 20px 0px rgba(54, 48, 45, 0.05);
    backdrop-filter: blur(10px);
}

.item__title {
    grid-area: a;
    width: 100%;
    color: #4B4A49;
    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
    /* 26px */
    overflow: hidden;
}

.item__info {
    margin-top: auto;
    grid-area: b;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    align-items: center;
}

.item__info_list {
    grid-template-columns: 1fr;
}

.info__item {
    display: flex;
    color: rgb(75, 74, 73);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0%;
}

.info__item img {
    margin-right: 8px;
}

.item__main {
    grid-area: c;
    display: flex;
    width: 100%;
    flex-direction: column;
}

.item__main_list {
    height: 100%;
}

.item__logo {
    display: block;
    width: 70%;
}

.item__price {
    margin-left: auto;
    margin-top: auto;
    display: flex;
}

.price__logo {
    margin-right: 8px;
}


.price__text {
    color: var(--FINAL-black, #4B4A49);
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    text-wrap: nowrap;
    /* 22.4px */
}

@media (min-width: 2050px) {
    .courses__item_list {
        display: grid;
        grid-template-columns: 1fr 1fr 1frs;
    }
}

@media (min-width: 2560px) {
    .courses__list {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }


    .item__info p {
        font-size: 18px;
        font-weight: 400;
        line-height: 140%;
    }

    .info__item {
        justify-content: start;
    }

}

@media (min-width: 3840px) {
    .courses__list {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .item__title {
        font-size: 30px;
    }

    .item__info {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .info__item {
        justify-content: center;
    }

    .item__main {
        margin-top: auto;
    }

    .price__logo {
        width: 30px;
    }

    .price__text {
        font-size: 24px;
    }
}


@media (max-width: 1280px) {}

@media (max-width: 1024px) {
    .courses__list {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {


    .item__info {
        grid-template-columns: 1fr;
    }

    .item__title {
        font-size: 18px;
    }

    .price__text {
        font-size: 13px;
    }
}

@media (max-width: 544px) {
    .courses__item_list {
        grid-template-areas:
            "a"
            "b"
            "c";
        grid-template-columns: 1fr;
    }

    .item__info {
        grid-template-columns: 1fr;
    }

    .item__title {
        font-size: 18px;
    }

    .price__text {
        font-size: 13px;
    }

}

@media (max-width: 480px) {

    .courses__list {
        grid-template-columns: 1fr;
        margin-bottom: 30px;
    }

    .item__logo {
        width: 50%;
    }
}

@media (max-width: 320px) {}
</style>