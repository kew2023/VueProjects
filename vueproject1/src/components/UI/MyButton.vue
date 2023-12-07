<template lang="">
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'MyButton'
};
</script>
<style scoped>
.btn {
    margin: 0 5px;
    width: auto;
    color: teal;
    padding: 15px;
    border: 1px solid teal
}
</style>