<script lang="ts">
import { useHeaderAlertStore } from "../stores/header-alert";
import { io } from "socket.io-client";

const headerAlertStore = useHeaderAlertStore();

export default {
  data: () => ({
    socket: io("http://localhost:3001"),
    message: "",
    connected: false,
    fooEvents: [],
    barEvents: [],
    loading: false,
  }),
  async mounted() {
    try {
      this.socket.on("connect", () => {
        console.log("Connected");
      });
      this.socket.on("users", (data) => {
        console.log("users", data);
      });
      this.socket.on("message", (data) => {
        console.log("message", data);
      });
      this.socket.on("exception", (data) => {
        console.log("event", data);
      });
      this.socket.on("disconnect", () => {
        console.log("Disconnected");
      });

      console.log("Private chat");
    } catch (error) {
      headerAlertStore.setError(error);
    }
  },
  methods: {
    sendMessage() {
      this.socket.emit("message", { message: this.$data.message });

      console.log("message", this.$data.message);
    },
  },
};
</script>

<template>
  <v-form ref="form" lazy-validation @submit="sendMessage">
    <v-card class="mx-auto" title="Chat">
      <v-card-text>
        <v-text-field
          :loading="loading"
          density="compact"
          label="Message"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          v-model="message"
          @click:append-inner="sendMessage"
        ></v-text-field>
      </v-card-text>
    </v-card>
  </v-form>
</template>
