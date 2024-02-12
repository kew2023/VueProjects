<template>
    <div class='main__container'>
        <div class="main__line"></div>
        <div class="main__title" @click="() => { reviews.length = 0; countReviews = 0 }">Редактировать профиль
        </div>

        <div class="list__el">
            <div class="input">
                <div class="input__title">Никнейм</div>
                <input type="text" class="main__input" v-model="user.name">
            </div>

            <div class="input">
                <div class="input__title">Описание</div>
                <input type="text" class="main__input" v-model="user.discription">
            </div>
        </div>

        <div class="main__button_complete" @click="editProfile">
            Применить
        </div>

    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const user = {
    name: '',
    discription: ''
};

const editProfile = () => {
    store.commit('setUserName', user.name);
    store.commit('setUserDiscription', user.discription);
    console.log(store.state.user);
};


store;
</script>

<style lang="css" scoped>
.main__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 60px;
}

.list__el {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
}

.el {
    border: 1px;
    border-radius: 1vw;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 20vw;
    height: 5vw;
    background-color: #202020;
    color: #a5a5a5;
    font-size: 30px;
}

.main__line {
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    border-radius: 1px;
    opacity: 0.2;
    background: var(--tx, #7D7781);
}

.main__title {
    color: #FFF;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 40px;
}

.input {
    width: 100%;
}

.input__title {
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 10px;
}

.main__input {
    width: 50%;
    border: 1px;
    background-color: #363636;
    height: 30px;
    text-decoration: none;
    color: #FFF;
}

.main__input:focus {
    outline: none;
    box-shadow: none;
}

.main__button_complete {
    display: inline-flex;
    padding: 23px 30px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #FF9839;
    color: var(--ffffff, #FFF);
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
}

@media (max-width: 1919px) {

    .main__container {
        margin-left: 20px;
    }

    .list__el {
        grid-template-columns: repeat(2, 1fr);
    }

    .main__title {
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

}

@media (max-width: 1279px) {
    .main__title {
        margin-top: 0px;
    }

    .main__line {
        width: 77vw;
        position: absolute;
        left: 11.5%;
        top: 155px;
    }
}

@media (max-width: 1023px) {
    .main__container {
        margin-left: 0;
    }

    .list__el {
        grid-template-columns: repeat(1, 1fr);
    }

    .el {
        width: 25vw;
        height: 25vw;
    }

    .main__line {
        width: 90%;
        top: 280px;
        left: 5%
    }

    .main__input {
        width: 100%;
        border: 1px;
        background-color: #363636;
        height: 50px;
    }
}

@media (max-width: 520px) {
    .main__line {
        width: 90%;
        top: 255px;
        left: 5%
    }
}
</style>