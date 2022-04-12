<template>
    <div class="card">
        <nuxt-link :to="'/event/'+event.id"><h1>{{ event.title }}</h1></nuxt-link>
        <h3> @{{ event.time }} on {{ parseDate }} </h3>
        <span>{{ event.attendees.length }}</span>
    </div>
</template>

<script>
export default {
    props : {
        event : Object
    },
    computed : {
        parseDate(){
            const eventDate = new Date(this.event.date);
            return eventDate.toDateString();
        }
    }
}
</script>

<style scoped>
    .card{
        border: 4px solid pink;
        border-radius: 3px;
        padding: 10px;
        margin-bottom: 20px;
    }
    .card h1{
        width: 100%;
        text-align: center;
    }
    .card h3{
        width: 100%;
        text-align: center;
    }
    .card span{
        width: 100%;
        display: block;
        text-align: left;
    }
</style>