<template>
    <div id="note-editor">
        <textarea v-if="notes.length > 0 && activeNote"
                  :value="activeNote.text"
                  @input="editNote"
                  class="form-control"
                  v-focus="activeNote">
        </textarea>
    </div>
    <!--#note-editor-->
</template>

<script>
    import { editNote } from '../vuex/actions';
    import focusDirective from '../directives/focus';

    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote,
                notes: state => state.notes
            },

            actions: {
                editNote
            }
        },

        directives: {
            focus: focusDirective
        }
    }
</script>
