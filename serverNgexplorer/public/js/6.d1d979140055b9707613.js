webpackJsonp([6,7],{93:function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},136:function(o,t){o.exports=' <div class="full-height full-width text-white bg-primary column items-center justify-center"> <h1>Quasar Framework</h1> <h5> Oops. Nothing to see here... </h5> <p> <button v-if=canGoBack class="secondary push" @click=goBack> <i class=on-left>keyboard_arrow_left</i> Go back </button> <span v-if=canGoBack style="margin: 0 10px">or</span> <button class="secondary push" v-link="\'/\'"> Go home <i class=on-right>home</i> </button> </p> </div> '},146:function(o,t,e){var s,n;s=e(93),n=e(136),o.exports=s||{},o.exports.__esModule&&(o.exports=o.exports["default"]),n&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=n)}});