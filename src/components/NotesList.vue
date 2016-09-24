<template>
    <div id="notes-list">

        <div id="list-header">
            <h2>Notes</h2>

            <div class="btn-group btn-group-justified" role="group">
                <!-- All Notes button -->
                <div class="btn-group" role="group">
                    <button type="button"
                            class="btn btn-default"
                            @click="toggleAll"
                            :class="{active: show === 'all'}">
                        All Notes
                    </button>
                </div>

                <!-- Favorites Button -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default"
                            @click="toggleFavorites"
                            :class="{active: show === 'favorites'}">
                        Favorites
                    </button>
                </div>
            </div>
            <!--/.btn-group-->
        </div>
        <!--#list-header-->

        <!-- render notes in a list -->
        <div class="container">
            <div class="list-group" v-if="notes.length > 0">
                <a v-for="note in filteredNotes"
                   class="list-group-item" href="javascript:;"
                   :class="{active: activeNote === note}"
                   @click="updateActiveNote(note)">
                    <h4 class="list-group-item-heading">
                        {{note.text.trim().substring(0, 30)}}
                    </h4>
                </a>
            </div>
            <!--/.list-group-->
            <p class="text-center" v-else>
                You don't have notes yet ! Click the add button to create a new note.
            </p>
        </div>
    </div>
    <!--/#notes-list-->
</template>

<script>
    import { updateActiveNote } from '../vuex/actions';

    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote,
                notes: state => state.notes
            },

            actions: {
                updateActiveNote
            }
        },

        data() {
            return {
                show: 'all',
                tmpActiveNote: null
            }
        },

        methods: {
            toggleFavorites() {
                this.show = 'favorites';
                if(this.getOnlyFavoriteNotes().length == 0) {
                    this.tmpActiveNote = this.activeNote;
                    this.updateActiveNote(null);
                }
            },

            toggleAll() {
                this.show = 'all';
                if(this.tmpActiveNote) {
                    this.updateActiveNote(this.tmpActiveNote);
                    this.tmpActiveNote = null;
                }
            },

            getAllNotes() {
                return this.notes;
            },

            getOnlyFavoriteNotes() {
                return this.notes.filter(note => note.favorite);
            }
        },

        computed: {
            filteredNotes () {
                if(this.show == 'all') {
                    return this.getAllNotes();
                } else if (this.show === 'favorites') {
                    return this.getOnlyFavoriteNotes();
                }
            }
        }
    }
</script>
