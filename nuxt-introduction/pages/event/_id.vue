<template>
    <h1> {{ event.title }} </h1>
</template>

<script>
    import EventService from '../../services/EventService';
    export default {
        async asyncData({ error , params }){
            try {
                const { data } = await EventService.getEvent(params.id);
                return {
                    event : data
                }
            } catch(err) {
                error({ statusCode: 503 , message: `we cant fetch user#${params.id} Data` })
            }
        }
    }
</script>