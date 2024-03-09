<template>
    <div class="books__list">
        <div class="books__item" v-for="book of props.booksArr" :key="book.rating" @click="console.log(props)">
            <div class="item__title">{{ book.name }}</div>
            <div class="item__info">
                <div class="info__item">
                    <p>Автор: </p>
                    <p>{{ book.author }}</p>

                </div>
                <div class="info__item">
                    <p>Издатель: </p>
                    <p>{{ book.publisher }}</p>
                </div>
                <div class="info__item">
                    <p>Жанр: </p>
                    <p>{{ book.genry }}</p>
                </div>
                <div class="info__item">
                    <p>Тип: </p>
                    <p>{{ book.type }}</p>
                </div>
            </div>
            <div class="item__main">
                <img class="item__logo" :src="booklogo">
                <div class=" item__price" v-if="!props.exampl">
                    <div class="price__text"> Кол-во {{ book.circulation }} </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import booklogo from "@/assets/bookLogo.svg";

// eslint-disable-next-line
const props = defineProps(['booksArr', 'exampl']);
</script>

<style lang="css" scoped>
.books__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 60px;
}

.books__list_list {
    display: grid;
    gap: 20px;
    margin-bottom: 60px;
}

.books__item {
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

.books__item_list {
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
    grid-template-columns: 1fr;
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
    .books__item_list {
        display: grid;
        grid-template-columns: 1fr 1fr 1frs;
    }
}

@media (min-width: 2560px) {
    .books__list {
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
    .books__list {
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
    .books__list {
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
    .books__item_list {
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

    .books__list {
        grid-template-columns: 1fr;
        margin-bottom: 30px;
    }

    .item__logo {
        width: 50%;
    }
}

@media (max-width: 320px) {}
</style>