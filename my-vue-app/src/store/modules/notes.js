export default {
    state: {
        notes: []
    },
    mutations: {
        STATE_ADD_TODO(state, note) {
            state.notes.push(note);
        },
        STATE_REMOVE_TODO(state, index) {
            arr.splice(index, 1);
        }
    },
    actions: {
        ADD_TODO(context, note) {
            context.commit('STATE_ADD_TODO', note);
        },
        REMOVE_TODO(context, index) {
            context.commit('STATE_REMOVE_TODO', index);
        }
    },
    getters: {
        notes: state => state.notes
    }
}