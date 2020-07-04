<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
import { store } from "../store/store";

@Component({
  store,
  computed: mapState(["count"]),
  methods: {
    ...mapMutations(["increment"]),
    decrement() {
      this.$store.commit("decrement", 1);
    },
  },
})
export default class HelloWorld extends Vue {
  data() {
    return {};
  }
}
</script>
