<template>
    <div class=""> 
        <v-card v-scroll.self="onScroll" class="overflow-y-auto h-screen"> 
                     <StreamBarcodeReader @decode="(a, b, c) => onDecode(a, b, c)" @loaded="() => onLoaded()"></StreamBarcodeReader>
 
 
                     <v-row align="center" class=" m-10 text-s">
                         <div class="grid grid-cols-2 gap-1"> 
                             <div class="col-span-1 flex p-4 bg-gray-100 ">
                                 掃描結果 : {{ text || "點擊螢幕啟動" }}
                             </div>
                             <div class="col-span-1 flex p-4">
                                 <!-- {{ selt_lv }} -->
                                 <select v-model="selt_lv"
                                         class="text-blue-600 bg-blue-100 
                                            appearance-none border-none 
                                            inline-block py-2 pl-2 pr-2 rounded 
                                            leading-tight w-full">

                                     <option value="請設定關卡" selected>請設定關卡</option>
                                     <option value="1">保齡球 </option>
                                     <option value="2">標靶</option> 

                                     <option value="3">拔河 </option> 
                                     <option value=4>競速足球 </option>

                                     <option value=5>烈焰地靶 </option>
                                     <option value=6>騎馬射箭 </option>

                                     <option value=7>生存戰 </option>
                                     <option value=8>飛龍峽谷 </option> 
                                     
                                     <option value=9>延長賽 </option>
                                     <option value=10>備用 </option>  
                                 </select>
                                 <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                 <i class="fas fa-chevron-down text-gray-400"></i>
                                 </div>
                             </div> 
                         </div>
                         
                     
                         <div class="col-span-3 flex flex-row pl-5"> 
                             <a class="mt-2.5">本關分數：</a>
                             <v-text-field 
                                 v-model="temp_score" 
                                 class="mt-0 pt-0 m-10" 
                                 type="number"
                                 clear solo single-line 
                                 label="請輸入成績" 
                                 placeholder="請輸入成績" >
                             </v-text-field> 
                             <v-btn class="mt-2 ml-4" @click="Addd_Score_Mdf(text,temp_score,selt_lv)" dark color="#388E3C"> 修改 </v-btn> 
                         </div>
                     </v-row> 

 
                 </v-card>
     
         
    
    </div>
</template>

<script>
import Vue from 'vue'
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)


import { StreamBarcodeReader } from "vue-barcode-reader";
import SeatDataService from "../../services/SeatPrepareService";
import playLvService from "../../services/playLvService";

export default {
    name: "HelloWorld",
    components: {
        StreamBarcodeReader,
    },
    data() {
        return {
            //系統面- 使用者設定
            // - - - - - 
            selt_lv:'3',
            text: "",
            // - - - - - 
            // - - - - - 
            // - - - - -  
            tab: 'tab-1',  

            playLv_Name:['null','保齡球','標靶','拔河 ','競速足球','烈焰地靶','騎馬射箭','生存戰','飛龍峽谷','延長賽','備用'],
              
            Lv_Ary:[ { text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' }], 
            //
            tsCNT: 0,  
            //
            temp_score:"",
            max_score: 100,
            min_score: 0, 
            ts: [],
            id: null, 
        };
    },
    props: {
        msg: String,
    },

    methods: { 
        Addd_Score_Mdf(key,score,n) { 
           let OLD = { score_9: 0 };  
            switch(n) {
                case '1':
                OLD = { score_1: score };
                    break;
                case '2':
                OLD = { score_2: score };
                    break;
                case '3':
                OLD = { score_3: score };
                    break;
                case '4':
                OLD = { score_4: score };
                    break;
                case '5':
                OLD = { score_5: score };
                    break;
                    
                case '6':
                OLD = { score_6: score};
                    break;
                case '7':
                OLD = { score_7: score };
                    break;
                case '8':
                OLD = { score_8: score };
                    break;
                case '9':
                OLD = { score_9: score };
                    break;
                case '10':
                OLD = { score_10: score };
                    break;
                // default:
                //     陳述三;
                //     break;
            }

            let tm_Name_ary=['?','籃隊','紅隊','黃隊','綠隊','紫隊','咖啡隊'];
            let vv = 9;
            switch(key) {
                case 'UDM-N51':
                vv = 1;
                    break;
                case 'UDM-N52':
                vv = 2;
                    break;
                case 'UDM-N53':
                vv = 3;
                    break;
                case 'UDM-N54':
                vv = 4;
                    break;
                case 'UDM-N55':
                vv = 5;
                    break; 
                case 'UDM-N56':
                vv = 6;
                    break;
                case 'UDM-N57':
                vv = 7;
                    break;
                case 'UDM-N58':
                vv = 8;
                    break;
                case 'UDM-N59':
                vv = 9;
                    break;
                case 'UDM-N60':
                vv = 10;
                    break;
                // default:
                //     陳述三;
                //     break;
            } 
           SeatDataService.update(key, OLD)
               .then(() => {
                   Swal.fire({
                       position: 'top-end',
                       icon: 'success',
                       title: score+'分!',
                       text: '恭喜  " '+tm_Name_ary[vv] +' " 完成'+ this.playLv_Name[n]+'關卡' ,
                       showConfirmButton: true,
                    //    timer: 1200
                   }) 
               })
               .catch((e) => {
                   console.log(e);
               }); 
       },
 
        // onDecode (result) { alert(result) },
        onDecode(a, b, c) {
            console.log(a, b, c);
            this.text = a;
            if (this.id) clearTimeout(this.id);
            this.id = setTimeout(() => {
                if (this.text === a) {
                    this.text = "";
                }
            }, 5000);
        },
        onLoaded() {
            console.log("load");
        },

        playLvonDataChange(items) {

        let _tutorials = [];
        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            _tutorials.push({
                key: key,
                LvAry: data.LvAry, 
            });
        });

        this.Lv_Ary = _tutorials;
        this.Lv_AryCNT = _tutorials.length;

        },
        onDataChange(items) {

            let _tutorials = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tutorials.push({
                    key: key,
                    score_1: data.score_1,
                    score_2: data.score_2,

                    score_3: data.score_3,
                    score_4: data.score_4,

                    score_5: data.score_5,
                    score_6: data.score_6,

                    score_7: data.score_7,
                    score_8: data.score_8,

                    score_9: data.score_9,
                    score_10: data.score_10, 

                    tm_Name: data.tm_Name,
                    tm_amt: data.tm_amt, 

                    using: data.using,
 
                    memo_1: data.memo_1, 
                });
            });

            this.ts = _tutorials;
            this.tsCNT = _tutorials.length;

        },
    },
    mounted() {
        SeatDataService.getAll().on("value", this.onDataChange);
        playLvService.getAll().on("value", this.playLvonDataChange);
    },
    beforeDestroy() {
        SeatDataService.getAll().off("value", this.onDataChange);
    },
};
</script>

<style scoped>
     

</style>
  