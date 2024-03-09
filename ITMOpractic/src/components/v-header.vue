<template>
    <header class="header">
        <router-link to="/" style="text-decoration: none;">
            <div class="header__logo">
                <img class="header__img" src="@/assets/logo.png">
                <div class="header__title">Наша Библиотека</div>
            </div>
        </router-link>
        <div class="header__buttons">
            <router-link to="/basket" class="header__courses">Корзина</router-link>

            <router-link to="/personalAccount" class="header__courses" href="" style="text-decoration: none">

                <button class="header__button">
                    Личный кабинет
                </button>

            </router-link>
        </div>
    </header>
</template>

<script setup>

import { useStore } from "vuex";

// eslint-disable-next-line
const store = useStore();
</script>



<style lang="css" scoped>
/* Хедер */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    left: 7.5%;
    width: 84%;
    height: 70px;
    flex-shrink: 0;
    border-radius: 0px 0px 16px 16px;
    border: 4px solid rgba(255, 255, 255, 0.20);
    background: linear-gradient(125deg, rgba(255, 255, 255, 0.60) -11.86%, rgba(255, 255, 255, 0.17) 99.59%);
    box-shadow: -4px -4px 20px 0px rgba(54, 48, 45, 0.05), 4px 4px 20px 0px rgba(54, 48, 45, 0.05);
    backdrop-filter: blur(50px);
    padding-left: 20px;
    padding-right: 31px;
    z-index: 1;
}


.header__logo {
    display: flex;
    align-items: center;
}

.header__img {
    width: 48px;
    height: 46px;
}

.header__title {
    color: #4B4A49;
    font-family: "Plovdiv Display";
    font-size: 24px;
    font-weight: 400;
    line-height: 80%;
    margin-left: 12px;
}

.header__courses {
    color: #4B4A49;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    margin-right: 46px;

    position: relative;
    z-index: 100;
}

.header__buttons {
    display: flex;
    align-items: center;
}

.header__button {
    display: flex;
    padding: 12px 24px;
    align-items: center;
    border-radius: 90px;
    border: 2px solid #F6BE43;

    color: #FFC100;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
}


@media (max-width: 1280px) {}

@media (max-width: 1024px) {}

@media (max-width: 768px) {}

@media (max-width: 634px) {
    .header {
        box-sizing: border-box;
        width: 100%;
        left: 0;
        height: 120px;
    }

    .header__buttons {
        flex-direction: column;
        gap: 10px;
    }
}

@media (max-width: 480px) {
    .header__img {
        width: 40px;
    }

    .header__title {
        font-size: 20px;
    }

    .header__buttons {
        align-items: center;
    }

    .header__courses {
        font-size: 14px;
        margin-right: 0;
    }

    .header__button {
        font-size: 14px;
        padding: 6px 12px;
    }
}

@media (max-width: 320px) {
    .header {
        padding-left: 0;
        padding-right: 0;
    }

    .header__logo {
        flex-direction: column;
        gap: 10px;
    }

    .header__buttons {
        justify-content: space-between;
    }
}
</style>