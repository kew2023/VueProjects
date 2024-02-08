<template>
    <section class="adv">
        <div class="content__container">
            <div class="adv__title">Это реклама <br class="title__br"> УМКИ</div>
            <button class="adv__button">
                <div class="button__left">Познакомиться</div>
                <div class="button__right">
                    <img class="button__img_arrow" src="@/assets/arrow_right.svg">
                </div>
            </button>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
/* Рекламный блок */

.adv {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content__container {
    height: 600px;
    flex-shrink: 0;
    backdrop-filter: blur(10px);
    border-radius: 20px;
    justify-content: center;
    gap: 80px;

    background:
        url('@/assets/advbg_3.png') center right -147% / 80% no-repeat,
        url('@/assets/advbg_1.svg') center left 0px / 45% no-repeat,
        url('@/assets/advbg_2.svg') top 30px right/ 15% no-repeat,
        linear-gradient(272deg, #F6BE43 0%, #FFF06A 99.76%),
        linear-gradient(125deg, rgba(255, 255, 255, 0.80) -11.86%, rgba(255, 255, 255, 0.40) 99.59%);


    margin-bottom: 60px;
}


.adv__title {
    color: var(--Main-text, #302F2E);
    font-family: "Plovdiv Display";
    font-size: 64px;
    font-weight: 400;
    line-height: 100%;
    margin-left: 100px;
    /* 64px */
}

.title__br {
    display: none;
}


.adv__button {
    width: 270px;
    height: 48px;
    display: flex;
    margin-left: 100px;
}

.button__left {
    color: #4B4A49;
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

.button__left {
    color: #FFF;
    background-image: url('@/assets/button_left_black.svg');
}


@media (max-width: 1280px) {}

@media (max-width: 1024px) {
    .content__container {
        height: 500px;
    }

    .adv__title {
        font-size: 58px;
    }
}

@media (max-width: 768px) {
    .content__container {
        height: 450px;
        gap: 50px;
    }

    .adv__title {
        font-size: 44px;
        margin-left: 60px;
    }

    .adv__button {
        margin-left: 60px;
    }
}

@media (max-width: 564px) {

    .content__container {
        height: 350px;
    }

    .title__br {
        display: inline;
    }

}

@media (max-width: 480px) {
    .content__container {
        background:
            url(http://localhost:8080/img/advbg_3.c7ae9718.png) center right +150% / 144% no-repeat,
            url(http://localhost:8080/img/advbg_1.b8689d3b.svg) center left 0px / 45% no-repeat,
            url(http://localhost:8080/img/advbg_2.c9ba525e.svg) top 30px right/ 15% no-repeat,
            linear-gradient(272deg, #F6BE43 0%, #FFF06A 99.76%), linear-gradient(125deg, rgba(255, 255, 255, 0.80) -11.86%, rgba(255, 255, 255, 0.40) 99.59%);

    }

    .adv__title {
        font-size: 36px;
        margin-left: 10px;
    }

    .adv__button {
        margin-left: auto;
        margin-right: auto;
        width: clamp(180px, 70vw, 270px);
    }

}

@media (max-width: 320px) {
    .content__container {
        height: 250px;
    }

    .adv__title {
        font-size: 28px;
    }

    .button__left {
        font-size: 14px;
    }
}
</style>