<template>
    <div class=""> 
        <v-card v-scroll.self="onScroll" class="overflow-y-auto h-screen">  
                     <v-row align="center" class=" m-10 text-s">
                         <div class="grid grid-cols-2 gap-1"> 
                             <div class="col-span-1 flex p-4 bg-gray-100 ">
                                 掃描結果 : {{ text || "點擊螢幕啟動" }}
                             </div> 
                         </div> 
                     </v-row> 
                     <StreamBarcodeReader  
                        @decode="(a, b, c) => onDecode(a, b, c)" 
                        @loaded="() => onLoaded()"
                        :track="false"
                        :paused="paused"
                        >
                    </StreamBarcodeReader>
 

 
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
            selt_lv:'10',
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
        // onDecode (result) { alert(result) },
        onDecode(a, b, c) {
            console.log(a, b, c);
            this.text = a;
            Swal.fire({
                       position: 'top-end',
                       icon: 'success',
                       title: '分!',
                       text: '恭喜  " '+this.text+'關卡' ,
                       showConfirmButton: true,
                    //    timer: 1200
                   }) 
            // if (this.id) clearTimeout(this.id);
            // this.id = setTimeout(() => {
            //     if (this.text === a) {
            //         this.text = "";
            //     }
            // }, 5000);
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
  