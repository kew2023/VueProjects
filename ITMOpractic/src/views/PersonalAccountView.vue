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
                    <li>{{ phoneFormat(user.phone) }}</li>
                </ul>

            </div>
            <div class="personal__rating">
                <p>Ваш рейтинг</p>
                <p class="rating__data">{{ user.rating }}</p>
            </div>

        </section>
        <vOrders></vOrders>
    </main>
    <main class="content__container verification__container" v-else>
        <div class="verification">
            <div class="verification__wrapper">
                <div class="verification__block sign_in">
                    <p class="block__type">Вход</p>
                    <div class="block__item">
                        <p class="block__title">email</p>
                        <input type="text" class="block__input">
                    </div>
                    <div class="block__item">
                        <p class="block__title">password</p>
                        <input type="text" class="block__input">
                    </div>
                    <button class="block__button">Войти</button>
                </div>
                <div class="verification__block sign__up">
                    <p class="block__type">Регистрация</p>
                    <div class="block__item">
                        <p class="block__title">email</p>
                        <input type="text" class="block__input">
                    </div>
                    <div class="block__item">
                        <p class="block__title">password</p>
                        <input type="text" class="block__input">
                    </div>
                    <button class="block__button">Зарегистрироваться</button>
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
const userVerification = ref();
userVerification.value = true;

user = {
    name: 'Игорь',
    surname: 'Gorlov',
    fathername: 'Vitalevich',
    email: 'igorlov2604@gmail.com',
    phone: '+79523096126',
    rating: 5.0.toFixed(1)
};

const orderArr = ref([]);

async function getUser (password, email) {
    try {
        const url = `locahost:8080/?password=${password}&email=${email}`;
        const response = await axios.get(url);
        user = response.data;
        userVerification.value = true;
    } catch (error) {
        console.error(error);
        userVerification.value = false;
    }
}

async function getOrders (userId) {
    try {
        const url = `locahost:8080/?userid=${userId}`;
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
        const url = `locahost:8080/?bookexemplarid=${bookExemplarId}`;
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
        const url = `locahost:8080/?bookid=${bookId}`;
        const response = await axios.get(url);
        let book = response.data;
        book.publisherid = await getPublisher(book.publisherid);
        book.genreid = await getGenre(book.genreid);
        book.booktypeid = await getBookType(book.booktypeid);
        book.authors = await getAuthors(book.id);
        return book;
    } catch (error) {
        console.error(error);
    }
}

async function getPublisher (publisherId) {
    try {
        const url = `locahost:8080/?publisherid=${publisherId}`;
        const response = await axios.get(url);
        let publisher = response.data;
        return publisher;
    } catch (error) {
        console.error(error);
    }
}

async function getGenre (genreId) {
    try {
        const url = `locahost:8080/?genreid=${genreId}`;
        const response = await axios.get(url);
        let genre = response.data;
        return genre;
    } catch (error) {
        console.error(error);
    }
}

async function getBookType (bookTypeId) {
    try {
        const url = `locahost:8080/?booktypeid=${bookTypeId}`;
        const response = await axios.get(url);
        let bookType = response.data;
        return bookType;
    } catch (error) {
        console.error(error);
    }
}


async function getAuthors (bookTypeId) {
    try {
        const url = `locahost:8080/?booktypeid=${bookTypeId}`;
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
        const url = `locahost:8080/?booktypeid=${authorId}`;
        const response = await axios.get(url);
        let author = response.data; // Вся инфа по автору
        return authors;
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

</script>

<style lang="css" scoped>
@font-face {
    font-family: 'Plovdiv Display';
    src: url('@/assets/fonts/PlovdivDisplay.otf');
}

.content__container {
    margin-top: 100px;
}

.verification__container {
    height: calc(100vh - 160px - 276px + 60px);
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
    grid-template-columns: 1fr 1fr;
}

.verification__block {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>