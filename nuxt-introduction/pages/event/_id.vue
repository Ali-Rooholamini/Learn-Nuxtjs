<template>
    <h1> {{ event.title }} </h1>
</template>

<script>
    export default {
        async asyncData({ $axios , error , params }){
            try {
                const { data } = await $axios.get("http://localhost:3000/events/" + params.id);
                return {
                    event : data
                }
            } catch(err) {
                error({ statusCode: 503 , message: `we cant fetch user#${params.id} Data` })
            }
        }
    }
</script>