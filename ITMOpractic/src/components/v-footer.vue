<template>
    <footer class="footer">
        <div class="content__container">
            <div class="footer__icons">
                <a href="">
                    <div class="icons__umko">
                        <img class="umko__logo" src="@/assets/logo_negative.png">
                        <div class="umko__text">Наша Библиотека</div>
                    </div>
                </a>
                <div class="icons__list">
                    <a href=""><img class="footer__icon" src="@/assets/youtube.svg"></a>
                    <a href=""><img class="footer__icon" src="@/assets/telegram.svg"></a>
                    <a href=""><img class="footer__icon" src="@/assets/vk.svg"></a>
                </div>
            </div>
            <div class="footer__info">
                <div class="footer__email">mail@obr.so</div>
                <div class="footer__address">г. Москва, Ростовская набережная, д. 5</div>
            </div>
            <div class="footer__buttons">
                <button class="footer__offer">Публичная оферта</button>
                <button class="footer__policy">Политика конфиденциальности</button>
            </div>
            <div class="footer__me">
                <div class="me__number">+7 999 333-33-03</div>
                <button class="me__button">Перезвоните мне</button>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="css" scoped>
/* Футер */
.footer {
    display: flex;
    width: 100%;
    justify-content: center;
    background:
        url('@/assets/footerbg1.svg') left bottom / 15% no-repeat,
        url('@/assets/footerbg2.svg') right bottom / 15% no-repeat,
        var(--FINAL-text-light, #787878);

    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    margin-top: auto;
    /* 22.4px */
}

.content__container {
    display: flex;
    flex-direction: row;
    height: 216px;
    margin-top: 60px;
    gap: 38px;
}

.footer__icons {
    display: flex;
    flex-direction: column;

}

.icons__umko {
    display: flex;
    align-items: center;
}

.umko__logo {
    width: 48px;
    height: 46px;
}

.umko__text {
    margin-left: 8px;
    color: #FFF;
    font-family: "Plovdiv Display";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 80%;
    /* 19.2px */
}

.icons__list {
    margin-top: 12px;
    display: flex;
    justify-content: space-around;
}

.footer__icon {
    width: 32px;
    height: 32px;
}

.footer__info {}

.footer__email {}

.footer__address {
    margin-top: 23px;
}

.footer__buttons {}

.footer__offer {
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
}

.footer__policy {

    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;

    margin-top: 23px;
}

.next__line {
    display: none;
}

.footer__me {
    margin-left: auto;
}

.me__number {
    text-align: center;
    color: var(--FINAL-white, #FFF);

    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
    /* 26px */
}

.me__button {
    margin-top: 12px;
    display: flex;
    padding: 12px 24px;
    align-items: center;
    border-radius: 90px;
    border: 2px solid #FFF;

    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    /* 22.4px */
}

.footer__policy,
.footer__offer {
    text-align: start;
}

.footer__info,
.footer__buttons,
.footer__me {
    margin-top: 10px;
}


@media (max-width: 1280px) {

    .footer__policy,
    .footer__offer {
        text-align: start;
    }
}

@media (max-width: 1024px) {

    .footer__policy,
    .footer__offer {
        text-align: start;
    }

    .me__number {
        font-size: 18px;
    }
}

@media (max-width: 768px) {

    .footer {
        font-size: 14px;
    }

    .content__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 60px;
    }

    .icons__list {
        justify-content: start;
        gap: 10px;
    }

    .footer__policy,
    .footer__offer {
        font-size: 14px;
    }

    .footer__me {
        margin-left: 0;
    }

    .me__number {
        text-align: start;
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    .content__container {
        grid-template-columns: 1fr;
        height: auto;
        grid-template-areas: "b" "c" "a" "d";
    }

    .footer__icons {
        align-items: center;
        grid-area: a;
    }

    .footer__info {
        grid-area: b;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer__address {
        text-align: center;
    }

    .footer__policy {
        text-align: center;
    }

    .footer__buttons {
        grid-area: c;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer__me {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: d;
    }

}

@media (max-width: 320px) {}
</style>