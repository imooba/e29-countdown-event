(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{500:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("ef4a6980",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(500)},508:function(t,e,n){var l=n(24)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),l.push([t.i,".upload-field[data-v-a1a2faa4]{position:relative}.upload-field__content[data-v-a1a2faa4]{border:thin dashed #1967d2!important;border-radius:4px;padding:8px;display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:4px;width:100%;height:240px;background-color:#e8f0fe;overflow:hidden;z-index:99;color:#1967d2!important}.upload-field__content *[data-v-a1a2faa4]{pointer-events:none}.upload-field__content>input[data-v-a1a2faa4]{display:none}.upload-field__drop-zone[data-v-a1a2faa4]{text-align:center}.upload-field--error[data-v-a1a2faa4]{border:2px solid #ff5252!important}.upload-field__disabled[data-v-a1a2faa4]{position:absolute;top:0;bottom:0;left:0;right:0}.upload-field__details[data-v-a1a2faa4]{margin-bottom:8px;padding:0 12px;display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.upload-field__details--hide[data-v-a1a2faa4]{display:none!important}.upload-field--readonly[data-v-a1a2faa4]{cursor:auto}.upload-field:hover .upload-field__image--remove[data-v-a1a2faa4]{display:flex}.upload-field:hover .upload-field__image--remove>*[data-v-a1a2faa4]{pointer-events:auto}.upload-field__image[data-v-a1a2faa4],.upload-field__image--remove[data-v-a1a2faa4]{position:absolute;left:0;right:0;top:0;bottom:0}.upload-field__image--remove[data-v-a1a2faa4]{display:none;z-index:1;background-color:rgba(0,0,0,.25);align-items:center;justify-content:center}.upload-field__normal[data-v-a1a2faa4]{text-align:center}.upload-field__normal>i[data-v-a1a2faa4]{color:#1967d2}.upload-field__normal>div>div[data-v-a1a2faa4]{display:inline-block;text-decoration:underline;cursor:pointer;pointer-events:auto}",""]),t.exports=l},513:function(t,e,n){"use strict";n.r(e);var l=n(216),r=n(214),o=n(178),d=n(521),c=(n(43),n(3),n(28),n(52),n(29),n(27),n(9),n(64),n(69),n(33),n(13));n(41),n(56);function f(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,l=function(){};return{s:l,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){d=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(d)throw r}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var v={name:"UploadImageField",extends:n(502).a,inject:{form:{default:null}},props:{value:{type:String,default:""},src:{type:String,default:""},accept:{type:String,default:"image/png,image/jpg"},imageMaxDimension:{type:Array,default:function(){return[640,640]}}},data:function(){return{localVal:"",original:null,fileCompressor:null,isDragging:!1,processing:!1}},watch:{value:function(t){this.localVal=t}},mounted:function(){this.valid=!0,this.localVal=this.value},methods:{validate:function(t,e){if(t){var n=[];e=e||this.localVal,t&&(this.hasInput=this.hasFocused=!0);var l,r=f(this.rules);try{for(r.s();!(l=r.n()).done;){var o=l.value,d="function"==typeof o?o(e):o;"string"==typeof d?n.push(d):"boolean"!=typeof d&&console.error("Rules should return a string or boolean, received '".concat(Object(c.a)(d),"' instead"),this)}}catch(t){r.e(t)}finally{r.f()}return this.errorBucket=n,this.valid=0===n.length,this.valid}},reset:function(){this.valid=!0,this.localVal="",this.original=null,this.errorBucket=[],this.$emit("input",this.localVal)},resetValidation:function(){this.valid=!0,this.errorBucket=[]},getFile:function(){return this.original},handelOnChangeFile:function(){this.onConvertImage()},handelOnDrop:function(t){if(t.preventDefault(),!this.disabled&&!this.localVal){this.isDragging=!1;var e=t.dataTransfer.files;this.$refs.picture_upload.files=e,this.onConvertImage()}},handelOnDragEnter:function(t){t.preventDefault(),this.disabled||this.localVal||(this.isDragging=!0)},handleOnDragLeave:function(t){this.disabled||this.localVal||(this.isDragging=!1)},handleDragOver:function(t){this.disabled||this.localVal||t.preventDefault()},onConvertImage:function(){var input=this.$refs.picture_upload.files;if(input&&input.length>0){var t=input[0],e=this.accept.split(",");if(console.log(e,t.type),!e.includes(t.type))return this.errorBucket.push("File not support"),void(this.valid=!1);if(t.size>5242880)return this.errorBucket.push("File size must under 5MB"),void(this.valid=!1);this.processing=!0;var n=new FileReader;n.onload=this.onRead,n.readAsDataURL(t),this.original=t}},onRead:function(t){console.log("read"),this.localVal=t.target.result,this.$emit("input",this.localVal),this.$emit("change",this.localVal,this.original),this.$refs.picture_upload.value=null,this.$refs.picture_upload.type="text",this.$refs.picture_upload.type="file",this.validate(!0,this.localVal),this.processing=!1},handelOnRemove:function(){this.localVal="",this.original=null,this.$emit("input",this.localVal),this.$emit("change",this.localVal,this.original),this.validate(!0,this.localVal)},handelOnRemoveURL:function(){console.log("remove url"),this.$emit("update:src",null),this.$emit("remove")}}},m=(n(507),n(63)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"upload-field",attrs:{id:t.id}},[t.src?e("div",{staticClass:"upload-field__content"},[e("div",{staticClass:"upload-field__image"},[e("div",{staticClass:"upload-field__image--remove"},[e(r.a,{attrs:{color:"white"},on:{click:t.handelOnRemoveURL}},[t._v("mdi-delete")])],1),t._v(" "),e(o.a,{staticClass:"grey lighten-4",attrs:{src:t.src,width:"100%",height:"100%",contain:""}})],1)]):e("div",{class:["upload-field__content",{"upload-field--error":!t.valid,"upload-field--disabled":t.disabled},{"upload-field-drop":t.isDragging}],attrs:{id:"upload_content"},on:{drop:t.handelOnDrop,dragover:t.handleDragOver,dragenter:t.handelOnDragEnter,dragleave:t.handleOnDragLeave}},[e("input",{ref:"picture_upload",attrs:{type:"file",alt:"",title:"",accept:t.accept},on:{input:t.handelOnChangeFile}}),t._v(" "),t.localVal?e("div",{staticClass:"upload-field__image"},[e("div",{staticClass:"upload-field__image--remove"},[e(r.a,{attrs:{color:"white"},on:{click:t.handelOnRemove}},[t._v("mdi-delete")])],1),t._v(" "),e(o.a,{staticClass:"grey lighten-4",attrs:{src:t.localVal,width:"100%",height:"100%",contain:""}})],1):t.isDragging?e("div",{staticClass:"upload-field__drop-zone"},[e(l.a,{attrs:{color:"#1967d2"}},[e(r.a,{attrs:{dark:""}},[t._v("mdi-tray-arrow-up")])],1),t._v(" "),e("div",{staticClass:"mt-4 text-subtitle-1 font-weight-light"},[t._v("Drop your image to here")])],1):e("div",{staticClass:"upload-field__normal"},[e(r.a,{attrs:{size:"32"}},[t._v("mdi-image")]),t._v(" "),e("div",{staticClass:"text-subtitle-1 font-weight-light"},[t._v("Drag and drop or "),e("div",{on:{click:function(e){return t.$refs.picture_upload.click()}}},[t._v("browse")])])],1)]),t._v(" "),e("div",{class:["upload-field__details",{"upload-field__details--hide":t.hideDetails}]},[t.errorBucket.length<1&&t.hint&&(t.persistentHint||t.isFocused)?e(d.a,{attrs:{value:[t.hint]}}):t._e(),t._v(" "),e(d.a,{attrs:{value:t.errorBucket,color:"error"}})],1)])}),[],!1,null,"a1a2faa4",null);e.default=component.exports},563:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("064c7220",content,!0,{sourceMap:!1})},582:function(t,e,n){"use strict";n(563)},583:function(t,e,n){var l=n(24)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),l.push([t.i,".setting-item__box[data-v-7afbb43d]{display:flex}.setting-item__box>*+*[data-v-7afbb43d]{padding-left:8px}.setting-item__actions[data-v-7afbb43d]{display:flex;align-items:flex-start;justify-content:flex-end;margin-right:-8px}.setting-item__image[data-v-7afbb43d]{position:relative}.setting-item__image:hover>.setting-item__image--hover[data-v-7afbb43d]{display:flex}.setting-item__image--hover[data-v-7afbb43d]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);display:none;justify-content:center;align-items:center}",""]),t.exports=l},607:function(t,e,n){"use strict";n.r(e);var l=n(234),r=n(499),o=n(497),d=n(577),c=n(481),f=n(534),h=n(214),v=n(178),m=n(210),_=n(217),y=n(492),x=n(15),w=(n(3),n(33),n(51),n(586)),k={name:"SettingBackgroundDialog",props:{value:{type:Boolean,default:!1}},data:function(){return{loading:!1,valid:!0,item:{main:{url:null,ref:null,img:null},second:{url:null,ref:null,img:null}}}},watch:{value:function(t){t&&this.loadSettings()}},methods:{loadSettings:function(){var t=this;this.loading=!0,this.$fire.database.ref("stage/settings").once("value",(function(e){var n=e.val()||{},l=n.main,main=void 0===l?{}:l,r=n.second,o=void 0===r?{}:r;t.item.main.url=main.bg_url,t.item.main.path=main.bg_path,t.item.second.url=o.bg_url,t.item.second.path=o.bg_path,t.loading=!1}))},handleOnRemove:function(t){t.delete=t.path,t.url=null,t.path=null},handleOnSave:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n,l,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:e.prev=2,t.loading=!0,e.t0=regeneratorRuntime.keys(t.item);case 5:if((e.t1=e.t0()).done){e.next=30;break}if(n=e.t1.value,l={bg_url:null,bg_path:null},!t.item[n].delete){e.next=15;break}return console.log("has delete"),e.next=12,t.$fire.storage.ref("/"+t.item[n].delete).delete();case 12:return e.next=14,t.$fire.database.ref("stage/settings").child(n).update(l);case 14:delete t.item[n].delete;case 15:if(!t.item[n].img){e.next=28;break}return console.log("add new image"),r=Object(w.a)()+".jpg",e.next=20,t.$fire.storage.ref("/images/"+r).putString(t.item[n].img,"data_url");case 20:return o=e.sent,e.next=23,o.ref.getDownloadURL();case 23:return l.bg_url=e.sent,l.bg_path=o.metadata.fullPath,delete t.item[n].img,e.next=28,t.$fire.database.ref("stage/settings").child(n).update(l);case 28:e.next=5;break;case 30:t.$emit("input",!1),e.next=36;break;case 33:e.prev=33,e.t2=e.catch(2),console.error(e.t2);case 36:return e.prev=36,t.loading=!1,e.finish(36);case 39:case"end":return e.stop()}}),e,null,[[2,33,36,39]])})))()}}},C=(n(582),n(63)),component=Object(C.a)(k,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{value:t.value,"max-width":"640",persistent:"",scrollable:""}},[e(r.a,[e(o.c,[t._v("Background Settings")]),t._v(" "),e(c.a),t._v(" "),e(o.b,{staticClass:"py-3",staticStyle:{position:"relative"}},[e(f.a,{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"pb-1"},[t._v("Main Screen")]),t._v(" "),t.item.main.url?e("div",{staticClass:"setting-item__image"},[e(v.a,{staticClass:"grey lighten-4",attrs:{src:t.item.main.url,height:"220",contain:""}}),t._v(" "),e("div",{staticClass:"setting-item__image--hover"},[e(l.a,{attrs:{icon:""},on:{click:function(e){return t.handleOnRemove(t.item.main)}}},[e(h.a,{attrs:{color:"white"}},[t._v("mdi-delete")])],1)],1)],1):e("upload-image-field",{staticStyle:{height:"220px"},attrs:{accept:"image/jpeg"},model:{value:t.item.main.img,callback:function(e){t.$set(t.item.main,"img",e)},expression:"item.main.img"}}),t._v(" "),e("div",{staticClass:"pb-1 mt-8"},[t._v("Second Screen")]),t._v(" "),t.item.second.url?e("div",{staticClass:"setting-item__image"},[e(v.a,{staticClass:"grey lighten-4",attrs:{src:t.item.second.url,height:"220",contain:""}}),t._v(" "),e("div",{staticClass:"setting-item__image--hover"},[e(l.a,{attrs:{icon:""},on:{click:function(e){return t.handleOnRemove(t.item.second)}}},[e(h.a,{attrs:{color:"white"}},[t._v("mdi-delete")])],1)],1)],1):e("upload-image-field",{staticStyle:{height:"220px"},attrs:{accept:"image/jpeg"},model:{value:t.item.second.img,callback:function(e){t.$set(t.item.second,"img",e)},expression:"item.second.img"}})],1),t._v(" "),e(m.a,{attrs:{value:t.loading,"z-index":"999",opacity:0,absolute:""}},[e(_.a,{attrs:{color:"primary",width:"3",indeterminate:""}})],1)],1),t._v(" "),e(c.a),t._v(" "),e(o.a,[e(y.a),t._v(" "),e(l.a,{attrs:{disabled:t.loading,text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("Cancel")]),t._v(" "),e(l.a,{attrs:{disabled:t.loading,text:""},on:{click:t.handleOnSave}},[t._v("Save")])],1)],1)],1)}),[],!1,null,"7afbb43d",null);e.default=component.exports;installComponents(component,{UploadImageField:n(513).default})}}]);