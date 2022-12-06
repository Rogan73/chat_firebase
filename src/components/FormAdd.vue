<template>
<v-form class="w-100" @submit.prevent="sendMessage">
          <v-text-field
            v-model="message"
            :counter="50"
            label="Ingrese mensaje aqui"
            required
            color="success"
            variant="outlined"
            append-inner-icon="mdi-send"
            @click:append-inner="sendMessage"
          />
</v-form>
</template>

<script setup>
import {ref} from "vue"
import {auth, db} from "../firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 



const message = ref('');

const sendMessage = async () => {

  try {
  
   await addDoc(collection(db,'chats'),{
        text: message.value,
        time: Date.now(),
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName
   });

  message.value = "";
  } catch (error) {
  console.log("error: ", error);  
  }
  
  
};


</script>