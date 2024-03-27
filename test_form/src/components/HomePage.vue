<template>
    <div>
        <button @click="showPopup = true">Начать</button>

        <div v-if="showPopup" class="popup-overlay" @click.prevent.self="closePopup">
            <div class="popup">
                <span class="popup-close" @click="closePopup">&times;</span>
                <h2>Введите данные:</h2>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="field1">Поле 1:</label>
                        <input type="text" id="field1" v-model="formData.field1">
                    </div>
                    <div class="form-group">
                        <label for="field2">Поле 2:</label>
                        <input type="text" id="field2" v-model="formData.field2">
                    </div>
                    <div class="form-group">
                        <label for="field3">Поле 3:</label>
                        <input type="text" id="field3" v-model="formData.field3">
                    </div>
                    <div class="form-group">
                        <label for="field4">Поле 4:</label>
                        <input type="text" id="field4" v-model="formData.field4">
                    </div>
                    <div class="form-group">
                        <label for="field5">Поле 5:</label>
                        <input type="text" id="field5" v-model="formData.field5">
                    </div>
                    <button type="submit" @click="submitForm">Отправить</button>
                </form>
            </div>
        </div>

        <div v-if="submittedFormData">
            <h2>Данные:</h2>
            <pre>{{ submittedFormData }}</pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data () {
        return {
            showPopup: false,
            formData: {
                field1: '',
                field2: '',
                field3: '',
                field4: '',
                field5: ''
            },
            submittedFormData: null
        };
    },
    methods: {
        closePopup () {
            this.showPopup = false;
        },
        submitForm () {
            this.submittedFormData = { ...this.formData };
            this.closePopup();
        }
    }
};
</script>

<style scoped>
.popup-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.popup {
    background-color: white;
    max-width: 500px;
    padding: 20px;
    border-radius: 8px;
    position: relative;
}

.popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input {
    width: calc(50% - 10px);
    margin-right: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.form-group input:last-child {
    margin-right: 0;
}

button[type="submit"] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 0;
    cursor: pointer;
}
</style>