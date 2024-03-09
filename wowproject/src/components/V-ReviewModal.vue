<template>
    <div class="modal" @click.self="$emit('hideModal')">
        <div class="content">
            <img src="../assets/icon.png" alt="" class="review__logo">
            <div class="review__info">
                <div class="review__top">
                    <p class="review__userName">Пользователь{{ selectedReview.id }}</p>
                    <p class="review__type">World of Warcraft, {{ selectedReview.price }} ₸</p>
                    <div class="linebreak"></div>
                    <div class="review__rating">
                        <p class="rating__text">Этот месяц</p>
                        <img src="../assets/stars.png" alt="" class="review__rating_score">
                    </div>

                </div>
                <p class="review__disctiption">
                    {{ selectedReview.body }}
                </p>
            </div>

        </div>
    </div>
</template>

<script setup>

const props = defineProps(['showReview', 'reviews']);
const emits = defineEmits(['hideModal']);


let selectedReview = {};
for (let review of props.reviews) {
    if (review.id == props.showReview) selectedReview = review;
}

</script>

<style lang="css" scoped>
.modal .linebreak {
    display: none;
}

.modal {
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    background: rgba(24, 24, 24, 0.5);
    align-items: center;
}

.content {
    max-width: 90vw;
    margin: auto;
    display: flex;
    min-height: 120px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.02);
    background: rgba(0, 0, 0, 0.877);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px);
    padding: 20px;
    align-items: center;
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
    font-size: 18px;
    font-weight: 500;

    margin-right: 20px;
}

.review__type {
    color: #FF9839;
    font-size: 14px;
    font-weight: 500;
}

.review__rating {
    display: flex;
    align-items: end;
    margin-left: auto;
}

.rating__text {
    color: #7D7781;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    margin-right: 20px;
}

.review__rating_score {
    width: 112px;
    height: 16px;
    flex-shrink: 0;
}

.review__disctiption {
    color: #7D7781;
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    word-wrap: normal;
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

    .modal .linebreak {
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
