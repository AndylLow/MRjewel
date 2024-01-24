"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3372],{5121:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(74865),i=a.n(s);const n={metaInfo:{title:"Edit Adjustment"},data:function(){return{focused:!1,timer:null,search_input:"",product_filter:[],isLoading:!0,SubmitProcessing:!1,warehouses:[],products:[],details:[],adjustment:{id:"",notes:"",warehouse_id:"",date:""},product:{id:"",code:"",current:"",quantity:1,name:"",product_id:"",detail_id:"",product_variant_id:"",del:"",unit:""}}},methods:{handleFocus:function(){this.focused=!0},handleBlur:function(){this.focused=!1},search:function(){var t=this;if(this.timer&&(clearTimeout(this.timer),this.timer=null),this.search_input.length<1)return this.product_filter=[];""!=this.adjustment.warehouse_id&&null!=this.adjustment.warehouse_id?this.timer=setTimeout((function(){var e=t.products.filter((function(e){return e.code===t.search_input||e.barcode.includes(t.search_input)}));1===e.length?t.SearchProduct(e[0]):t.product_filter=t.products.filter((function(e){return e.name.toLowerCase().includes(t.search_input.toLowerCase())||e.code.toLowerCase().includes(t.search_input.toLowerCase())||e.barcode.toLowerCase().includes(t.search_input.toLowerCase())}))}),800):this.makeToast("warning",this.$t("SelectWarehouse"),this.$t("Warning"))},getResultValue:function(t){return t.code+" ("+t.name+")"},SearchProduct:function(t){this.product={},this.details.length>0&&this.details.some((function(e){return e.code===t.code}))?this.makeToast("warning",this.$t("AlreadyAdd"),this.$t("Warning")):(this.product.code=t.code,this.product.current=t.qte,t.qte<1?this.product.quantity=t.qte:this.product.quantity=1,this.product.product_variant_id=t.product_variant_id,this.Get_Product_Details(t.id)),this.search_input="",this.$refs.product_autocomplete.value="",this.product_filter=[]},Submit_Adjustment:function(){var t=this;this.$refs.Edit_adjustment.validate().then((function(e){e?t.Update_Adjustment():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},getValidationState:function(t){var e=t.dirty,a=t.validated,s=t.valid;return e||a?void 0===s?null:s:null},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},Get_Products_By_Warehouse:function(t){var e=this;i().start(),i().set(.1),axios.get("Products/Warehouse/"+t+"?stock=0").then((function(t){e.products=t.data,i().done()})).catch((function(t){}))},add_product:function(){this.details.length>0?this.detail_order_id():0===this.details.length&&(this.product.detail_id=1),this.details.push(this.product)},Verified_Qty:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id===e&&(isNaN(t.quantity)&&(this.details[a].quantity=t.current),"sub"==t.type&&t.quantity>t.current?(this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")),this.details[a].quantity=t.current):this.details[a].quantity=t.quantity);this.$forceUpdate()},increment:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&("sub"==t.type&&t.quantity+1>t.current?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[a].quantity++,2));this.$forceUpdate()},decrement:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&t.quantity-1>0&&("sub"==t.type&&t.quantity-1>t.current?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[a].quantity--,2));this.$forceUpdate()},formatNumber:function(t,e){var a=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return a[0];var s=a[1]||"";if(s.length>e)return"".concat(a[0],".").concat(s.substr(0,e));for(;s.length<e;)s+="0";return"".concat(a[0],".").concat(s)},Remove_Product:function(t){for(var e=0;e<this.details.length;e++)t===this.details[e].detail_id&&this.details.splice(e,1)},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""!=this.details[e].quantity&&0!==this.details[e].quantity||(t+=1);return!(t>0)||(this.makeToast("warning",this.$t("AddQuantity"),this.$t("Warning")),!1)},Update_Adjustment:function(){var t=this;if(this.verifiedForm()){this.SubmitProcessing=!0,i().start(),i().set(.1);var e=this.$route.params.id;axios.put("adjustments/".concat(e),{warehouse_id:this.adjustment.warehouse_id,date:this.adjustment.date,notes:this.adjustment.notes,details:this.details}).then((function(e){i().done(),t.SubmitProcessing=!1,t.$router.push({name:"index_adjustment"}),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success"))})).catch((function(e){i().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))}},detail_order_id:function(){this.product.detail_id=0;var t=this.details.length;this.product.detail_id=this.details[t-1].detail_id+1},Selected_Warehouse:function(t){this.search_input="",this.product_filter=[],this.Get_Products_By_Warehouse(t)},Get_Product_Details:function(t){var e=this;axios.get("Products/"+t).then((function(t){e.product.del=0,e.product.id=0,e.product.product_id=t.data.id,e.product.name=t.data.name,e.product.type="add",e.product.unit=t.data.unit,e.add_product()}))},GetElements:function(){var t=this,e=this.$route.params.id;axios.get("adjustments/".concat(e,"/edit")).then((function(e){t.adjustment=e.data.adjustment,t.details=e.data.details,t.warehouses=e.data.warehouses,t.Get_Products_By_Warehouse(t.adjustment.warehouse_id),t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};const r=(0,a(51900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:t.$t("EditAdjustement"),folder:t.$t("ListAdjustments")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("validation-observer",{ref:"Edit_adjustment"},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Adjustment.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("b-card",[a("b-row",[a("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"warehouse",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("warehouse")+" *"}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),disabled:t.details.length>0,reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Warehouse},model:{value:t.adjustment.warehouse_id,callback:function(e){t.$set(t.adjustment,"warehouse_id",e)},expression:"adjustment.warehouse_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,935377333)})],1),t._v(" "),a("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("date")+" *"}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"date-feedback",type:"date"},model:{value:t.adjustment.date,callback:function(e){t.$set(t.adjustment,"date",e)},expression:"adjustment.date"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2238917526)})],1),t._v(" "),a("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[a("h6",[t._v(t._s(t.$t("ProductName")))]),t._v(" "),a("div",{staticClass:"autocomplete",attrs:{id:"autocomplete"}},[a("input",{ref:"product_autocomplete",staticClass:"autocomplete-input",attrs:{placeholder:t.$t("Scan_Search_Product_by_Code_Name")},on:{input:function(e){return t.search_input=e.target.value},keyup:function(e){return t.search(t.search_input)},focus:t.handleFocus,blur:t.handleBlur}}),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"autocomplete-result-list"},t._l(t.product_filter,(function(e){return a("li",{staticClass:"autocomplete-result",on:{mousedown:function(a){return t.SearchProduct(e)}}},[t._v(t._s(t.getResultValue(e)))])})),0)])]),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[a("thead",{staticClass:"bg-gray-300"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CodeProduct")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CurrentStock")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("type")))]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("i",{staticClass:"fa fa-trash"})])])]),t._v(" "),a("tbody",[t.details.length<=0?a("tr",[a("td",{attrs:{colspan:"7"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(e){return a("tr",{key:e.detail_id,class:{row_deleted:1===e.del}},[a("td",[t._v(t._s(e.detail_id))]),t._v(" "),a("td",[t._v(t._s(e.code))]),t._v(" "),a("td",[t._v("("+t._s(e.name)+")")]),t._v(" "),a("td",[a("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(e.current)+" "+t._s(e.unit))])]),t._v(" "),a("td",[a("div",{staticClass:"quantity"},[a("b-input-group",[a("b-input-group-prepend",[a("span",{staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.decrement(e,e.detail_id)}}},[t._v("-")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0,max:e.current,disabled:1===e.del},domProps:{value:e.quantity},on:{keyup:function(a){return t.Verified_Qty(e,e.detail_id)},input:function(a){a.target.composing||t.$set(e,"quantity",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),a("b-input-group-append",[a("span",{staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.increment(e,e.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"detail.type"}],staticClass:"form-control",attrs:{type:"text",required:""},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"type",a.target.multiple?s:s[0])},function(a){return t.Verified_Qty(e,e.detail_id)}]}},[a("option",{attrs:{value:"add"}},[t._v(t._s(t.$t("Addition")))]),t._v(" "),a("option",{attrs:{value:"sub"}},[t._v(t._s(t.$t("Subtraction")))])])]),t._v(" "),a("td",[a("a",{staticClass:"btn btn-icon btn-sm",attrs:{title:"Delete"},on:{click:function(a){return t.Remove_Product(e.detail_id)}}},[a("i",{staticClass:"i-Close-Window text-25 text-danger"})])])])}))],2)])])]),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{staticClass:"mt-4",attrs:{label:t.$t("Note")}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.adjustment.notes,expression:"adjustment.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.adjustment.notes},on:{input:function(e){e.target.composing||t.$set(t.adjustment,"notes",e.target.value)}}})])],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",[a("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Adjustment}},[t._v(t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);