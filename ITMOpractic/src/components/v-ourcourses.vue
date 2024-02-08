<template>
    <section class="ourcourses">
        <div class="content__container">
            <div class="ourcourses__info">
                <div class="ourcourses__title">Наши курсы это</div>
                <div class="ourcourses__list">
                    <div class="ourcourses__item">
                        <div class="item__number">1</div>
                        <div class="item__text">Лучшие <b>наставники</b></div>
                    </div>
                    <div class="ourcourses__item">
                        <div class="item__number">2</div>
                        <div class="item__text">Интересные <b>программы обучения</b></div>
                    </div>
                    <div class="ourcourses__item">
                        <div class="item__number">3</div>
                        <div class="item__text">Передовые <b>технологии</b> и методы <b>обучения</b></div>
                    </div>
                </div>
                <button class="ourcourses__button">
                    <div class="button__left">Найти свой курс</div>
                    <div class="button__right">
                        <img class="button__img_arrow" src="@/assets/arrow_right.svg">
                    </div>
                </button>
            </div>
            <img class="ourcourses__img" src="@/assets/shutterstock.png">
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
/* Первая секция */
.ourcourses {
    display: flex;
    justify-content: center;
    width: 100%;
    background-image: url("@/assets/bg_ourcourses.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0px 0px 30px 30px;
    border-bottom: 10px solid rgba(255, 255, 255, 0.20);
}

.content__container {
    height: 600px;
    display: flex;
    flex-direction: row;
}

.ourcourses__info {
    padding-top: 166px;

}

.ourcourses__title {
    color: #4B4A49;
    font-family: "Plovdiv Display";
    font-size: 70px;
    font-weight: 400;
    line-height: 100%;

    /* 70px */
}

.ourcourses__list {
    margin-top: 27px;
}

.ourcourses__item {
    display: flex;
    margin-bottom: 3px;
    align-items: center;
}

.item__number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 30px;
    flex-shrink: 0;
    background-image: url("@/assets/Vector.svg");

    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 130%;

    /* 18.2px */
}

.item__text {
    color: #4B4A49;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;

    margin-left: 10px;
    /* 22.4px */
}

.ourcourses__button {
    display: flex;
    margin-top: 45px;
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

.ourcourses__img {
    margin-top: auto;
    margin-left: auto;
    padding-right: 65px;
    background-image: url('@/assets/shutterstock_bg.png');
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: 100% 100%;
}


@media (max-width: 1280px) {

    .ourcourses__title {
        font-size: 62px;
    }
}

@media (max-width: 1024px) {
    .content__container {
        position: relative;
        z-index: -1;
    }

    .ourcourses__img {
        width: 45%;
        position: absolute;
        left: 50%;
        bottom: 0%;
        z-index: -1;
    }
}

@media (max-width: 768px) {
    .content__container {
        position: relative;
        height: auto;
    }

    .ourcourses__title {
        font-size: 48px;
    }

    .ourcourses__img {
        width: 45%;
        position: absolute;
        left: 50%;
        bottom: -10%;
        z-index: -1;
    }
}

@media (max-width: 544px) {
    .ourcourses__img {
        display: none;
    }
}

@media (max-width: 480px) {
    .ourcourses__title {
        font-size: 36px;
    }

    .ourcourses__item {
        margin-bottom: 10px;
    }

    .item__text {
        font-size: 16px;
    }

    .ourcourses__button {
        justify-content: center;
    }
}

@media (max-width: 320px) {
    .ourcourses__title {
        font-size: 26px;
    }

    .ourcourses__button {
        width: 100%;
    }
}
</style>