<template>
  <div>
    <h1> Events </h1>
    <EventCard v-for="(event , index) in events" :key="index" :event="event" :data-index="index"/>
  </div>
</template>

<script>
  import EventCard from '../components/EventCard.vue'
  import EventService from '../services/EventService'
  export default {
    async asyncData({ error }){
      try {
        const { data } = await EventService.getEvents();
        return{
          events : data
        }
      } catch(err) {
        error({statusCode: 503 , message: "we cant fetch request to api. please try again later" })
      }

      // session 6 - send request to api promise base with then
      // return $axios.get("http://localhost:3000/events")
      //   .then(res => { return { events : res.data } })
      //   .catch(err => { error({ statusCode : 503 , message : "we cant fetch request to api. please try again later" }) });
    },
    components : {
      EventCard
    }
  }

</script>