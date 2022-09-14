<template>
    <div class="">
     
        <!-- qque: 
{{ qque }}
<br>

{{ qqN[0] }}
<hr>
{{ qqN[1] }}

<hr>
ts:{{ ts.id }} \\\ {{ ts.name}} -->

{{ tss }}
<v-btn @click="Push_New()"></v-btn>
    
    </div>
</template>

<script>
import Vue from 'vue'
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)


// import { StreamBarcodeReader } from "vue-barcode-reader";
import SeatDataService from "../services/SeatPrepareService";
import playLvService from "../services/playLvService";

export default {
    name: "HelloWorld",
     
    
    data() {
        return {
            //系統面- 使用者設定
            ts:[],
            tss:[],
            // - - - - - 
            temp_nickName:'',  
            qque: '',
            qqN: [],
            //
            tab: 'tab-3', 
 
             
        };
    },
    props: {
        msg: String,
    },
    // watch: {
    //             '$route.query.q'() {
    //                 //do something here
    //                 let id = this.$route.params.id
    //                 this.qque =id
    //             }
    // },
    methods: {
        onDC() {

            let _tus = this.$route.params.id.split('&');
            let kk = {
                    id: _tus[0].split('=')[1],
                    name: _tus[1].split('=')[1],
                     
                };
            // items.forEach((item) => {
            //     // let id = item.id;
            //     // let data = item.val();
                
            // });

            this.ts = kk;
            // this.tsCNT = _tutorials.length;

            },
        deleteTeam(item) {
            SeatDataService.delete(item.key)
            .then(() => {
            this.$emit("refreshList");
            })
            .catch((e) => {
            console.log(e);
            });
        },
        Push_New() {
            
            const OLD = {
                // score_All: 2,
                // score_1:0,
                // score_2:0,
                // score_3:0,
                // score_4:0,
                // score_5:0,
                // score_6:0,
                // score_7:0,
                // score_8:0,
                // score_9:0,
                // score_10:0,
                 
                memo_1: "something",
                // memo_2: "something",
                // memo_3: "something",
                
                // // lv_Name:["0","0","0","0"],
                // // lv_score:[2,3,4,5],
                // tm_Name: "null",
                // tm_amt: 1,  
                // using: '',
                // rank_dtl:'',
            };

            for( let v=10 ; v <=12 ; v++  )
            { 
                const key = "ST-K" + v
                playLvService.uqcrat(key, OLD)
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
        playLvonDataChange(items) {

            let _tutorials = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tutorials.push({
                    key: key,
                  

                    memo_1: data.memo_1, 
                });
            });

            this.tss = _tutorials;
            // this.tsCNT = _tutorials.length;

            },
    },
    mounted() {
        // this.qque = this.$route.params.id;
        // this.qqN = this.$route.params.id.split('&') ;
        // this.onDC();
        


        // SeatDataService.getAll().on("value", this.onDataChange);
        playLvService.getAll().on("value", this.playLvonDataChange);
    },
    beforeDestroy() {
        SeatDataService.getAll().off("value", this.onDataChange);
    },
};
</script>