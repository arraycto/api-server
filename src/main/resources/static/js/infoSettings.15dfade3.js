(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["infoSettings"],{"01f7":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"account-settings-info-view"},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{md:20}},[t("a-form",{attrs:{form:a.form}},[t("a-form-item",a._b({attrs:{label:"姓名"}},"a-form-item",a.formLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,message:"请输入姓名!"}]}],expression:"['nickname',{ rules: [{ required: true, message: '请输入姓名!' }]}]"}],attrs:{placeholder:"给自己起个名字"}})],1),t("avatar-upload",{attrs:{imgPath:a.avatar,itemLabel:"头像",formItemLayout:a.formLayout},on:{"update:imgPath":function(e){a.avatar=e},"update:img-path":function(e){a.avatar=e}}}),t("a-form-item",a._b({attrs:{label:"简介"}},"a-form-item",a.formLayout,!1),[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["intro"],expression:"['intro' ]"}],attrs:{rows:"4",placeholder:"You are not alone."}})],1),t("a-form-item",a._b({attrs:{label:"手机"}},"a-form-item",a.formLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{validateFirst:!0,rules:[{required:!0,message:"请输入电话号码!"},{pattern:/^[1][3,4,5,6,7,8,9][0-9]{9}$/,message:"请输入格式正确的手机号"}]}],expression:"['phone',{validateFirst: true, rules: [{ required: true, message: '请输入电话号码!' },\n                                                                {pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/, message: '请输入格式正确的手机号'}\n            ]} ]"}],attrs:{placeholder:"15238002477"}})],1),t("a-form-item",a._b({attrs:{label:"电子邮件"}},"a-form-item",a.formLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{validateFirst:!0,rules:[{required:!0,message:"请输入电子邮箱地址!"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"请输入格式正确的邮箱地址"}]}],expression:"['email',{validateFirst: true, rules: [{ required: true, message: '请输入电子邮箱地址!' },\n                                                                {pattern: /^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/, message: '请输入格式正确的邮箱地址'}\n            ]} ]"}],attrs:{placeholder:"exp@admin.com"}})],1),t("a-form-item",[t("a-row",[t("a-col",{attrs:{xs:24,sm:4}}),t("a-col",{attrs:{xs:24,sm:19}},[t("a-button",{attrs:{type:"primary",loading:a.btnLoading},on:{click:a.handleBtnClick}},[a._v("保存")])],1)],1)],1)],1)],1)],1)],1)},i=[],o=(t("d3b7"),t("5723")),n=t("2312"),s={name:"Info",components:{AvatarUpload:n["a"]},data:function(){return{form:this.$form.createForm(this),formLayout:{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:19}}},avatarLoading:!1,btnLoading:!1,avatar:""}},created:function(){this.initUserInfo()},methods:{initUserInfo:function(){var a=this,e=this.$store.getters.userInfo;this.avatar=e.avatar,this.$nextTick((function(){a.form.setFieldsValue({nickname:e.nickname,phone:e.phone,email:e.email,intro:e.intro})}))},handleBtnClick:function(){var a=this;this.form.validateFields((function(e,t){e||(delete t.imgFile,t.avatar=a.avatar,a.btnLoading=!0,Object(o["m"])(t).then((function(e){e.status&&a.$store.dispatch("GetInfo").then((function(a){})).catch((function(){}))})).finally((function(){a.btnLoading=!1})))}))}}},l=s,m=t("2877"),u=Object(m["a"])(l,r,i,!1,null,null,null);e["default"]=u.exports},2312:function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-form-item",a._b({attrs:{label:a.itemLabel}},"a-form-item",a.formItemLayout,!1),[t("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["imgFile",{rules:[{required:a.mustUpload,validator:a.fileRequiredValidator}]}],expression:"['imgFile',{ rules: [{required:mustUpload, validator: fileRequiredValidator }]}]"}],staticClass:"avatar-uploader",attrs:{name:"file",accept:"image/*",headers:a.uploadHeaders,listType:"picture-card",showUploadList:!1,action:a.fileServer+"/file/upload",beforeUpload:a.handleBeforeUpload},on:{change:a.handleUploadChange}},[a.imgPath?t("img",{style:{width:"100%"},attrs:{src:this.fileServer+"/"+a.imgPath,alt:"upload image"}}):t("div",[t("a-icon",{attrs:{type:a.loading?"loading":"plus"}}),t("div",{staticClass:"ant-upload-text"},[a._v("上传")])],1)])],1)},i=[],o=t("8bbf"),n=t.n(o),s=t("9fb0"),l={name:"ImgUpload",data:function(){return{uploadHeaders:{authorization:n.a.ls.get(s["a"])},loading:!1}},activated:function(){},props:{mustUpload:{type:Boolean,default:!0},itemLabel:{type:String,default:"图片"},imgPath:{type:String},formItemLayout:{type:Object,default:function(){return{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}}}}},methods:{fileRequiredValidator:function(a,e,t){var r=this;this.mustUpload?this.$nextTick((function(){r.loading||r.imgPath?t():t(new Error("请选择图片上传"))})):t()},handleUploadChange:function(a){if("uploading"===a.file.status)return this.loading=!0,void this.$emit("update:imgPath","");"done"===a.file.status&&(this.loading=!1,a.file.response.status&&this.$emit("update:imgPath",a.file.response.data))},handleBeforeUpload:function(a){var e="image/jpeg"===a.type,t="image/png"===a.type;e||t||this.$message.error("仅能上传  JPG/PNG 文件!");var r=a.size/1024/1024<2;return r||this.$message.error("上传文件必须小于 2MB!"),(e||t)&&r}}},m=l,u=t("2877"),d=Object(u["a"])(m,r,i,!1,null,"2ddf039e",null);e["a"]=d.exports}}]);