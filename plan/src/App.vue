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
import mockData from "./mock/plan";

export default {
  name: "app",
  data() {
    return {
      current: "胸",
      list: [],
      labels: []
    };
  },
  mounted() {
    this.initialData();
    // const exerciseType = [{value:'常规组'},{value:'递减组'}];
    // const repsNum = new Array(12).fill(0).map((item,i) => {return{value: i+1}});
    // const setsNum = new Array(10).fill(0).map((item,i) => {return{value: i+1, children: repsNum}});
    // let exerciseData = exerciseType;
    // exerciseData.forEach(type => { type.children = setsNum; });
    const dateSegmentData = [
      {
        is: "cube-date-picker",
        title: "入学时间",
        min: new Date(2000, 0, 1),
        max: new Date(2030, 11, 31)
      },
      {
        is: "cube-cascade-picker",
        title: "毕业时间",
        data: {
          value: '组数',
          children: {
            value: '每组次数'
          }
        }
      }
    ];

    this.dataSegmentPicker = this.$createSegmentPicker({
      data: dateSegmentData,
      onSelect: (selectedDates, selectedVals, selectedTexts) => {
        this.$createDialog({
          type: 'warn',
          content: `Selected Items: <br/> - 入学时间: ${selectedTexts[0].join('')} <br/> - 毕业时间: ${selectedTexts[1].join('')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      onNext: (i, selectedDate, selectedValue, selectedText) => {
        dateSegmentData[1].min = selectedDate
        if (i === 0) {
          this.dateSegmentPicker.$updateProps({
            data: dateSegmentData
          })
        }
      }
    });
  },
  methods: {
    selectItem(item) {
      this.dataSegmentPicker.show();
    },
    initialData() {
      this.list = mockData.list;
      this.labels = mockData.labels;
    },
    showDefault() {
      this.$createActionSheet({
        title: "容量计算器",
        data: [
          {
            content: "<div>I am calculator</div>",
            class: "calculator"
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            type: "correct",
            time: 1000
          }).show();
        },
        onCancel: () => {
          this.$createToast({
            txt: "Clicked canceled",
            type: "warn",
            time: 1000
          }).show();
        }
      }).show();
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
