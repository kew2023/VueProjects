<template land="html">
    <div v-for="review of props.reviews" :key="review.id" class="main__review" @click="showReview = review.id">
        <img src="../assets/icon.png" alt="" class="review__logo">
        <div class="review__info">
            <div class="review__top">
                <p class="review__userName">Пользователь{{ review.id }}</p>
                <p class="review__type">World of Warcraft, {{ review.price }} ₸</p>
                <div class="linebreak"></div>
                <div class="review__rating">
                    <p class="rating__text">Этот месяц</p>
                    <img src="../assets/stars.png" alt="" class="review__rating_score">
                </div>

            </div>
            <div class="review__disctiption">
                {{ getThreeWords(review.body) }} ...
            </div>


        </div>
    </div>
    <ReviewModal v-if="showReview > 0" :reviews="reviews" :showReview="showReview" @hideModal="hideModal" />
</template>
<script setup>
import ReviewModal from '@/components/V-ReviewModal.vue';
import { ref } from 'vue';

const props = defineProps(['reviews']);
const emits = defineEmits(['hideModal']);

async function hideModal () {
    showReview.value = -1;
}


const showReview = ref();
showReview.value = -1;

const getThreeWords = (s) => {
    return s.split(' ').slice(0, 3).join(' ');
}

</script>
<style lang="css" scoped>
.main__review {
    display: flex;
    min-height: 65px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    padding: 20px;
    margin-bottom: 10px;
}

.review__logo {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    padding: 15px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
}

.review__info {
    margin-left: 19px;
    width: 100%;
}

.review__top {
    width: 100%;
    display: flex;
    align-items: end;
    margin-bottom: 15px;
}

.review__userName {
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin-right: 20px;
}

.review__type {
    color: #FF9839;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}


.main__review .linebreak {
    display: none;
}

.review__rating {
    display: flex;
    align-items: end;
    margin-left: auto;
}

.rating__text {
    color: #7D7781;
    text-align: right;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 20px;
}

.review__rating_score {
    width: 112px;
    height: 16px;
    flex-shrink: 0;
}

.review__disctiption {
    color: #7D7781;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 175% */
}


@media (max-width: 1919px) {
    .review__userName {
        font-size: 16px;
    }

    .review__type {
        font-size: 12px;
    }

    .rating__text {
        font-size: 12px;
    }

    .review__disctiption {
        font-size: 14px;
    }
}

@media (max-width: 1279px) {

    .review__top {
        flex-wrap: wrap;
        align-items: center;
    }

    .review__userName {
        font-size: 16px;
    }

    .review__type {
        font-size: 12px;
    }

    .main__review .linebreak {
        display: block;
        width: 100%;
    }

    .review__rating {
        margin-top: 10px;
        margin-left: 0px;
    }

    .rating__text {
        font-size: 12px;
    }

    .review__disctiption {
        font-size: 14px;
    }

    .review__disctiption #text {
        font-size: 2px;
    }
}

@media (max-width: 1023px) {}
</style>