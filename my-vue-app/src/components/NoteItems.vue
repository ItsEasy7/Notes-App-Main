<template>
<div class="body">
  <my-dialog style="animation: forwards 1s" v-model:show="edit" v-if="edit">
    <my-input
        style="align-self: flex-end"
        type="text"
        :value="valueLocal"
        @blur="valueLocal = $event.target.value; edit = true; $emit('input', valueLocal);"
    />
  </my-dialog>
    <p v-else @click="edit = true;">
      {{valueLocal}}
    </p>
</div>
  <my-button
      v-show="!edit"
    @click="$emit('remove', note);"
    style="flex-direction: column"
>Удалить</my-button>
  <my-button
      v-show="!edit"
      :value="valueLocal"
      @click="valueLocal = $event.target.value; edit = true; $emit('input', valueLocal); dialogShow = false;"
  >Редактировать
  </my-button>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
import MyDialog from "./UI/MyDialog.vue";
export default {
  components: {MyDialog, MyButton},
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      edit: false,
      valueLocal: this.note.body,
      dialogShow: false,
    }
  },

  watch: {
    value: function() {
      this.valueLocal = this.note.body;
    }
  },
}
</script>

<style scoped>

</style>