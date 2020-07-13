<template>
  <div id="app">
    <fc-hello-world />
    //! button
    <fc-button>ss</fc-button>
    //! button, badge
    <fc-badge :value="12" class="item">
      <fc-button size="small">comments</fc-button>
    </fc-badge>
    //! input
    <div>
      <span>Using attributes</span>
      <fc-input
        placeholder="Pick a date"
        suffix-icon="fc-icon-date"
        v-model="input1"
      >
      </fc-input>
      <fc-input
        placeholder="Type something"
        prefix-icon="fc-icon-search"
        v-model="input2"
      >
      </fc-input>
    </div>
    //todo icon
    <div>
      <span>Using slots</span>
      <fc-input placeholder="Pick a date" v-model="input3">
        <i slot="suffix" class="fc-input__icon fc-icon-date"></i>
      </fc-input>
      <fc-input placeholder="Type something" v-model="input4">
        <i slot="prefix" class="fc-input__icon fc-icon-search"></i>
      </fc-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
