<template>
  <div class="main">
    <h1>Страница с заметками</h1>
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >Создать заметку
      </my-button>
      <my-select
          v-model="selectedSort"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <note-form
          @create="createNote"
      />
    </my-dialog>
    <note-list
      v-bind:notes="notes"
      @remove="deleteTodo(index)"
      v-if="!isNoteLoading"
    />
    <div v-else style="margin-top: 10px">Идёт загрузка....</div>
  </div>
</template>

<script>
import NoteList from "./components/NoteList.vue";
import NoteForm from "./components/NoteForm.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from 'axios';
import MySelect from "./components/UI/MySelect.vue";
import { mapGetters } from 'vuex';
export default {
  components: {
    MySelect,
    MyButton,
    MyDialog,
    NoteForm, NoteList
  },
  data(){
    return {
      notes: {
        title: '',
        body: ''
      },
      dialogVisible: false,
      isNoteLoading: false,
      selectedSort: '',
      sortOptions:[
        {value: 'body', name: 'По содержанию'}
      ]
    }
  },
  methods: {
    deleteTodo(index){
      this.$store.dispatch('REMOVE_TODO', index);
    },
    showDialog(){
      this.dialogVisible = true;
    },
    async fetchNotes(){
      try{
        this.isNoteLoading = true;
        setTimeout(async() => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.notes = response.data;
          this.isNoteLoading = false;
        }, 1000)
      } catch (e) {
        alert('error')
      } finally {

      }
    }
  },
  computed: {
    ...mapGetters(['todos'])
  },
  mounted() {
    this.fetchNotes();
  },
}
</script>

<style>
</style>
