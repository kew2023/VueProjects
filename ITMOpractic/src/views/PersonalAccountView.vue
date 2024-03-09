<template>
    <main class="content__container" v-if="store.state.userVerification">
        <section class="personal">
            <img class="personal__avatar" src="@/assets/user__avatar.svg" alt="Avatar"
                @click="store.state.userVerification = !store.state.userVerification">
            <div class="personal__info">
                <ul>
                    <li>ФИО</li>
                    <li>Email</li>
                    <li>Номер</li>
                </ul>

                <ul>
                    <li>{{ `${user.surname} ${user.name} ${user.fathername}` }}</li>
                    <li>{{ user.email }}</li>
                    <li>{{ phoneFormat(user.phonenumber) }}</li>
                </ul>

            </div>
            <div class="personal__rating">
                <p>Ваш рейтинг</p>
                <p class="rating__data">{{ user.rating }}</p>
            </div>

        </section>
        <vOrders :orders="orderArr"></vOrders>
    </main>
    <main class="content__container verification__container" v-else>
        <div class="verification">
            <div class="verification__wrapper">
                <div class="verification__block sign_in">
                    <p class="block__type">Вход</p>

                    <div class="block__item">

                        <p class="block__title">email <span class="error" v-show="emailErrorSignIn">Ошибка ввода</span>
                        </p>
                        <input type="text" placeholder="lorem@mail.ru" class="block__input" v-model="emailSignIn">

                    </div>
                    <div class="block__item">
                        <p class="block__title">password <span class="error" v-show="passwordErrorSignIn">Поле пусто</span>
                        </p>
                        <input type="text" placeholder="password" class="block__input" v-model="passwordSignIn">
                    </div>
                    <button class="block__button" @click="SignIn()">Войти</button>

                </div>
                <div class="line"></div>
                <div class="verification__block sign__up">
                    <p class="block__type">Регистрация</p>
                    <div class="block__item">
                        <p class="block__title">email <span class="error" v-show="emailErrorSignUp">Ошибка ввода</span></p>
                        <input type="text" placeholder="lorem@mail.ru" class="block__input" v-model="emailSignUp">
                    </div>
                    <div class="block__item">
                        <p class="block__title">password <span class="error" v-show="passwordErrorSignUp">Ошибка</span>
                        </p>
                        <input type="text" placeholder="password (от 5 символов)" class="block__input"
                            v-model="passwordSignUp">
                    </div>
                    <div class="block__item">
                        <p class="block__title">Фамилия <span class="error" v-show="surnameErrorSignUp">Ошибка</span>
                        </p>
                        <input type="text" placeholder="Фамилия" class="block__input" v-model="surnameSignUp">
                    </div>
                    <div class="block__item">
                        <p class="block__title">Имя <span class="error" v-show="nameErrorSignUp">Ошибка</span>
                        </p>
                        <input type="text" placeholder="Имя" class="block__input" v-model="nameSignUp">
                    </div>
                    <div class="block__item">
                        <p class="block__title">Отчетсво </p>
                        <input type="text" placeholder="Отчетсво (необязательное поле)" class="block__input"
                            v-model="fathernameSignUp">
                    </div>
                    <div class="block__item">
                        <p class="block__title">Номер телефона <span class="error"
                                v-show="phoneNumberErrorSignUp">Ошибка</span>
                        </p>
                        <input type="text" placeholder="+7-(***)-***-**-**" class="block__input"
                            v-model="phoneNumberSignUp">
                    </div>
                    <div class="block__item">
                        <p class="block__title">Дата рождения <span class="error" v-show="birthdayErrorSignUp">Ошибка</span>
                        </p>
                        <input type="date" placeholder="Дата рождения" class="block__input" v-model="birthdaySignUp">
                    </div>
                    <button class="block__button" @click="SignUp()">Зарегистрироваться</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue';
import { useStore } from 'vuex';
import vOrders from '@/components/v-orders.vue';
import axios from 'axios';

const store = useStore();

let user = {};

