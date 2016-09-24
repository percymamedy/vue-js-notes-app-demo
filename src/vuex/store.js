import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// The Root initial state object.
const state = {
    notes: [],
    activeNote: {}
};

// Define the possible mutations that can be applied to our state
const mutations = {
    /**
     * Add a note.
     *
     * @param state
     * @constructor
     */
    ADD_NOTE (state) {
        const newNote = {
            text: 'New note',
            favorite: false
        };

        // Only mutators can mutate the state
        state.notes.push(newNote);
        state.activeNote = newNote;
    },

    /**
     * Edit a note.
     *
     * @param state
     * @param text
     * @constructor
     */
    EDIT_NOTE (state, text) {
        state.activeNote.text = text;
    },

    /**
     * Delete a note.
     *
     * @param state
     * @constructor
     */
    DELETE_NOTE (state) {
        state.notes.$remove(state.activeNote);
        state.activeNote = state.notes[0];
    },

    /**
     * Toggle favorite on note.
     *
     * @param state
     * @constructor
     */
    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite;
    },

    /**
     * Set a note to active.
     *
     * @param state
     * @param note
     * @constructor
     */
    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note;
    }
};

// Create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
    state,
    mutations
});