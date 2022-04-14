import EventService from "~/services/EventService";

export const state = () => ({
    events : [],
    event : {}
})

export const mutations = {
    SET_EVENTS(state , data){
        state.events = data
    },
    SET_EVENT(state , data){
        state.event = data
    }
}

export const actions = {
    fetchEvents({ commit }) {
        EventService.getEvents().then(response => {
            commit("SET_EVENTS" , response.data)
        })
    },
    fetchEvent({ commit } , id) {
        EventService.getEvent(id).then(response => {
            commit("SET_EVENT" , response.data)
        })
    }
}