<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapMutations, mapActions } from "vuex";
import { store } from "../store/store";

@Component({
  store,
  computed: mapState(["count"]),
  methods: {
    ...mapActions(["increment"]),
    decrement() {
      this.$store.dispatch("decrement", 1);
    },
  },
})
export default class HelloWorld extends Vue {
  data() {
    return {};
  }
}
</script>
