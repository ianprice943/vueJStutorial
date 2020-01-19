<template>
    <ul>
        <li v-for="(ninja, index) in ninjas" v-bind:key="index">{{ ninja }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            ninjas: ['Yoshi', 'Mario', 'Ryu']
        }
    }
}
</script>

<style scoped>

</style>