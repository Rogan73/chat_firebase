<template>
  <v-app>

    <!-- <div v-if="!userGoogle" >Loading ...</div> -->

    <v-app-bar  color="primary" density="compact">
      <v-app-bar-title>Vuetify CHAT</v-app-bar-title>
      <v-btn prepend-icon="mdi-google-downasaur" variant="outlined" @click="googleAccess" v-if="!userGoogle">Acceder</v-btn>
      <v-btn prepend-icon="mdi-google-downasaur" variant="outlined" @click="logout" v-if="userGoogle">Salir</v-btn>
    </v-app-bar>

    <v-main app>
      <v-container>
        <Chat v-if="userGoogle" />
        <div v-else>
         <h1 class="text-center mt-15"> Debes iniciar sesion para ver los chat </h1>
        </div>
      </v-container>

      <v-footer class="d-flex flex-column" app> 
        <FormAdd/>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup>
import {ref} from "vue"
import {GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut} from "@firebase/auth"
import {auth} from "./firebase"


import Chat from "@/components/Chat.vue";
import FormAdd from "@/components/FormAdd.vue";
//import { ref } from "vue";

const userGoogle = ref(false);

const googleAccess = async () =>{

 try {
  const provider = new GoogleAuthProvider();
  const {user} = await signInWithPopup(auth,provider);
 //    console.log(user);
 //const result = await signInWithPopup(auth,provider);
 //console.log(result.user);


 } catch (error) {
  console.log(error);
 }

const logout = async () =>{

  await signOut(auth);
  userGoogle.value = null;
};

  onAuthStateChanged(auth,(user)=>{
  console.log('desde onAuthStateChanged',user);
  userGoogle.value = user;
 })

}




</script>