user = {
    name: 'Игорь',
    surname: 'Gorlov',
    fathername: 'Vitalevich',
    email: 'igorlov2604@gmail.com',
    phonenumber: '+79523096126',
    rating: 5.0.toFixed(1),
    cardid: 0,
};

let emailSignIn = '';
let passwordSignIn = '';

let emailSignUp = '';
let passwordSignUp = '';
let nameSignUp = '';
let surnameSignUp = '';
let fathernameSignUp = '';
let phoneNumberSignUp = '';
let birthdaySignUp = '';

const emailErrorSignIn = ref(false);
const passwordErrorSignIn = ref(false);

const emailErrorSignUp = ref(false);
const passwordErrorSignUp = ref(false);
const nameErrorSignUp = ref(false);
const surnameErrorSignUp = ref(false);
const phoneNumberErrorSignUp = ref(false);
const birthdayErrorSignUp = ref(false);

const orderArr = ref([]);
orderArr.value = [
    {
        id: 1,
        bookexemplarid: store.getters.getBookArr.slice(0, 3),
        userid: 1,
        orderdate: '20.02.2024'
    },
    {
        id: 2,
        bookexemplarid: store.getters.getBookArr.slice(3, 6),
        userid: 1,
        orderdate: '21.02.2024'
    }
];


async function getOrders (userId) {
    try {
        const url = `locahost:8080/library/orders?userid=${userId}`;
        const response = await axios.get(url);
        let orders = response.data;
        for (order of orders) {
            order.bookexemplarid = order.bookexemplarid.map((id) => getBookExemplar(id));
        }
    } catch (error) {
        console.error(error);
    }
}

async function getBookExemplar (bookExemplarId) {
    try {
        const url = `locahost:8080/library/bookex?id=${bookExemplarId}`;
        const response = await axios.get(url);
        let bookExemplar = response.data;
        bookExemplar.bookid = getBook(bookExemplar.bookid);
        return bookExemplar;
    } catch (error) {
        console.error(error);
    }
}

async function getBook (bookId) {
    try {
        const url = `locahost:8080/library/book?bookid=${bookId}`;
        const response = await axios.get(url);
        let book = response.data;
        book.publisherid = await getPublisher(book.publisherid);
        book.genreid = await getGenre(book.genreid);
        book.bookseriesid = await getBookSeries(book.bookseriesid);
        book.authors = await getAuthors(book.id);
        return book;
    } catch (error) {
        console.error(error);
    }
}

async function getPublisher (publisherId) {
    try {
        const url = `locahost:8080/library/publisher?publisherid=${publisherId}`;
        const response = await axios.get(url);
        let publisher = response.data;
        return publisher;
    } catch (error) {
        console.error(error);
    }
}

async function getGenre (genreId) {
    try {
        const url = `locahost:8080/library/genre?genreid=${genreId}`;
        const response = await axios.get(url);
        let genre = response.data;
        return genre;
    } catch (error) {
        console.error(error);
    }
}

async function getBookSeries (bookSeriesId) {
    try {
        const url = `locahost:8080/?bookseriesid=${bookSeriesId}`;
        const response = await axios.get(url);
        let bookSeries = response.data;
        return bookSeries;
    } catch (error) {
        console.error(error);
    }
}


async function getAuthors (bookTypeId) {
    try {
        const url = `locahost:8080/library/bookauthor?booktypeid=${bookTypeId}`;
        const response = await axios.get(url);
        let authors = response.data.authorid; // Массив id авторов
        authors = authors.map(authorId => getAuthorById(authorId));
        return authors;
    } catch (error) {
        console.error(error);
    }
}


async function getAuthorById (authorId) {
    try {
        const url = `locahost:8080/library/author?booktypeid=${authorId}`;
        const response = await axios.get(url);
        let author = response.data; // Вся инфа по автору
        return author;
    } catch (error) {
        console.error(error);
    }
}


