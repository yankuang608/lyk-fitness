import Vue from 'vue'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Checker,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  RecycleList
} from 'cube-ui'
import App from './App'
import router from './router'

Vue.use(Button)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toolbar)
Vue.use(TabBar)
Vue.use(TabPanels)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Checker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Upload)
Vue.use(Form)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(SegmentPicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Drawer)
Vue.use(ImagePreview)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Sticky)
Vue.use(ScrollNav)
Vue.use(ScrollNavBar)
Vue.use(RecycleList)

Vue.config.productionTip = false

/* eslint-disable no-new */
const renderApp = () => {
  const app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
  });
};
new Promise (resolve =>{
  function check () {
    if (
      window.innerWidth &&
      window.innerHeight &&
      screen.availWidth &&
      screen.availHeight
    ) {
      resolve ();
    } else {
      setTimeout (check, 10);
    }
  }
  if (
    ['complete', 'loaded', 'interactive'].includes (document.readyState) &&
    document.body
  ) {
    check ();
  } else {
    document.addEventListener ('DOMContentLoaded', check, false);
  }
}).then (() => {
  //解决promise axios请求，finally不执行的问题
  Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then (
      value => P.resolve (callback ()).then (() => value),
      reason =>
        P.resolve (callback ()).then (() => {
          throw reason;
        })
    );
  };
  (function(doc,win){
    const docElement = doc.documentElement;
    function callback(){
      let clientWidth = docElement.clientWidth;
      clientWidth = clientWidth / 10; // 设置 rem 为宽度的十分之一
      docElement.style.fontSize = clientWidth + 'px';
    }
    
    const event = 'orientationchange' in win ? 'orientationChange' : 'resize';

    doc.addEventListener('DOMContentLoaded',callback);
    win.addEventListener(event,callback);
  })(document,window);
  renderApp();
});