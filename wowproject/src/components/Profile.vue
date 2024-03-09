<template lang="html5">
    <div class="profile" >
        <div class="profile__wrapper" @click.prevent = "showMenu">
            <div class="profile__header" >
                <router-link to='/profile'>
                    <img class="profile__icon" src="../assets/icon.png" alt="Икон">
                </router-link>
                <div class="profile__info">
                    <p class="profile__name">{{props.user.name}}</p>
                    <p class="profile__status" :class="{ 'online': online, 'offline': !online }" @click="online = !online; n = (n+1)%2 ">{{statusText[n]}}</p>
                </div>
            </div>
            <p class="profile__description">{{props.user.description}}</p>
            <i class="fa-solid fa-chevron-down profile__arrow" style="color:#7D7781; font-size: 18px;"></i>
        </div>
        <div class="linebreak"></div>
        <div class="profile__register" v-if="showMode">
            <div class="register__info">
                <span>Регистрация: </span><span>Месяц назад</span>
            </div>
            <p class="register__date">25 ноября 2022, в 11:33</p>
        </div>
        <nav class ="profile__nav" v-if="showMode">
            <router-link to='/transactions' active-class="active" class="nav__item" id="nav1" >Сделки</router-link>
            <router-link to='/ads' active-class="active" class="nav__item" id="nav2" >Объявления</router-link>
            <router-link to='/reviews' active-class="active" class="nav__item" id="nav3" >Отзывы</router-link>
            <router-link to='/profile' active-class="active" class="nav__item" id="nav4" >Редактировать <span>профиль</span></router-link>
            <router-link to='/exit' active-class="active" class="nav__item exit" id="nav5" > Выйти</router-link>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let online = ref(true);
let n = 0;
const statusText = ['Онлайн', 'Офлайн'];
let showMode = ref(true);

const props = defineProps(['user']);

function showMenu () {

    if (window.innerWidth < 1024) showMode.value = !showMode.value;
    else showMode.value = true;
}


</script>

<style scoped>
.profile {
    height: 100%;
    padding: 25px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

.profile__header {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: default;
}

.profile__icon {
    width: 34.426px;
    height: 34.426px;
    padding: 17.79px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

.profile__info {
    margin-left: 15px;
}

.profile__name {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
}

.profile__arrow {
    display: none;
}

.profile__status {
    font-size: 12px;
    font-weight: 500;
}

.online,
.online::before {
    color: #29C226
}

.online::before {
    content: '';
    display: inline-block;
    margin-bottom: 2px;
    width: 5px;
    height: 5px;
    -moz-border-radius: 2.5px;
    -webkit-border-radius: 2.5px;
    border-radius: 2.5px;
    color: #29C226;
    background-color: #29C226;
    margin-right: 10px;
    box-shadow: 0px 0px 5px 4px rgba(41, 194, 38, 0.20);
}


.offline {
    color: #b42d2d;
}

.offline::before {
    margin-bottom: 2px;
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    -moz-border-radius: 2.5px;
    -webkit-border-radius: 2.5px;
    border-radius: 2.5px;
    color: #b42d2d;
    background-color: #b42d2d;
    margin-right: 10px;
    box-shadow: 0px 0px 5px 4px rgba(194, 38, 38, 0.2);
}

.profile__description {
    color: #7D7781;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
}

.profile__register {
    width: 95%;
    border-radius: 15px;
    background: rgba(14, 9, 19, 0.50);
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 15px;
}

.register__info {
    display: block;
    color: #7D7781;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 26px;
}

.register__date {
    display: block;
    color: #FFF;
    font-size: 14px;
    font-weight: 500;
    line-height: 26px;
}

nav {
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.nav__item {
    display: flex;
    align-items: center;
    width: 270px;
    height: 60px;
    margin-bottom: 0px;
    padding-left: 15px;
    text-decoration-line: none;

    color: #7D7781;
    font-size: 16px;
    font-weight: 500;
}


.nav__item::before {
    margin-right: 15px;
}

.nav__item span {
    display: inline-block;
    margin-left: 8px;
}

nav>.active {
    color: #FFFFFF;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

#nav1::before {
    content: url("../assets/icon_nav_1.svg");
}

#nav2::before {
    content: url("../assets/icon_nav_2.svg");
}

#nav3::before {
    content: url("../assets/icon_nav_3.svg");
}

#nav4::before {
    content: url("../assets/icon_nav_4.svg");
}

#nav5::before {
    content: url("../assets/icon_nav_5.svg");
}

.exit {
    color: #FA3939;
}

@media (max-width: 1919px) {

    .profile {
        padding: 20px;
    }

    .profile__icon {
        width: 24.59px;
        height: 24.59px;
        padding: 12.71px;
        border-radius: 15px;
    }

    .profile__info {
        margin-left: 15px;
        padding-top: 12px;
        padding-bottom: 12px;

    }

    .profile__name {
        font-size: 14px;
    }

    .profile__status {
        font-size: 12px;
    }


    .profile__description {
        font-size: 12px;
    }

    .profile__register {
        margin-bottom: 15px;
    }

    .register__info {
        font-size: 12px;
    }

    .register__info span {
        display: block;
    }

    .register__date {
        font-size: 14px;
    }

    .nav__item {
        width: 220px;
        height: 48px;
        padding-left: 15px;
        font-size: 14px;
    }
}

@media (max-width: 1279px) {
    .profile {
        max-width: 190px;
    }

    .profile__info {
        margin-left: 10px;
    }

    .profile__register {
        padding-top: 10px;
        padding-left: 15px;
        padding-bottom: 10px;
    }

    .register__date {
        font-size: 14px;
    }

    .nav__item {
        width: 160px;
    }

    .nav__item span {
        display: none;
    }
}

@media (max-width: 1023px) {
    .profile {
        max-width: none;
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: space-between;
        margin-bottom: 20px;
        flex-wrap: wrap;
    }

    .profile__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .profile__header {
        margin-bottom: 0px;
    }

    .profile__info {
        padding-bottom: 4px;
        padding-top: 4px;
    }

    .profile__description {
        margin-bottom: 0px;
        word-wrap: break-word;
    }

    .profile__arrow {
        display: block;
    }


    .profile__register,
    .profile__nav,
    .profile .linebreak {
        width: 100%;
    }

    .nav__item {
        width: 97%;
    }
}
</style>