<template>
  <div>
    <h1> Event </h1>
    <EventCard v-for="(event , index) in events" :key="index" :event="event" :data-index="index"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import EventCard from '../components/EventCard.vue'

  export default {
    components : {
      EventCard
    },

    async fetch({ store , error }){
      try {
            await store.dispatch('events/fetchEvents');
      } catch(err) {
        error({statusCode: 503 , message: "we cant fetch request to api. please try again later" })
      }
    },

    // mapState check before Fetch Hook and in first Try its Return Empty Array!!
    computed : mapState({
      events : state => state.events.events
    })

    }

</script>