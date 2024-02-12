<template>
    <div class="container">
        <Header v-model:userInfo="userInfo">
        </Header>

        <main>
            <Profile></Profile>
            <router-view />

        </main>
        <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />-->
    </div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    line-height: normal;
    word-wrap: normal;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 130px;

    background: repeat-y url("./assets/sparks.png") #120C17;

}

main {
    display: flex;
}

.container {
    width: 77%;
    margin: 0 auto;

}

@media (max-width: 1919px) {
    #app {
        padding-top: 112px;

    }
}

@media (max-width: 1279px) {
    #app {
        padding-top: 95px;

    }
}

@media (max-width: 1023px) {
    #app {
        padding-top: 145px;

    }

    main {
        width: 100%;
        display: block;
        margin: auto;
    }

    .container {
        margin: 0 auto;
        padding: 20px;
        width: 90%;
    }
}
</style>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";

const userInfo = ref({
    rating: 0,
    reviews: 0,
    sales: 0,
    buy: 0,
});

</script>