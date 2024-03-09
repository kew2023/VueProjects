<template>
    <section class="orders">
        <p class="orders__title">Заказы</p>
        <div class="order" v-for="order in props.orders" :key="order.id">
            <div class="order__date">
                <ul>
                    <li>Дата создания</li>
                    <li>Дата сдачи</li>
                </ul>

                <ul>
                    <li>{{ order.orderdate }}</li>
                    <li>{{ order.orderdate }}</li>
                </ul>
            </div>
            <BookList :booksArr="order.bookexemplarid" :exampl="true"></BookList>
        </div>
    </section>
</template>

<script setup>
import BookList from '@/components/v-bookList.vue';

// eslint-disable-next-line
const props = defineProps(['orders']);
</script>

<style lang="css" scoped>
.orders__title {
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}

.order {
    background: #e0e0e0;
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 30px;
}

.order__date {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
}

.order__date li {
    font-size: 20px;
    font-weight: 500;
}
</style>