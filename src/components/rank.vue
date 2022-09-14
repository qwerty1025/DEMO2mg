<template>
    <div class="">
     
        <v-card  class="overflow-y-auto h-screen mb-20" >
                        <v-row dense class=""   >
                            <div v-for="card in ts" :key="card.key"  > 
                                <v-card class="m-2" v-show="card.using == 'true'"> 
                                    <a class="rounded-xl text-lg bg-gray-100 w-1/3 px-2"> {{ card.tm_Name }} </a> 
                                    
                                    <!-- <a class="text-xs text-gray-800 px-1"> Af{{ card.key }}gdf - {{ card.using }} </a>  -->
                                    
                                    <div class="grid grid-cols-2 gap-0">  
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[1] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_1 }}</a>   
                                        </div>
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[2] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_2 }}</a>   
                                        </div>
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[3] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_3 }}</a>   
                                        </div>
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[4] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_4 }}</a>   
                                        </div>
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[5] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_5 }}</a>   
                                        </div>
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[6] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_6 }}</a>   
                                        </div>

                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[7] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_7 }}</a>   
                                        </div>
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[8] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_8 }}</a>   
                                        </div>
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[9] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_9 }}</a>   
                                        </div>
                                        <div class="col-span-1 flex p-2" > 
                                            <a class="text-xs text-gary-500 ">{{ playLv_Name[10] }}:</a>
                                            <a class="text-xs font-bold ">{{ card.score_10 }}</a>   
                                        </div>
                                    </div>  
                                </v-card>
                            </div >
                        </v-row>  
                    </v-card>

    
    </div>
</template>

<script>
import Vue from 'vue'
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)


import { StreamBarcodeReader } from "vue-barcode-reader";
import SeatDataService from "../services/SeatPrepareService";
import playLvService from "../services/playLvService";

export default {
    name: "HelloWorld",
    components: {
        StreamBarcodeReader,
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
 
            playLv_Scr:['','scUp_1','scUp_2','scUp_3','scUp_4','scUp_5','scUp_6','scUp_7','scUp_8'],
            playLv_Name:['null','保齡球','標靶','拔河 ','競速足球','烈焰地靶','騎馬射箭','生存戰','飛龍峽谷','延長賽','備用'],
            items: [ 'Appetizers', 'Entrees', 'Deserts', 'Cocktails', ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            //
            Lv_Ary:[ { text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' }], 
            //
            tsCNT: 0,
            //
            select: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            //
            temp_score:"",
            max_score: 100,
            min_score: 0,
            text: "",
            ts: [],
            id: null,
            score_tags: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '對抗贏家',
                '對抗失敗',
            ],
        };
    },
    props: {
        msg: String,
    },

    methods: {
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
                score_All: 2,
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

            for( let v=51 ; v <=56 ; v++  )
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
        Score_Mdf_byAdmin(item,n) {
            let OLD = { score_9: item.score_9 };
           
            switch(n) {
                case 1:
                OLD = { score_1: item.score_1 };
                    break;
                case 2:
                OLD = { score_2: item.score_2 };
                    break;
                case 3:
                OLD = { score_3: item.score_3 };
                    break;
                case 4:
                OLD = { score_4: item.score_4 };
                    break;
                case 5:
                OLD = { score_5: item.score_5 };
                    break;

                case 6:
                OLD = { score_6: item.score_6};
                    break;
                case 7:
                OLD = { score_7: item.score_7 };
                    break;
                case 8:
                OLD = { score_8: item.score_8 };
                    break;
                case 9:
                OLD = { score_9: item.score_9 };
                    break;
                case 10:
                OLD = { score_10: item.score_10 };
                    break;
                // default:
                //     陳述三;
                //     break;
            }
           
             

           SeatDataService.update(item.key, OLD)
               .then(() => {
                   Swal.fire({
                       position: 'top-end',
                       icon: 'success',
                       title: '改改改改改!',
                       text: '分數增加 調整',
                       showConfirmButton: false,
                       timer: 300
                   }) 
               })
               .catch((e) => {
                   console.log(e);
               }); 
       },

    //    Score_MdfAll_byAdmin(item,sta,end) {
           
    //         for( let v = sta ; v <= end ; v++ )
    //         {}
    //    },

        Addd_Score(key) {
           
            const OLD = {
                score: this.temp_score,
                // left_time: "",
                // memo:"",
                // ply_statu: "",
            }; 

            SeatDataService.update(key, OLD)
                .then(() => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: '修改完畢!',
                        text: '分數以增加 調整',
                        showConfirmButton: false,
                        timer: 1200
                    }) 
                })
                .catch((e) => {
                    console.log(e);
                }); 
        },
        Addd_Score_Mdf(key,score,n) {
           
           let OLD = { score_9: 199 };
           
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

        changQrCD(item) {
           
           const OLD = {
            tm_Name: item.tm_Name, 
            tm_amt: item.tm_amt,  
            memo: item.memo,
            using: item.using, 
           }; 

           SeatDataService.update(item.key, OLD)
               .then(() => {
                   Swal.fire({
                       position: 'top-end',
                       icon: 'success',
                       title: '修改完畢!',
                       text: '分數 調整好了',
                       showConfirmButton: false,
                       timer: 1200
                   }) 
               })
               .catch((e) => {
                Swal.fire({
                       position: 'top-end',
                       icon: 'success',
                       title: '修改....完畢!',
                       text: e,
                       showConfirmButton: false,
                       timer: 1200
                   }) 
               }); 
       },
       changQrCD_Mdf(item) { 
           const OLD = { 
            using: item.using, 
           }; 

           SeatDataService.update(item.key, OLD)
               .then(() => { 
               })
               .catch((e) => { 
               }); 
       },
       changQrCD_tm_Name(item) { 
           const OLD = { 
            tm_Name: item.tm_Name, 
            tm_amt: item.tm_amt, 
           }; 

           SeatDataService.update(item.key, OLD)
               .then(() => { 
                Swal.fire({
                       position: 'top-end',
                       icon: 'success',
                       title: '更新成功!',
                       text: '內容已上傳',
                       showConfirmButton: false,
                       timer: 1200
                   }) 
               })
               .catch((e) => { 
               }); 
       },
 
 
        saveDta() {

            var data = {
                uuid: "",
                score: '0',
                statu: "",
                memo: "",

            };

            SeatDataService.create(data)
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
 
<!--  

<script>
methods: {
        onDecode(result) { alert(result) },



    },

};
</script>-->
  