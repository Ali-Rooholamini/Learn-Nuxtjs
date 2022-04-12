<template>
  <div>
    <h1> Events </h1>
    <EventCard v-for="(event , index) in events" :key="index" :event="event" :data-index="index"/>
  </div>
</template>

<script>
  import EventCard from '../components/EventCard.vue'
  export default {
    asyncData({ $axios , error }){
      return $axios.get("http://localhost:3000/events")
        .then(res => { return { events : res.data } })
        .catch(err => { error({ statusCode : 503 , message : "we cant fetch request to api. please try again later" }) });
    },
    components : {
      EventCard
    }
  }

</script>