const phoneFormat = (s, plus = true) => {
    const startsWith = plus ? '+7' : '8';

    let phone = s.replace(/[^0-9]/g, '');
    if (phone.startsWith('7') && plus) {
        phone = phone.substr(1);
    }
    if (phone.startsWith('8')) {
        phone = phone.substr(1);
    }

    return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `${startsWith}-($1)-$2-$3-$4`);
};

async function SignIn () {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailSignIn.match(pattern)) { emailErrorSignIn.value = true; return; }
    else { emailErrorSignIn.value = false; };

    if (!passwordSignIn) { passwordErrorSignIn.value = true; return; }
    else { passwordErrorSignIn.value = false; }


    try {
        let url = `locahost:8080/library/veruser?email=${emailSignIn}&password=${passwordSignIn}`;
        let response = await axios.get(url);
        user = response.data;
        store.state.userVerification = true;
        getOrders(user.id);
    } catch (error) {
        console.error(error);
        store.state.userVerification = false;
    }
}

function SignUp () {

    if (SignUpDataError()) return;

    axios.post({
        url: `locahost:8080/library/users`,
        data: {
            name: nameSignUp,
            surname: surnameSignUp,
            fathername: fathernameSignUp,
            phonenumber: phoneNumberSignUp,
            email: emailSignUp,
            password: passwordSignUp,
            birthday: birthdaySignUp,
            rating: 5,
            cardid: 0,
        }
    })
        .catch(function (error) {
            console.log(error);
        });
}

function SignUpDataError () {
    let error = false;
    let patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailSignUp.match(patternEmail)) { emailErrorSignUp.value = true; error = true; }
    else { emailErrorSignUp.value = false; };

    if (passwordSignUp.length < 5) { passwordErrorSignUp.value = true; error = true; }
    else { passwordErrorSignUp.value = false; }

    if (nameSignUp.length < 5) { nameErrorSignUp.value = true; error = true; }
    else { nameErrorSignUp.value = false; }

    if (!surnameSignUp) { surnameErrorSignUp.value = true; error = true; }
    else { nameErrorSignUp.value = false; }

    if (!phoneNumberSignUp) { phoneNumberErrorSignUp.value = true; error = true; }
    else { phoneNumberErrorSignUp.value = false; }

    if (!birthdaySignUp) { birthdayErrorSignUp.value = true; error = true; }
    else { birthdayErrorSignUp.value = false; }

    return error;
}



</script>

<style lang="css" scoped>
@font-face {
    font-family: 'Plovdiv Display';
    src: url('@/assets/fonts/PlovdivDisplay.otf');
}

.content__container {
    margin-top: 100px;
    min-height: calc(100vh - 160px - 276px + 60px);
    margin-bottom: 60px;
}


.line {
    height: 100%;
    width: 1px;
    background: rgba(0, 0, 0, 0.1);
}

.personal {
    display: flex;
    align-items: center;
}

.personal__avatar {
    border: 1px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.05)
}

.personal__info {
    font-size: 14px;
    display: flex;
    gap: 40px;
    margin-left: 40px;
}

.personal__info>ul {
    display: flex;
    flex-direction: column;
    gap: 16px
}

.personal__info li {
    font-size: 16px;
}


.personal__rating {
    margin-left: auto;
    font-size: 48px;
    display: flex;
    align-items: center;
}

.personal__rating>p {
    font-family: 'Plovdiv Display';
}

.rating__data {
    margin-left: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 30%;
    background-color: #32ff2b;
}

.verification__wrapper {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
}

.verification__block {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.block__type {
    font-size: 30px;
    font-size: bold;
    margin-bottom: 50px;
}

.block__item {
    width: 50%;
    margin-bottom: 15px;
}

.block__title {
    margin-bottom: 5px;
    display: flex;
}

.error {
    display: inline-block;
    color: red;
    margin-left: auto;
}

.block__input {
    width: 100%;
    padding: 5px;
    padding-left: 15px;
    border-radius: 15px;
    box-sizing: border-box;
}

.block__input::placeholder {}

.block__button {
    background: rgba(255, 145, 0, 0.137);
    padding: 10px;
    width: 200px;
    font-weight: bold;
    border-radius: 20px;
}
</style>