<template>
    <section class="form">
        <div class="content__container">
            <div class="form__left">
                <div class="form__text">
                    Остались вопросы? <br>
                    Напишите нам и мы ответим на все!
                </div>
                <img class="form__img" src="@/assets/formimg.png">
            </div>
            <div class="form__right">
                <div class="form__item">
                    <div class="form__title">ФИО</div>
                    <input class="form__input" placeholder="" type="text" maxlenght="40">
                </div>
                <div class="form__item">
                    <div class="form__title">Номер телефона</div>
                    <input class="form__input" placeholder="+7-(___)-___-__-__">
                </div>
                <div class="form__item">
                    <div class="form__title">Email</div>
                    <input class="form__input" placeholder="+7-(___)-___-__-__" type="email">
                </div>
                <div class="form__item">
                    <div class="form__title">Вопрос</div>
                    <input class="form__input input_big" placeholder="Введите текст">
                </div>
                <div class="form__checkbox">
                    <input type="checkbox" name="" id="form__checkbox">
                    <label for="form__checkbox"></label>
                    <p>Согласие на обработку данных</p>
                </div>
                <button class="form__button">
                    <div class=" button__left">Отправить
                    </div>
                    <div class="button__right">
                        <img class="button__img_arrow" src="@/assets/check.svg">
                    </div>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
.form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    border-top: 10px solid rgba(255, 255, 255, 0.80);
    background: url("@/assets/formbg.svg") 100% 0;
    background-size: cover;
    background-repeat: no-repeat;

    /* тень */
    box-shadow: -4px -4px 20px 0px rgba(54, 48, 45, 0.05), 4px 4px 20px 0px rgba(54, 48, 45, 0.05);
    backdrop-filter: blur(10px);

}

.content__container {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1.05fr;

}

.form__left {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.form__text {
    color: #4B4A49;
    font-family: "Plovdiv Display";
    font-size: 42px;
    font-weight: 400;
    line-height: 120%;
    /* 50.4px */
}

.form__img {}

.form__right {
    display: grid;
    grid-template-areas:
        "a a"
        "b c"
        "d d"
        "d d"
        "e e"
        "f f";
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 20px;
    padding: 20px 30px 30px 20px;
    border-radius: 16px;
    background: #F3F3F3;
    height: 550px;
    margin-bottom: 40px;
}


.form__item {}

.form__item:nth-child(1) {
    grid-area: a;
}

.form__item:nth-child(2) {
    grid-area: b;
}

.form__item:nth-child(3) {
    grid-area: c;
}

.form__item:nth-child(4) {
    grid-area: d;
}

.form__checkbox {
    grid-area: e;
}

.form__checkbox input {}

/* Стилизация checkbox */
#form__checkbox {
    display: none;
}

#form__checkbox+label {
    display: block;
    width: 20px;
    height: 20px;
    background: #FFF;
    text-align: center;
    border-radius: 4px;
}

#form__checkbox+label:before {
    content: '';
}

#form__checkbox:checked+label {
    border: none
}

#form__checkbox:checked+label:before {
    color: #4B4A49;
    content: '✔';
}


.form__button {
    grid-area: f;
}

.form__item {}

.form__title {
    color: #4B4A49;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 8px;
}

.form__input {
    width: 100%;
    height: 42px;
    align-items: center;
    gap: 10px;
    padding-left: 10px;

    border-radius: 8px;
    background: #FFF;

    position: relative;
    border: none;
}


.form__input::placeholder {
    position: absolute;
    height: 22px;
    top: 12px;
    left: 12px;
}

.input_big {
    height: 160px;
}

.form__checkbox {
    display: flex;
    align-items: center;
}

.form__checkbox p {
    margin-left: 8px;
}

.form__button {
    display: flex;
}

.form .button__left {
    width: 90%;
    height: 48px;
    background: url('@/assets/button_left_long.svg') 100% 50% / 100% no-repeat;
}

.form .button__right {
    background: url('@/assets/button_right_1.svg') 100% 50% / 100% no-repeat;
    width: 10%;
    height: 48px;
}

@media (min-width: 2050px) {
    .form__input {
        height: 50%;
    }

    .input_big {
        height: 100%;
    }
}

@media (max-width: 1280px) {}

@media (max-width: 1024px) {
    .form__text {
        font-size: 36px;
    }
}

@media (max-width: 845px) {
    .form__right {
        grid-template-areas:
            "a a"
            "b b"
            'c c'
            "d d"
            "d d"
            "e e"
            "f f";
        height: 85%;
        row-gap: 0;
    }
}

@media (max-width: 768px) {
    .content__container {
        grid-template-columns: 1fr;
        margin-top: 0;
    }

    .form__left {
        width: 100%;
        align-items: center;
    }

    .form__right {
        row-gap: 20px;
    }

    .form__text {
        text-align: center;
    }
}



@media (max-width: 480px) {
    .form__text {
        font-size: 28px;
    }

    .form__img {
        width: 100%;
    }
}

@media (max-width: 320px) {
    .form__text {
        font-size: 24px;
    }

    .form__button {
        width: 115%;
        margin-left: -5%;
    }
}
</style>