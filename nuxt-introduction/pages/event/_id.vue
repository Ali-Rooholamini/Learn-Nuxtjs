<template>
    <h1> {{ event.title }} </h1>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        async fetch({ error , params , store }){
            try {
                await store.dispatch("events/fetchEvent" , params.id)
            } catch(err) {
                error({ statusCode: 503 , message: `we cant fetch user#${params.id} Data` })
            }
        },

        // mapState check before Fetch Hook and in first Try its Return Empty Array!!
        computed : mapState({
            event : state => state.events.event
        })

    }


</script>