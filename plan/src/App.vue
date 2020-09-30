<template>
  <div id="app">
    <div class="cube-index-list-wrapper">
      <cube-scroll-nav-bar
        :current="current"
        :labels="labels"
      ></cube-scroll-nav-bar>
      <cube-index-list
        :data="list"
        :navbar="false"
        @select="selectItem"
      ></cube-index-list>
    </div>
  </div>
</template>

<script>
import mockData from './mock/plan';

export default {
  name: "app",
  data() {
    return {
      current: '胸',
      list: [],
      labels: []
    };
  },
  mounted(){
    this.initialData();
  },
  methods: {
    selectItem(item) {
      console.log(item.name);
    },
    initialData(){
      this.list = mockData.list;
      this.labels = mockData.labels;
    },
    handleChange(){
      
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cube-index-list-wrapper {
  height: 650px;
}
</style>
