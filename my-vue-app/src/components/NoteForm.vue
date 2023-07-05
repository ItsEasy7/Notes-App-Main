<template>
  <form class="form" @submit.prevent>
    <h1>Введите текст</h1>
    <my-input
        v-model="note.body"
        type="text"
        placeholder="Заметка"
    />
    <my-button
        style="margin-top: 4.4px"
        @click="createNote; addNote()"
    >Добавить
    </my-button>
  </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";

export default {
  components: {MyButton, MyInput},
  data() {
    return {
      note: {
      title: '',
      body: ''
      }
    }
  },
  methods: {
    addNote() {
      this.$store.dispatch('ADD_TODO', this.note)
      this.note = '';
    },
    createNote() {
      this.note.id = Date.now();
      this.$emit('create', this.note)
      this.note = {
        title: '',
        body: ''
      }
    },
  }
}

</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}

</style>