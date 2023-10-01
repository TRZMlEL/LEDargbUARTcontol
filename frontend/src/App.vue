<template>
  <div class="bg-slate-950 w-screen h-screen flex flex-col items-center justify-center gap-5">
    <p class="text-white">State: {{ connected }}</p>
    <div class="bg-green-900 p-7 rounded-xl w-30 h-30 flex flex-col items-center justify-center gap-5">
      <div>
        <input v-model="HEX0" type="color" />
        <input v-model="HEX1" type="color" />
        <input v-model="HEX2" type="color" />
        <input v-model="HEX3" type="color" />
        <input v-model="HEX4" type="color" />
        <input v-model="HEX5" type="color" />
        <input v-model="HEX6" type="color" />
      </div>
      <button @click="sendColor" class="bg-white rounded-md text-center">
        SEND
      </button>
    </div>
  </div>
</template>

<script>
import { state, socket } from "./socket"; // Importujemy zarówno state, jak i socket z modułu socket.js

export default {
  name: "ConnectionState",
  computed: {
    connected() {
      return state.connected;
    },
  },

  data() {
    return {
      HEX0: '',
      HEX1: '',
      HEX2: '',
      HEX3: '',
      HEX4: '',
      HEX5: '',
      HEX6: '',
      r: 0,
      g: 0,
      b: 0,
    };
  },

  methods: {
    sendColor() {
      const r0 = parseInt(this.HEX0.slice(1, 3), 16);
      const g0 = parseInt(this.HEX0.slice(3, 5), 16);
      const b0 = parseInt(this.HEX0.slice(5, 7), 16);
      console.log(r0, g0, b0);
      socket.emit("color0", r0, g0, b0);

      const r1 = parseInt(this.HEX1.slice(1, 3), 16);
      const g1 = parseInt(this.HEX1.slice(3, 5), 16);
      const b1 = parseInt(this.HEX1.slice(5, 7), 16);
      console.log(r1, g1, b1);
      socket.emit("color1", r1, g1, b1);
      
      const r2 = parseInt(this.HEX2.slice(1, 3), 16);
      const g2 = parseInt(this.HEX2.slice(3, 5), 16);
      const b2 = parseInt(this.HEX2.slice(5, 7), 16);
      console.log(r2, g2, b2);
      socket.emit("color2", r2, g2, b2);
      
      const r3 = parseInt(this.HEX3.slice(1, 3), 16);
      const g3 = parseInt(this.HEX3.slice(3, 5), 16);
      const b3 = parseInt(this.HEX3.slice(5, 7), 16);
      console.log(r3, g3, b3);
      socket.emit("color3", r3, g3, b3);
      
      const r4 = parseInt(this.HEX4.slice(1, 3), 16);
      const g4 = parseInt(this.HEX4.slice(3, 5), 16);
      const b4 = parseInt(this.HEX4.slice(5, 7), 16);
      console.log(r4, g4, b4);
      socket.emit("color4", r4, g4, b4);
      
      const r5 = parseInt(this.HEX5.slice(1, 3), 16);
      const g5 = parseInt(this.HEX5.slice(3, 5), 16);
      const b5 = parseInt(this.HEX5.slice(5, 7), 16);
      console.log(r5, g5, b5);
      socket.emit("color5", r5, g5, b5);
      
      const r6 = parseInt(this.HEX6.slice(1, 3), 16);
      const g6 = parseInt(this.HEX6.slice(3, 5), 16);
      const b6 = parseInt(this.HEX6.slice(5, 7), 16);
      console.log(r6, g6, b6);
      socket.emit("color6", r6, g6, b6);
    },
  },
};
</script>