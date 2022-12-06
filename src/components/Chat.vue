<template>

   <h1 class="text-center">Chats</h1>

   <v-card
   v-for="m of messages "
   :key="m.id"
   width="300"
   :subtitle="m.displayName"
   :text="m.text"
   :color="m.uid == userChat.uid ? 'blue-grey' : 'green darken-4' "
   class="mb-3 "
    :class=" m.uid == userChat.uid && 'ml-auto' "   
   
   />
   
<!-- :class=" m.uid == userChat.uid ? 'ml-auto' : '' "
  === 
:class=" m.uid == userChat.uid && 'ml-auto' "    -->
      
</template>

<script setup>
import {ref} from "vue";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";

const userChat = ref( auth.currentUser);

const messages = ref ([]);


const q = query(collection(db, "chats"),orderBy("time"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        //console.log("Message: ", change.doc.id ,change.doc.data());
        messages.value.push({
          id: change.doc.id,
          ... change.doc.data()
        });   


    }
    // if (change.type === "modified") {
    //     console.log("Modified city: ", change.doc.data());
    // }
    // if (change.type === "removed") {
    //     console.log("Removed city: ", change.doc.data());
    // }
  });
});

</script>