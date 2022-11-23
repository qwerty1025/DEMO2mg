<template>
    <div class=""> 
        <v-card  class="overflow-y-auto h-screen mb-20" >  
            <v-btn @click="Push_New()" dark color="#388E3C"> 提交Push_New()  </v-btn>  
                
        </v-card>

    
    </div>
</template>

<script>
// import Vue from 'vue'
// import VueQRCodeComponent from 'vue-qrcode-component'
// Vue.component('qr-code', VueQRCodeComponent)
 
// import { StreamBarcodeReader } from "vue-barcode-reader";
import SeatDataService from "../services/SeatPrepareService";
import playLvService from "../services/playLvService";
import kLooKDataService from "../services/kLooKDataService";



export default {
    name: "HelloWorld",
    components: {
         
    },
    data() {
        return {
            //系統面- 使用者設定
            selt_lv:'請設定關卡',
            // - - - - - 
            temp_nickName:'',  
            tabs: 'k1',
            //
            tab: 'tab-3',
            //fireBase 設定內容
            // - - - - - - - - - - - 
            BkingList:[],

            // - - - - - - - - - - - 
            nowBking:{
                play_Name:'',
                play_Amt:'',
                
                play_mainPd:'',
                play_exPd:'',

                play_PriceChk:'',
                play_PayType:1,

                time_bking:Date.now(),
                time_sta_DATE:'',
                time_sta_SeSSion:'',

                memo_play:'',
                memo_inside:'',
                memo_2:'', 
            },  
             

  

            pd_Type_idx: [ 'Appetizers', 'Entrees', 'Deserts', 'Cocktails', ],
            pd_status: [ 'Appetizers', 'Entrees', 'Deserts', 'Cocktails', ],
        };
    },
    props: {
        msg: String,
    },

    methods: {
        //  - - - - BKing - - - - 
        saveBKing_History(item) { 
        var data = { 
            play_Name: item.play_Name,
            play_Amt: item.play_Amt, 
            
            play_mainPd: item.play_mainPd, 
            play_exPd: item.play_exPd,  
            play_PriceChk: item.play_PriceChk,  
            play_PayType: item.play_PayType,
            
            time_bking: item.time_bking ,
            time_sta_DATE: item.time_sta_DATE,
            time_sta_SeSSion: item.time_sta_SeSSion,
            
            memo_play: item.memo_play,  
            memo_inside: item.memo_inside, 
            memo_2: item.memo_2,  
        };

        kLooKDataService.create(data)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '已新增成功',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: '沒有成功，請在嘗試一次',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        }, 
        deletekLooK(item) {
            kLooKDataService.delete(item.key)
            .then(() => {
            this.$emit("refreshList");
            })
            .catch((e) => {
            console.log(e);
            });
        },
        kLooKonDataChange(items) { 
            let _tutorials = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tutorials.push({
                    key: key,
                    play_Name: data.play_Name,
                    play_Amt: data.play_Amt, 
                    
                    play_mainPd: data.play_mainPd, 
                    play_exPd: data.play_exPd,  
                    play_PriceChk: data.play_PriceChk,  
                    play_PayType: data.play_PayType,
                    
                    time_bking: data.time_bking ,
                    time_sta_DATE: data.time_sta_DATE,
                    time_sta_SeSSion: data.time_sta_SeSSion,
                    
                    memo_play: data.memo_play,  
                    memo_inside: data.memo_inside, 
                    memo_2: data.memo_2,   
                    });
                });

            this.BkingList = _tutorials;
            // this.tsCNT = _tutorials.length;

            }, 
 
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
        
        Push_New() {
            
            const OLD = {
                name: 'Defult',
                score_1:0,
                score_2:0,
                score_3:0,
                score_4:0,
                score_5:0,
                score_6:0,
                score_7:0,
                score_8:0,
                score_9:0,
                score_10:0,
                 
                memo_1: "something",
                memo_2: "something",
                memo_3: "something",
                
                // lv_Name:["0","0","0","0"],
                // lv_score:[2,3,4,5],
                tm_Name: "null",
                tm_amt: 1,  
                using: '',
                rank_dtl:'',
            };

            for( let v=57 ; v <=69 ; v++  )
            { 
                const key = "UDM-N" + v
                SeatDataService.uqcrat(key, OLD)
                .then(() => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: '新增完畢!',
                        text: '分整',
                        showConfirmButton: false,
                        timer: 400
                    })

                })
                .catch((e) => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: '新增完畢!',
                        text: e,
                        showConfirmButton: false,
                        timer: 400
                    })
                }); 
            }  
        }, 

        //  - - - - Pd_content - - - - 
        savePd_content(item) { 
        var data = {  
            // 所有商品都先建立, 額外再讀取對應的 主從關係，比如外加商品...?
            pd_Name: item.pd_Name,
            pd_Type: item.pd_Type,
            pd_Price: item.pd_Price, 

            pd_SeSSion: item.pd_SeSSion, 
            pd_WeekSet: item.pd_WeekSet, 
            pd_ExPd_idx: item.pd_ExPd_idx, 

            memo_1: item.memo_1, 
            memo_2: item.memo_2, 
            
            pd_buildTime: item.pd_buildTime,
            pd_status   : item.pd_status,

            pd_onboard_SeSSion_sta: item.pd_onboard_SeSSion_sta,
            pd_onboard_SeSSion_end: item.pd_onboard_SeSSion_end, 
        };

        kLooKDataService.create(data)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '已新增成功',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: '沒有成功，請在嘗試一次',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        },
        
        Pd_contentonDataChange(items) { 
            let _tutorials = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tutorials.push({
                    key: key,
                    pd_Name: data.pd_Name,
                    pd_Type: data.pd_Type,
                    pd_Price: data.pd_Price, 

                    pd_SeSSion: data.pd_SeSSion, 
                    pd_WeekSet: data.pd_WeekSet, 
                    pd_ExPd_idx: data.pd_ExPd_idx, 

                    memo_1: data.memo_1, 
                    memo_2: data.memo_2, 
                    
                    pd_buildTime: data.pd_buildTime,
                    pd_status   : data.pd_status,

                    pd_onboard_SeSSion_sta: data.pd_onboard_SeSSion_sta,
                    pd_onboard_SeSSion_end: data.pd_onboard_SeSSion_end,  
                });
            });

            this.BkingList = _tutorials;
            // this.tsCNT = _tutorials.length;

            }, 
        

        
    },
    mounted() {
        // SeatDataService.getAll().on("value", this.onDataChange);
        kLooKDataService.getAll().on("value", this.kLooKonDataChange);
    },
    beforeDestroy() {
        kLooKDataService.getAll().off("value", this.kLooKonDataChange);
        // SeatDataService.getAll().off("value", this.onDataChange);
    },
};
</script>

<style scoped>
     

</style>
  
  