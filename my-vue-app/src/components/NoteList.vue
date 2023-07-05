<template>
  <div>
    <div v-if="notes.length > 0">
    <h3>Список заметок</h3>
    <note-items
        :note="note"
        v-bind:key="note.id"
        v-for="note in notes"
        @remove="$emit('remove',note)"
    />
  </div>
    <h2 v-else style="color: gray">
      Тут пусто
    </h2>
  </div>
</template>

<script>
import NoteItems from "./NoteItems.vue";
export default {
  components: {NoteItems},
  props:{
    notes:{
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>


</style>