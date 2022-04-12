<template>

    <div>
        <h1> {{ statusCode }} </h1>
        <h2> {{ message }} </h2>
        <nuxt-link to="/" v-if="statusCode === 404"> Return to main Page </nuxt-link>
        <h3 v-else> Something wrong Happend  </h3>
    </div>

</template>

<script>
    export default {
        props : {
            error : {
                type : Object,
                default : null
            }
        },
        computed : {
            statusCode(){
                return (this.error && this.error.statusCode) || 500
            },
            message(){
                return this.error.message;
            }
        }
    }
</script>

<style>

</style>