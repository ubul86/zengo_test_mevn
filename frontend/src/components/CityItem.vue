<template>
  <div>
    <template v-if="isEditing">
      <v-text-field v-model="editedName" />
      <v-btn @click="onUpdate">Modify</v-btn>
      <v-btn @click="onCancel">Cancel</v-btn>
      <v-btn icon @click="onDelete">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <span @click="startEdit">{{ city.name }}</span>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
  isEditing: {
    type: Boolean,
    required: true,
  },
  editedCityId: {
    type: String,
    default: null,
  }
});

const emit = defineEmits(['updateCity', 'deleteCity', 'editCity', 'cancelEdit']);

const editedName = ref(props.city.name);

watch(() => props.city.name, (newName) => {
  editedName.value = newName;
});

function startEdit() {
  emit('editCity', props.city.id, editedName.value);
}

function onUpdate() {
  emit('updateCity', props.city.id, editedName.value);
}

function onDelete() {
  emit('deleteCity', props.city.id);
}

function onCancel() {
  emit('cancelEdit');
}
</script>