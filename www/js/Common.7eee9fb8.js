(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"013a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"keyboard_backspace"},on:{click:t.onBack}}),i("q-toolbar-title",[t._v(t._s(t.title))])],1)],1),i("q-page-container",[i("q-page",t._l(t.list,(function(e,a){return i("q-list",{key:a,attrs:{bordered:"",separator:""}},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.name))])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-toggle",{attrs:{"checked-icon":"lock_open",color:"green","unchecked-icon":"lock",size:"xl"},on:{input:function(i){return t.onOpenElevator(e.pk)}},model:{value:e.status,callback:function(i){t.$set(e,"status",i)},expression:"item.status"}})],1)],1)],1)})),1)],1)],1)},s=[],r=i("2b0e"),o=i("d257"),n=i("5371"),d=r["a"].extend({name:"ElevatorReader",data(){return{title:"",cardPK:"",readerPK:"",watchGPSID:0,list:new Array,idleTimebegin:0,idleTimeoutId:0}},methods:{notifyError(t){this.$q.notify({type:"negative",message:t})},startIdleTimout(){this.idleTimeoutId=window.setTimeout(()=>{this.doIdleWork()},1e3)},doIdleWork(){const t=Math.floor(((new Date).getTime()-this.idleTimebegin)/6e4);if(t>1)this.$router.replace({name:"Dashboard"});else{for(const t of this.list)if(t.status&&t.unLockBegin>0){const e=Math.floor(((new Date).getTime()-t.unLockBegin)/1e3);e>5&&(t.status=!1);break}this.startIdleTimout()}},onBack(){this.$router.replace({name:"Dashboard"})},getGPSPosition(t){try{this.$q.loading.show(),this.watchGPSID=navigator.geolocation.watchPosition(e=>{this.$q.platform.is.ios&&e.coords.accuracy>30||(navigator.geolocation.clearWatch(this.watchGPSID),this.$q.loading.hide(),t(e.coords.latitude,e.coords.longitude))},t=>{this.$q.loading.hide(),this.notifyError("The location service must be enabled.("+t.message+")"),this.$router.replace({name:"Dashboard"})},{maximumAge:6e4,timeout:3e4,enableHighAccuracy:!0})}catch(e){this.$q.loading.hide(),this.notifyError(e.message),this.$router.replace({name:"Dashboard"})}},getElevatorList(t,e){this.$q.loading.show(),n["a"].ScanElevatorReader({cardPK:this.cardPK,readerPK:this.readerPK,latitude:t,longitude:e}).then(t=>{if(this.$q.loading.hide(),t.data.ok){this.title=t.data.address;for(const e of t.data.result)this.list.push({pk:e.pk,name:e.name,isUnLock:e.isUnLock,status:!1,unLockBegin:0});this.idleTimebegin=(new Date).getTime(),this.startIdleTimout()}else this.notifyError(t.data.message),this.$router.replace({name:"Dashboard"})}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message),this.$router.replace({name:"Dashboard"})})},onOpenElevator(t){this.idleTimebegin=(new Date).getTime();const e=this.getByPK(t);e&&e.status&&(this.$q.loading.show(),e.unLockBegin=0,n["a"].OpenElevator(t,e.isUnLock).then(t=>{this.$q.loading.hide(),this.idleTimebegin=(new Date).getTime(),t.data.ok?e.unLockBegin=(new Date).getTime():(e.status=!1,this.notifyError(t.data.message))}).catch(t=>{this.notifyError(t.message),this.$q.loading.hide(),e.status=!1,this.idleTimebegin=(new Date).getTime()}))},getByPK(t){for(const e of this.list)if(e.pk===t)return e}},mounted(){const t=this.$route.params.id;if(!t||t.length<32)return this.notifyError("The parameter does not valid."),void this.$router.replace({name:"Dashboard"});this.readerPK=o["a"].decryptPK(t);const e=this.$store.getters["UserStore/GET_USER"];this.cardPK=e.pk,this.getGPSPosition((t,e)=>{this.getElevatorList(t,e)})},beforeDestroy(){this.idleTimeoutId&&clearTimeout(this.idleTimeoutId)}}),c=d,l=i("2877"),u=Object(l["a"])(c,a,s,!1,null,"1d76ba38",null);e["default"]=u.exports},"013f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",[i("q-page-container",[i("q-page",{staticClass:"flex flex-center login-page"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.appUpdater.isLatest,expression:"appUpdater.isLatest"}],staticClass:"form-wrap"},[i("q-form",{staticClass:"q-gutter-sm",on:{submit:t.onLogin}},[i("div",{staticClass:"logo"}),i("q-input",{attrs:{dark:"",color:"white",label:"Sitecode",rules:[function(t){return t&&t.length>0||"Please input your sitecode"}]},model:{value:t.sitecode,callback:function(e){t.sitecode=e},expression:"sitecode"}}),i("q-input",{attrs:{dark:"",color:"white",label:"Encoded",rules:[function(t){return t&&t.length>0||"Please input your encoded"}]},model:{value:t.encoded,callback:function(e){t.encoded=e},expression:"encoded"}}),i("q-input",{attrs:{dark:"",color:"white",label:"First Name",rules:[function(t){return t&&t.length>0||"Please input your first name"}]},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),i("q-input",{attrs:{dark:"",color:"white",label:"Last Name",rules:[function(t){return t&&t.length>0||"Please input your last name"}]},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),i("q-input",{attrs:{dark:"",color:"white",label:"Email",rules:[function(t){return t&&t.length>0||"Please input your email address"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("div",[i("q-btn",{staticClass:"full-width",attrs:{label:"Register",type:"submit",color:"white","text-color":"black"}})],1)],1),i("div",{staticClass:"version"},[i("p",[t._v(t._s("Version: "+t.appUpdater.version))])])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.appUpdater.isLatest,expression:"!appUpdater.isLatest"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.appUpdater.isAndroid,expression:"appUpdater.isAndroid"}],staticStyle:{"text-align":"center"}},[i("h5",{staticStyle:{"margin-bottom":"0"}},[t._v(t._s(t.appUpdater.updateTitle))]),i("q-linear-progress",{staticStyle:{height:"20px"},attrs:{value:t.appUpdater.downloadProcessValue/100,rounded:""}},[i("div",{staticClass:"absolute-full flex flex-center"},[i("q-badge",{attrs:{color:"white","text-color":"accent",label:t.appUpdater.downloadProcessValue+"%"}})],1)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.appUpdater.isAndroid,expression:"!appUpdater.isAndroid"}],staticStyle:{"text-align":"center"}},[i("h5",{staticStyle:{"margin-bottom":"0"}},[t._v(t._s(t.appUpdater.updateTitle))]),i("q-linear-progress",{staticStyle:{height:"20px"},attrs:{value:t.appUpdater.downloadProcessValue/100,rounded:""}},[i("div",{staticClass:"absolute-full flex flex-center"},[i("q-badge",{attrs:{color:"white","text-color":"accent",label:t.appUpdater.downloadProcessValue+"%"}})],1)])],1)])])],1)],1)},s=[],r=i("2b0e"),o=i("bc3a"),n=i.n(o),d=i("9d10"),c=i("d257"),l=r["a"].extend({name:"Login",data(){return{sitecode:"",encoded:"",firstName:"",lastName:"",email:"",appUpdater:{isLatest:!1,isAndroid:!1,updateTitle:"Checking new version ...",updateBaseUrl:"https://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"VirtualKey",version:"1.0.0",downloadProcessValue:0}}},methods:{notifyError(t){this.$q.notify({type:"negative",message:t})},onLogin(){this.$q.loading.show(),d["a"].Register({sitecode:this.sitecode,encoded:this.encoded,firstName:this.firstName,lastName:this.lastName,email:this.email}).then(t=>{this.$q.loading.hide(),t.data.ok?(c["a"].setAuthorization(t.data.authorization),this.$store.commit("UserStore/SET_USER",{pk:t.data.entity.pk,firstName:this.firstName,lastName:this.lastName,email:this.email,photo:t.data.entity.photo}),this.$router.push({name:"Activate"})):this.notifyError(t.data.message)}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message)})},autoLogin(){const t=c["a"].getRemeberMe();if(!t)return;this.$q.loading.show();const e="D3000.VirtualKey",i=c["a"].getTicks().toString(),a=c["a"].encryptPassword(i,"7E57C707-F028-45C1-9F80-625A70A60D11");d["a"].Login({userId:e,password:a,ticks:i,pk:t}).then(e=>{this.$q.loading.hide(),e.data.ok?(c["a"].setAuthorization(e.data.authorization),this.$store.commit("UserStore/SET_USER",{pk:t,firstName:e.data.entity.firstName,lastName:e.data.entity.lastName,email:e.data.entity.email,photo:e.data.entity.photo}),this.$router.replace({name:"Dashboard"})):this.notifyError(e.data.message)}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message)})},checkVersion(t){this.$q.platform.is.android?this.appUpdater.isAndroid=!0:this.appUpdater.isAndroid=!1,this.appUpdater.isAndroid?this.checkAndroidVersion(e=>{e?this.updateApp():t()}):this.checkIOSVersion(e=>{e?this.updateApp():t()})},checkAndroidVersion(t){const e=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.txt`;n.a.get(e).then(e=>{const i=e.data.Version;i!=this.appUpdater.version?(this.appUpdater.updateTitle="Downloading new version...",t(!0)):t(!1)}).catch(t=>{this.showUpdateError(t.message)})},checkIOSVersion(t){const e=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.plist`;n.a.get(e).then(e=>{let i="";const a=e.data.split(/\r\n|[\r\n]/);for(let t=0;t<a.length;t++){const e=a[t];if(e.endsWith("<key>bundle-version</key>")&&t+1<a.length){const e=a[t+1].indexOf("<string>");i=a[t+1].substring(e+8,e+8+5)}}i.length>0&&i!=this.appUpdater.version?(this.appUpdater.updateTitle="Updating the App, please wait...",t(!0)):t(!1)}).catch(t=>{this.showUpdateError(t.message)})},updateApp(){if(this.appUpdater.isAndroid){const t=(new Date).getTime(),e=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.apk?v=${t}`;this.updateAndroid(e)}else{const t=`itms-services://?action=download-manifest&url=${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.plist`;this.updateIOS(t)}},updateAndroid(t){const e=this;window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory,(function(i){i.getFile(e.appUpdater.appName+".apk",{create:!0,exclusive:!1},(function(i){n()({method:"GET",url:t,responseType:"blob",onDownloadProgress(t){t.lengthComputable&&e.$nextTick(()=>{e.appUpdater.downloadProcessValue=Math.round(t.loaded/t.total*100)})}}).then(t=>{const e=new Blob([t.data],{type:"application/vnd.android.package-archive"});i.createWriter((function(t){t.onwriteend=function(){cordova.plugins.fileOpener2.open(i.toInternalURL(),"application/vnd.android.package-archive")},t.write(e)}))}).catch(t=>{e.showUpdateError("download error: "+t.message)})}),t=>{e.showUpdateError("error getting file! "+t.message)})}),t=>{e.showUpdateError("error getting persistent fs! "+t.code)})},updateIOS(t){cordova.InAppBrowser.open(t,"_system","location=no"),this.simulateDownloadIOS()},simulateDownloadIOS(){setTimeout(()=>{this.appUpdater.downloadProcessValue>=100?cordova.plugins.exit():(this.$nextTick(()=>{this.appUpdater.downloadProcessValue+=10}),this.simulateDownloadIOS())},1e3)},showUpdateError(t){navigator.notification.alert(t,()=>{cordova.plugins.exit()})}},mounted(){this.appUpdater.isLatest=!0,this.autoLogin()}}),u=l,h=(i("76ed"),i("2c53"),i("2877")),p=Object(h["a"])(u,a,s,!1,null,"5303a736",null);e["default"]=p.exports},"2c53":function(t,e,i){"use strict";var a=i("b47d"),s=i.n(a);s.a},"2c75":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("bc3a"),s=i.n(a);s.a.defaults.timeout=5e4,s.a.defaults.baseURL="https://d3000apitest.azurewebsites.net/api/Virtualkey/",s.a.interceptors.request.use((function(t){const e=sessionStorage.getItem("D3000_VirtualKey_authorization")||"";return e&&(t.headers.Authorization="Basic "+e),t.url=t.url+"?access_token=73FBF94A-3F5E-7190-9252-95924D4DBBD1",t}),(function(t){return Promise.reject(t)})),s.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));class r{static post(t,e,i){return s.a.post(t,e,i)}}},"2dd9":function(t,e,i){"use strict";var a=i("eb97"),s=i.n(a);s.a},"3d18":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"keyboard_backspace"},on:{click:t.onBack}}),i("q-toolbar-title",[t._v(t._s(t.title))])],1)],1),i("q-page-container",[i("q-page",t._l(t.list,(function(e,a){return i("q-list",{key:a,attrs:{bordered:"",separator:""}},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.name))])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-toggle",{attrs:{"checked-icon":"lock_open",color:"green","unchecked-icon":"lock",size:"xl"},on:{input:function(i){return t.onOpenUpDown(e.pk)}},model:{value:e.status,callback:function(i){t.$set(e,"status",i)},expression:"item.status"}})],1)],1)],1)})),1)],1)],1)},s=[],r=i("2b0e"),o=i("d257"),n=i("5371"),d=r["a"].extend({name:"UpDownReader",data(){return{title:"",cardPK:"",panelPK:"",zone1:"",zone2:"",watchGPSID:0,list:new Array,idleTimebegin:0,idleTimeoutId:0}},methods:{notifyError(t){this.$q.notify({type:"negative",message:t})},startIdleTimout(){this.idleTimeoutId=window.setTimeout(()=>{this.doIdleWork()},1e3)},doIdleWork(){const t=Math.floor(((new Date).getTime()-this.idleTimebegin)/6e4);if(t>1)this.$router.replace({name:"Dashboard"});else{for(const t of this.list)if(t.status&&t.unLockBegin>0){const e=Math.floor(((new Date).getTime()-t.unLockBegin)/1e3);e>8&&(t.status=!1);break}this.startIdleTimout()}},onBack(){this.$router.replace({name:"Dashboard"})},getGPSPosition(t){try{this.$q.loading.show(),this.watchGPSID=navigator.geolocation.watchPosition(e=>{this.$q.platform.is.ios&&e.coords.accuracy>30||(navigator.geolocation.clearWatch(this.watchGPSID),this.$q.loading.hide(),t(e.coords.latitude,e.coords.longitude))},t=>{this.$q.loading.hide(),this.notifyError("The location service must be enabled.("+t.message+")"),this.$router.replace({name:"Dashboard"})},{maximumAge:6e4,timeout:3e4,enableHighAccuracy:!0})}catch(e){this.$q.loading.hide(),this.notifyError(e.message),this.$router.replace({name:"Dashboard"})}},getUpDownList(t,e){this.$q.loading.show(),n["a"].ScanUpDownReader({panelPK:this.panelPK,zone1:this.zone1,zone2:this.zone2,latitude:t,longitude:e}).then(t=>{if(this.$q.loading.hide(),t.data.ok){this.title=t.data.address;for(const e of t.data.result)this.list.push({pk:e.pk,name:e.name,status:!1,unLockBegin:0});this.idleTimebegin=(new Date).getTime(),this.startIdleTimout()}else this.notifyError(t.data.message),this.$router.replace({name:"Dashboard"})}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message),this.$router.replace({name:"Dashboard"})})},onOpenUpDown(t){this.idleTimebegin=(new Date).getTime();const e=this.getByPK(t);e&&e.status&&(this.$q.loading.show(),e.unLockBegin=0,n["a"].OpenUpDown(t).then(t=>{this.$q.loading.hide(),this.idleTimebegin=(new Date).getTime(),t.data.ok?e.unLockBegin=(new Date).getTime():(e.status=!1,this.notifyError(t.data.message))}).catch(t=>{this.notifyError(t.message),this.$q.loading.hide(),e.status=!1,this.idleTimebegin=(new Date).getTime()}))},getByPK(t){for(const e of this.list)if(e.pk===t)return e}},mounted(){const t=this.$route.params.id;if(!t||t.length<36)return this.notifyError("The parameter does not valid."),void this.$router.replace({name:"Dashboard"});this.panelPK=o["a"].decryptPK(t.substring(0,32)),this.zone1=t.substring(32,34),this.zone2=t.substring(34,36);const e=this.$store.getters["UserStore/GET_USER"];this.cardPK=e.pk,this.getGPSPosition((t,e)=>{this.getUpDownList(t,e)})},beforeDestroy(){this.idleTimeoutId&&clearTimeout(this.idleTimeoutId)}}),c=d,l=i("2877"),u=Object(l["a"])(c,a,s,!1,null,"b49dd968",null);e["default"]=u.exports},5067:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"keyboard_backspace"},on:{click:t.onBack}}),i("q-toolbar-title",[t._v(t._s(t.title))])],1)],1),i("q-page-container",[i("q-page",t._l(t.list,(function(e,a){return i("q-list",{key:a,attrs:{bordered:"",separator:""}},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.name))])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-toggle",{attrs:{"checked-icon":"lock_open",color:"green","unchecked-icon":"lock",size:"xl"},on:{input:function(i){return t.onOpenDoor(e.pk)}},model:{value:e.status,callback:function(i){t.$set(e,"status",i)},expression:"item.status"}})],1)],1)],1)})),1)],1)],1)},s=[],r=i("2b0e"),o=i("d257"),n=i("5371"),d=r["a"].extend({name:"DoorReader",data(){return{title:"",cardPK:"",readerPK:"",watchGPSID:0,list:new Array,idleTimebegin:0,idleTimeoutId:0}},methods:{notifyError(t){this.$q.notify({type:"negative",message:t})},startIdleTimout(){this.idleTimeoutId=window.setTimeout(()=>{this.doIdleWork()},1e3)},doIdleWork(){const t=Math.floor(((new Date).getTime()-this.idleTimebegin)/6e4);if(t>1)this.$router.replace({name:"Dashboard"});else{for(const t of this.list)if(t.status&&t.unLockBegin>0){const e=Math.floor(((new Date).getTime()-t.unLockBegin)/1e3);e>8&&(t.status=!1);break}this.startIdleTimout()}},onBack(){this.$router.replace({name:"Dashboard"})},getGPSPosition(t){try{this.$q.loading.show(),this.watchGPSID=navigator.geolocation.watchPosition(e=>{this.$q.platform.is.ios&&e.coords.accuracy>30||(navigator.geolocation.clearWatch(this.watchGPSID),this.$q.loading.hide(),t(e.coords.latitude,e.coords.longitude))},t=>{this.$q.loading.hide(),this.notifyError("The location service must be enabled.("+t.message+")"),this.$router.replace({name:"Dashboard"})},{maximumAge:6e4,timeout:3e4,enableHighAccuracy:!0})}catch(e){this.$q.loading.hide(),this.notifyError(e.message),this.$router.replace({name:"Dashboard"})}},getDoorList(t,e){this.$q.loading.show(),n["a"].ScanDoorReader({cardPK:this.cardPK,readerPK:this.readerPK,latitude:t,longitude:e}).then(t=>{if(this.$q.loading.hide(),t.data.ok){this.title=t.data.address;for(const e of t.data.result)e.isUnLock?this.list.push({pk:e.pk,name:e.name,status:!0,unLockBegin:(new Date).getTime()}):this.list.push({pk:e.pk,name:e.name,status:!1,unLockBegin:0});this.idleTimebegin=(new Date).getTime(),this.startIdleTimout()}else this.notifyError(t.data.message),this.$router.replace({name:"Dashboard"})}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message),this.$router.replace({name:"Dashboard"})})},onOpenDoor(t){this.idleTimebegin=(new Date).getTime();const e=this.getByPK(t);e&&status&&(this.$q.loading.show(),e.unLockBegin=0,n["a"].OpenDoor(t).then(t=>{this.$q.loading.hide(),this.idleTimebegin=(new Date).getTime(),t.data.ok?e.unLockBegin=(new Date).getTime():(e.status=!1,this.notifyError(t.data.message))}).catch(t=>{this.notifyError(t.message),this.$q.loading.hide(),e.status=!1,this.idleTimebegin=(new Date).getTime()}))},getByPK(t){for(const e of this.list)if(e.pk===t)return e}},mounted(){const t=this.$route.params.id;if(!t||t.length<32)return this.notifyError("The parameter does not valid."),void this.$router.replace({name:"Dashboard"});this.readerPK=o["a"].decryptPK(t);const e=this.$store.getters["UserStore/GET_USER"];this.cardPK=e.pk,this.getGPSPosition((t,e)=>{this.getDoorList(t,e)})},beforeDestroy(){this.idleTimeoutId&&clearTimeout(this.idleTimeoutId)}}),c=d,l=i("2877"),u=Object(l["a"])(c,a,s,!1,null,"500a480d",null);e["default"]=u.exports},5371:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("2c75");class s{static OpenDoor(t){const e={doorPK:t};return a["a"].post("BizReader_OpenDoor",e)}static OpenElevator(t,e){const i={doorPK:t,isUnLock:e};return a["a"].post("BizReader_OpenElevator",i)}static OpenUpDown(t){const e={doorPK:t};return a["a"].post("BizReader_OpenUpDown",e)}static ScanDoorReader(t){return a["a"].post("BizReader_ScanDoorReader",t)}static ScanElevatorReader(t){return a["a"].post("BizReader_ScanElevatorReader",t)}static ScanUpDownReader(t){return a["a"].post("BizReader_ScanUpDownReader",t)}}},"76ed":function(t,e,i){"use strict";var a=i("ba03"),s=i.n(a);s.a},"9d10":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("2c75");class s{static Activate(t,e){const i={email:t,verifyCode:e};return a["a"].post("BizLogin_Activate",i)}static Login(t){return a["a"].post("BizLogin_Login",t)}static Register(t){return a["a"].post("BizLogin_Register",t)}static SendVerifyCode(t){const e={email:t};return a["a"].post("BizLogin_SendVerifyCode",e)}}},b47d:function(t,e,i){},ba03:function(t,e,i){},be7b:function(t,e,i){},c19d:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",[i("q-page-container",[i("q-page",{staticClass:"flex flex-center bg-primary"},[i("div",[i("div",{staticClass:"input-content"},[i("input",{directives:[{name:"model",rawName:"v-model.trim.number",value:t.input1,expression:"input1",modifiers:{trim:!0,number:!0}}],ref:"input1",attrs:{type:"number",maxlength:"1"},domProps:{value:t.input1},on:{keydown:function(e){return t.keydown1(e)},keyup:function(e){return t.keyup1(e)},input:function(e){e.target.composing||(t.input1=t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}}),i("input",{directives:[{name:"model",rawName:"v-model.trim.number",value:t.input2,expression:"input2",modifiers:{trim:!0,number:!0}}],ref:"input2",attrs:{type:"number",maxlength:"1"},domProps:{value:t.input2},on:{keydown:function(e){return t.keydown2(e)},keyup:function(e){return t.keyup2(e)},input:function(e){e.target.composing||(t.input2=t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}}),i("input",{directives:[{name:"model",rawName:"v-model.trim.number",value:t.input3,expression:"input3",modifiers:{trim:!0,number:!0}}],ref:"input3",attrs:{type:"number",maxlength:"1"},domProps:{value:t.input3},on:{keydown:function(e){return t.keydown3(e)},keyup:function(e){return t.keyup3(e)},input:function(e){e.target.composing||(t.input3=t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}}),i("input",{directives:[{name:"model",rawName:"v-model.trim.number",value:t.input4,expression:"input4",modifiers:{trim:!0,number:!0}}],ref:"input4",attrs:{type:"number",maxlength:"1"},domProps:{value:t.input4},on:{keydown:function(e){return t.keydown4(e)},keyup:function(e){return t.keyup4(e)},input:function(e){e.target.composing||(t.input4=t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}}),i("input",{directives:[{name:"model",rawName:"v-model.trim.number",value:t.input5,expression:"input5",modifiers:{trim:!0,number:!0}}],ref:"input5",attrs:{type:"number",maxlength:"1"},domProps:{value:t.input5},on:{keydown:function(e){return t.keydown5(e)},keyup:function(e){return t.keyup5(e)},input:function(e){e.target.composing||(t.input5=t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}}),i("input",{directives:[{name:"model",rawName:"v-model.trim.number",value:t.input6,expression:"input6",modifiers:{trim:!0,number:!0}}],ref:"input6",attrs:{type:"number",maxlength:"1"},domProps:{value:t.input6},on:{keydown:function(e){return t.keydown6(e)},keyup:function(e){return t.keyup6(e)},input:function(e){e.target.composing||(t.input6=t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"resend text-center"},[i("q-btn",{attrs:{disable:t.timeoutSeconds>0,color:0===t.timeoutSeconds?"green":"dark",icon:"mail","icon-right":"send",label:0===t.timeoutSeconds?"Resend Verify code":"Resend Verify code ("+t.timeoutSeconds+")"},on:{click:t.onResendVerifyCode}})],1),i("div",{staticClass:"activate"},[i("q-btn",{staticClass:"full-width",attrs:{label:"Activate",type:"submit",color:"white","text-color":"black"},on:{click:t.onLogin}})],1)])])],1)],1)},s=[],r=i("2b0e"),o=i("9d10"),n=i("d257"),d=r["a"].extend({name:"Activate",data(){return{pk:"",email:"",input1:"",input2:"",input3:"",input4:"",input5:"",input6:"",timeoutSeconds:60}},methods:{notifyError(t){this.$q.notify({type:"negative",message:t})},onResendVerifyCode(){this.$q.loading.show(),o["a"].SendVerifyCode(this.email).then(t=>{this.$q.loading.hide(),t.data.ok?(this.timeoutSeconds=60,this.startResendTimout()):this.notifyError(t.data.message)}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message)})},onLogin(){if(0===this.input1.length||0===this.input2.length||0===this.input3.length||0===this.input4.length||0===this.input5.length||0===this.input6.length)return void this.notifyError("Please input the verify code firstly.");this.$q.loading.show();const t=this.input1+this.input2+this.input3+this.input4+this.input5+this.input6;o["a"].Activate(this.email,t).then(t=>{this.$q.loading.hide(),t.data.ok?(n["a"].setRemeberMe(this.pk),this.$router.replace({name:"Dashboard"})):this.notifyError(t.data.message)}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message)})},startResendTimout(){setTimeout(()=>{this.setResendTimout()},1e3)},setResendTimout(){this.timeoutSeconds-=1,this.timeoutSeconds>0&&this.startResendTimout()},keydown1(t){8===t.keyCode&&(this.input1.length>0?this.input1="":this.$nextTick(()=>{this.$refs.input1.focus(),this.input1=""}))},keydown2(t){8===t.keyCode&&(this.input2.length>0?this.input2="":this.$nextTick(()=>{this.$refs.input1.focus(),this.input1=""}))},keydown3(t){8===t.keyCode&&(this.input3.length>0?this.input3="":this.$nextTick(()=>{this.$refs.input2.focus(),this.input2=""}))},keydown4(t){8===t.keyCode&&(this.input4.length>0?this.input4="":this.$nextTick(()=>{this.$refs.input3.focus(),this.input3=""}))},keydown5(t){8===t.keyCode&&(this.input5.length>0?this.input5="":this.$nextTick(()=>{this.$refs.input4.focus(),this.input4=""}))},keydown6(t){8===t.keyCode&&(this.input6.length>0?this.input6="":this.$nextTick(()=>{this.$refs.input5.focus(),this.input5=""}))},keyup1(t){8!==t.keyCode&&this.$nextTick(()=>{this.$refs.input2.focus(),this.input1=this.input1.toString().slice(-1)})},keyup2(t){8!==t.keyCode&&this.$nextTick(()=>{this.$refs.input3.focus(),this.input2=this.input2.toString().slice(-1)})},keyup3(t){8!==t.keyCode&&this.$nextTick(()=>{this.$refs.input4.focus(),this.input3=this.input3.toString().slice(-1)})},keyup4(t){8!==t.keyCode&&this.$nextTick(()=>{this.$refs.input5.focus(),this.input4=this.input4.toString().slice(-1)})},keyup5(t){8!==t.keyCode&&this.$nextTick(()=>{this.$refs.input6.focus(),this.input5=this.input5.toString().slice(-1)})},keyup6(t){8!==t.keyCode&&this.$nextTick(()=>{this.$refs.input6.blur(),this.input6=this.input6.toString().slice(-1)})}},mounted(){const t=this.$store.getters["UserStore/GET_USER"];this.pk=t.pk,this.email=t.email,this.startResendTimout(),this.$refs.input1.focus()}}),c=d,l=(i("2dd9"),i("2877")),u=Object(l["a"])(c,a,s,!1,null,"02de9dc8",null);e["default"]=u.exports},cc08:function(t,e,i){"use strict";var a=i("be7b"),s=i.n(a);s.a},d257:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));class a{static setRemeberMe(t){localStorage.setItem("D3000_VirtualKey_key",t)}static getRemeberMe(){return localStorage.getItem("D3000_VirtualKey_key")||""}static clearRemeberMe(){localStorage.removeItem("D3000_VirtualKey_key")}static setAuthorization(t){sessionStorage.setItem("D3000_VirtualKey_authorization",t)}static getAuthorization(){return sessionStorage.getItem("D3000_VirtualKey_authorization")||""}static clearAuthorization(){sessionStorage.removeItem("D3000_VirtualKey_authorization")}static hasAuthorization(){const t=sessionStorage.getItem("D3000_VirtualKey_authorization")||"";return t.length>0}static getTicks(){const t=621355968e9,e=1e4;return t+(new Date).getTime()*e}static encryptPassword(t,e){const i=[];for(let a=0;a<e.length;a++)if(a<t.length){const s=e.charCodeAt(a)+t.charCodeAt(a)-35;i.push(s.toString())}else{const t=e.charCodeAt(a)+5;i.push(t.toString())}return i.join(" ")+" "}static encryptPK(t){return t.replace(/-/g,"")}static decryptPK(t){if(32!==t.length)return t;let e=t.substring(0,8);return e+="-",e+=t.substring(8,12),e+="-",e+=t.substring(12,16),e+="-",e+=t.substring(16,20),e+="-",e+=t.substring(20),e}}},eb97:function(t,e,i){},ec95:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),i("q-toolbar-title",[t._v("Home")])],1)],1),i("q-drawer",{ref:"drawer",attrs:{"show-if-above":"",bordered:"","content-class":"bg-primary text-white"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.onLogout}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"person"}})],1),i("q-item-section",[i("q-item-label",[t._v("Logout")])],1)],1)],1)],1),i("q-page-container",[i("q-page",{staticClass:"text-center"},[i("div",{staticClass:"bg-grey-2"},[t.photo&&t.photo.length>0?i("q-avatar",{attrs:{size:"100px"}},[i("img",{attrs:{src:"data:image/jpeg;base64,"+t.photo}})]):i("q-avatar",{staticClass:"q-mt-md q-mb-md",attrs:{color:"blue-grey-2","text-color":"white",icon:"person"}}),i("h6",{staticClass:"text-grey-6"},[t._v("Welcome")]),i("h4",{staticClass:"text-grey-9"},[t._v(t._s(t.firstName+" "+t.lastName))]),i("q-list",[i("q-slide-item",{on:{top:t.onScanReader,bottom:t.onScanReader},scopedSlots:t._u([{key:"top",fn:function(){return[i("div",{staticClass:"row items-center"},[i("q-icon",{attrs:{name:"camera",size:"xl"}}),t._v(" Scaning...\n              ")],1)]},proxy:!0},{key:"bottom",fn:function(){return[i("div",{staticClass:"row items-center"},[i("q-icon",{attrs:{name:"camera",size:"xl"}}),t._v(" Scaning...\n              ")],1)]},proxy:!0}])},[i("q-item",[i("q-item-section",{on:{click:t.onScanReader}},[i("div",[i("q-icon",{staticClass:"q-mt-lg",attrs:{name:"camera_alt",color:"primary",size:"xl"}}),i("div",{staticClass:"q-pt-md q-pb-xl text-primary"},[t._v("\n                    Slide to Scan Reader\n                  ")])],1)])],1)],1)],1)],1)])],1)],1)},s=[],r=i("2b0e"),o=i("b178");class n{static scanQRCode(t){o["b"].is.cordova?cordova.plugins.barcodeScanner.scan(e=>{e.cancelled||t(e.text)},t=>{n.showError("Scanning failed: "+t.message)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE",orientation:"portrait",disableAnimations:!0,disableSuccessBeep:!1}):n.showError("Scanning must be in mobile.")}static takePicture(t){o["b"].is.cordova?n.takePictureByCordova(t):o["b"].is.desktop?n.takePictureByDesktop(t):n.takePictureByMobile(t)}static showError(t){o["a"].create({title:"Error",message:t})}static takePictureByCordova(t){const e=navigator.camera;e?e.getPicture(t,()=>{},{quality:45,destinationType:0,sourceType:1,allowEdit:!0,encodingType:0,targetWidth:250,targetHeight:250}):n.showError("The camera does not exist in the cordova.")}static takePictureByDesktop(t){const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*;capture=camera"),e.addEventListener("change",e=>{const i=e.currentTarget;if(!i||!i.files)return;const a=i.files[0];if(!a)return;const s=new FileReader;s.addEventListener("load",e=>{if(!e.target||!e.target.result)return;const i=e.target.result,a=document.createElement("canvas"),s=document.createElement("img");s.addEventListener("error",()=>{alert("Fail to load image(desktop).")}),s.addEventListener("load",()=>{const e=250;a.width=e,a.height=e;const i=a.getContext("2d");if(!i)return;let r,o;i.clearRect(0,0,e,e);let n=0,d=0;s.width>s.height?(r=Math.round(e*s.width/s.height),o=e,n=-Math.round((r-e)/2)):(o=Math.round(e*s.height/s.width),r=e,d=-Math.round((o-e)/2)),i.drawImage(s,n,d,r,o);const c=a.toDataURL("image/jpeg",.5),l=c.substr(23);t(l)},!1),s.setAttribute("src",i)}),s.readAsDataURL(a)}),e.click()}static takePictureByMobile(t){const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*;capture=camera"),e.addEventListener("change",e=>{const i=e.currentTarget;if(!i||!i.files)return;const a=i.files[0];if(!a)return;const s=document.createElement("img");s.addEventListener("error",()=>{alert("Fail to load image(mobile).")}),s.addEventListener("load",()=>{window.URL.revokeObjectURL(s.src);const e=document.createElement("canvas"),i=250;e.width=i,e.height=i;const a=e.getContext("2d");if(!a)return;let r,o;a.clearRect(0,0,i,i);let n=0,d=0;s.width>s.height?(r=Math.round(i*s.width/s.height),o=i,n=-Math.round((r-i)/2)):(o=Math.round(i*s.height/s.width),r=i,d=-Math.round((o-i)/2)),a.drawImage(s,n,d,r,o);const c=e.toDataURL("image/jpeg",.5),l=c.substr(23);t(l)},!1),s.setAttribute("src",window.URL.createObjectURL(a))}),e.click()}}var d=i("d257"),c=i("2c75");class l{static GetCardInfo(t){const e={pk:t};return c["a"].post("BizCard_GetCardInfo",e)}}var u=r["a"].extend({name:"Dashboard",data(){return{leftDrawerOpen:!1,watchGPSID:0,cardPK:"",firstName:"",lastName:"",photo:""}},methods:{notifyError(t){this.$q.notify({type:"negative",message:t})},onLogout(){sessionStorage.clear(),localStorage.clear(),this.$router.push({name:"Login"})},getCardInfo(){const t=d["a"].getRemeberMe();t?(this.$q.loading.show(),l.GetCardInfo(t).then(e=>{this.$q.loading.hide(),console.log(e.data),e.data.ok?this.$store.commit("UserStore/SET_USER",{pk:t,firstName:e.data.entity.firstName,lastName:e.data.entity.lastName,email:e.data.entity.email,photo:e.data.entity.photo}):(this.notifyError(e.data.message),this.$router.replace({name:"Login"}))}).catch(t=>{this.$q.loading.hide(),this.notifyError(t.message),this.$router.replace({name:"Login"})})):this.$router.replace({name:"Login"})},onScanReader(){if(this.$q.platform.is.cordova)n.scanQRCode(t=>{const e=t.lastIndexOf("/"),i=t.substring(e+1);this.scanReader(i)});else{const t="https://d3000disttest.azurewebsites.net/VisitorScan/#/ReaderDetail/986421AE7E69446FA7EDFC9180C051D820102",e=t.lastIndexOf("/"),i=t.substring(e+1);this.scanReader(i)}},scanReader(t){if(t.length<33)return;const e=t.substring(32,33),i=t.substring(0,32);switch(e){case"1":this.$router.push({name:"ElevatorReader",params:{id:i}});break;case"2":{if(t.length<37)return void this.notifyError("The parameter does not valid.");const e=t.substring(33,35),a=t.substring(35,37);this.$router.push({name:"UpDownReader",params:{id:i+e+a}})}break;default:this.$router.push({name:"DoorReader",params:{id:i}});break}}},mounted(){const t=this.$store.getters["UserStore/GET_USER"];t.pk?(this.cardPK=t.pk,this.firstName=t.firstName,this.lastName=t.lastName,this.photo=t.photo):this.getCardInfo()}}),h=u,p=(i("cc08"),i("2877")),m=Object(p["a"])(h,a,s,!1,null,"16f7a305",null);e["default"]=m.exports}}]);