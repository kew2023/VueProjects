<template>
    <header>
        <p class="header__myprofile">Мой профиль</p>
        <div class="header__info">
            <div class="header__rating info__item">
                <p>Рейтинг: <span>{{ userInfo.rating }}</span></p>
                <div class="rating__stars">
                    <img src="../assets/stars.png" alt="Звездочки" width="126px" height="18px">
                </div>
            </div>
            <div class="linebreak"></div>
            <div class="header__reviews info__item">
                <p>Отзывов: <span>{{ userInfo.reviews }}</span></p>
            </div>
            <div class="header__transactions info__item">
                <p><span id="item__text">Cделок:</span>
                    Продаж: <span>{{ userInfo.sales }}</span>
                    Покупок: <span>{{ userInfo.buy }}</span>
                </p>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    props: {
        userInfo: {
            type: Object,
        }
    }
};
</script>
<style scoped>
header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

.header__myprofile {
    min-width: 230px;
    font-family: Montserrat;
    color: #FFF;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
}

.header__info {
    width: 100%;
    display: flex;
    justify-content: end;
}

.header__info .info__item {
    max-height: 56px;
    margin-left: 15px;
    color: #7D7781;
    display: inline-flex;
    padding: 17px 20px;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}


.header__info p {
    display: block;
}

.header__info span {
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #FFF
}

.header__info .linebreak {
    display: none;
}

.info__item p {
    font-size: 16px;
}

@media (max-width: 1919px) {
    header {
        margin-bottom: 30px;
    }

    .header__myprofile {
        min-width: 200px;
        font-size: 25px;
        line-height: 35px;
    }

    .header__info .info__item {
        padding: 12px 20px;
        border-radius: 15px;
        margin-left: 10px;
    }

    .info__item p {
        font-size: 14px;
    }

    .info__item img {
        width: 90px;
        height: 13px;
    }

    .info__item span {
        font-size: 16px;
    }
}

@media (max-width: 1279px) {
    header {
        margin-bottom: 40px;
    }

    .header__myprofile {
        min-width: 170px;
        font-size: 20px;
        line-height: 30px;
    }

    #item__text {
        display: none;
    }

    .header__info .info__item {
        padding: 9px 15px;
        border-radius: 10px;
    }

    .info__item p {
        font-size: 12px;
    }

    .info__item img {
        width: 67px;
        height: 10px;
    }

    .info__item span {
        font-size: 14px;
    }


}

@media (max-width: 1023px) {
    header {
        margin-bottom: 40px;
    }

    .header__myprofile {
        min-width: 170px;
        font-size: 20px;
        line-height: 30px;
    }

    #item__text {
        display: none;
    }

    .header__info {
        flex-wrap: wrap;
    }

    .header__info .info__item {
        padding: 9px 15px;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    .info__item p {
        font-size: 12px;
    }

    .info__item img {
        width: 67px;
        height: 10px;
    }

    .info__item span {
        font-size: 14px;
    }

    .header__info .linebreak {
        display: block;
        width: 100%;
    }
}
</style>