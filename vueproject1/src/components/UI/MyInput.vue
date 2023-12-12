<template>
    <input :value="value" @input="UpdateInput" class="input" type="text">
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        value: [String, Number],
    },
    methods: {
        UpdateInput (event) {
            this.$emit('update:value', event.target.value);
        }
    }
};
</script>

<style scoped>
.input {
    width: auto;
    border: 2px solid teal;
    padding: 15px 5px;
    margin: 5px;
}
</style>