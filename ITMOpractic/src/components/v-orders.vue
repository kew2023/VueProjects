<template>
    <section class="orders">
        <p class="orders__title">Заказы</p>
        <div class="order">
            <div class="order__date">
                <ul>
                    <li>Дата создания</li>
                    <li>Дата сдачи</li>
                </ul>

                <ul>
                    <li>09.09.2021</li>
                    <li>10.09.2021</li>
                </ul>
            </div>
            <BookList></BookList>
        </div>
    </section>
</template>

<script setup>
import BookList from '@/components/v-bookList.vue';

</script>

<style lang="css" scoped>
.order__date {
    display: flex;
}
</style>