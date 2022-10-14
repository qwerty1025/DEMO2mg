<template>
    <div class=""> 
        <div class="mt-10">
            <div class="row">
                <div class="col s12">
                    <div class="carousel carousel-slider" data-indicators="true">
                        <a class="carousel-item" href="#one!">
                            <img src="https://picsum.photos/800/400/?random=1">					
                        </a>
                        <a class="carousel-item" href="#two!">
                            <img src="https://picsum.photos/800/400/?random=2">
                        </a>
                        <a class="carousel-item" href="#three!"><img src="https://picsum.photos/800/400/?random=3"></a>
                        <a class="carousel-item" href="#four!"><img src="https://picsum.photos/800/400/?random=4"></a>
                    </div>
                </div>
            </div>
        </div>
        <v-card  class="overflow-y-auto h-screen mb-20" >
             

                <!-- <div v-for="card in ts" :key="card.key"  > 
                    <v-card class="m-2" v-show="card.using == 'true'" :color="card.tm_Color "> 
                        <a class="rounded-xl text-lg bg-gray-100 w-1/3 px-1"> {{ card.tm_Name }} </a> 
                            
                        <div class="grid grid-cols-2 gap-0">  
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[1] == 'true'"> 
                                <a class="text-xs text-gary-500 "  >{{ pLv_Names[1] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_1 }}</a>   
                            </div>
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[2] == 'true'">  
                                <a class="text-xs text-gary-500 " >{{ pLv_Names[2] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_2 }}</a>   
                            </div>
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[3] == 'true'">  
                                <a class="text-xs text-gary-500 " >{{ pLv_Names[3] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_3 }}</a>   
                            </div>
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[4] == 'true'"> 
                                <a class="text-xs text-gary-500 " >{{ pLv_Names[4] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_4 }}</a>   
                            </div>
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[5] == 'true'">  
                                <a class="text-xs text-gary-500 " >{{ pLv_Names[5] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_5 }}</a>   
                            </div>
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[6] == 'true'"> 
                                <a class="text-xs text-gary-500 " >{{ pLv_Names[6] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_6 }}</a>   
                            </div>

                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[7] == 'true'">  
                                <a class="text-xs text-gary-500 "  >{{ pLv_Names[7] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_7 }}</a>   
                            </div>
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[8] == 'true'">  
                                <a class="text-xs text-gary-500 "  >{{ pLv_Names[8] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_8 }}</a>   
                            </div>
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[9] == 'true'">  
                                <a class="text-xs text-gary-500 "  >{{ pLv_Names[9] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_9 }}</a>   
                            </div>
                            <div class="col-span-1 flex p-2" v-show="pLv_Loading[10] == 'true'"> 
                                <a class="text-xs text-gary-500 "  >{{ pLv_Names[10] }}:</a>
                                <a class="text-xs font-bold ">{{ card.score_10 }}</a>   
                            </div>
                        </div>  
                    </v-card>
                </div >  --> 
                
                <div class="flex flex-row justify-end mr-3">
                    <span class="bg-gray-200 rounded px-1 py-1 mx-1 text-xs font-bold " v-for="n in 10" v-if=" n>0  && pLv_Loading[n]=='true' "  >
                        {{ pLv_Names[n]  }}
                    </span> 
                </div> 
                <div v-for="card in ts" :key="card.key"  > 
                    <v-card class="m-2" v-show="card.using == 'true'" >  
                        <div class=" flex flex-cols">  
                            <v-chip large class="rounded-xl text-lg bg-gray-100 px-1" :color="card.tm_Color" outlined label > {{ card.tm_Name }} </v-chip> 
                            <div class="flex flex-col-reverse p-2  " v-show="pLv_Loading[1] == 'true'">  
                                <div class="text-xs text-gray-300 truncate"  >{{ pLv_Names[1] }}</div>
                                <div class="text-lg font-bold items-center">{{ card.score_1 }}</div>   
                            </div>

                            <div class="flex flex-col-reverse p-2  " v-show="pLv_Loading[2] == 'true'">  
                                <div class="text-xs text-gray-300 truncate"  >{{ pLv_Names[2] }}</div>
                                <div class="text-lg font-bold items-center">{{ card.score_2 }}</div>   
                            </div>

                            <div class="flex flex-col-reverse p-2  " v-show="pLv_Loading[3] == 'true'">  
                                <div class="text-xs text-gray-300 truncate"  >{{ pLv_Names[3] }}</div>
                                <div class="text-lg font-bold  items-center">{{ card.score_3 }}</div>   
                            </div>

                            <div class="flex flex-col-reverse p-2  " v-show="pLv_Loading[4] == 'true'">  
                                <div class="text-xs text-gray-300 truncate"  >{{ pLv_Names[4] }}</div>
                                <div class="text-lg font-bold items-center">{{ card.score_4 }}</div>   
                            </div>

                            <div class="flex flex-col-reverse p-2  " v-show="pLv_Loading[5] == 'true'">  
                                <div class="text-xs text-gray-300 truncate"  >{{ pLv_Names[5] }}</div>
                                <div class="text-lg font-bold  items-center">{{ card.score_5 }}</div>   
                            </div> 
                        </div>  
                    </v-card>
                </div > 
        </v-card>  
        
        <hr>
                {{ ts }}
    </div>
</template>

<script>
import Vue from 'vue'
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)


import { StreamBarcodeReader } from "vue-barcode-reader";
import SeatDataService from "../services/SeatPrepareService";
import playLvService from "../services/playLvService";

import pLv from "../assets/hs.json";


export default {
    name: "HelloWorld",
    computed: {
        pLv_Names() { return pLv.a.map((item) => { return item.playLv_Name; }) },
        pLv_Loading() { return pLv.a.map((item) => { return item.playLv_Loading; }) }
    },
    components: {
        StreamBarcodeReader,
    },
    data() {
        return {

            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
                ],
                slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
                ],
            //系統面- 使用者設定
            selt_lv:'請設定關卡',
            // - - - - - 
            temp_nickName:'',  
            tabs: 'k1',
            //
            tab: 'tab-2', 
            swatches:
[
           ['#22c55e','#fcd34d','#e11d48','#db2777','#f9a8d4'],
           ['#d97706','#991b1b','#7c2d12','#afbbc9','#2d3748'],
           ['#22d3ee','#a5f3fc','#1e40af','#4f46e5','#93c5fd'], 
],
            // swatches: [
            //     ['#FF0000', '#AA0000', '#550000'],
            //     ['#FFFF00', '#AAAA00', '#555500'],
            //     ['#00FF00', '#00AA00', '#005500'],
            //     ['#00FFFF', '#00AAAA', '#005555'],
            //     ['#0000FF', '#0000AA', '#000055'],
            // ],
 
            // playLv_Scr:['','scUp_1','scUp_2','scUp_3','scUp_4','scUp_5','scUp_6','scUp_7','scUp_8','scUp_9','scUp_10','scUp_11'],
            playLv_Scr_Mdf:['','scUp/1','scUp/2','scUp/3','scUp/4','scUp/5','scUp/6','scUp/7','scUp/8','scUp/9','scUp/10','scUp/11'],
            playLv_Name:['null','射騎英雄','標靶','騎士戰場','保齡球','拔河 ','競速足球','烈焰地靶','生存戰','飛龍峽谷','延長賽','備用'],
            playLv_Loading:['null',"true","true","true","false","false","false","false","false","false"],
            
            tm_Name_ary:['?','紅隊','咖啡隊','黃隊','綠隊','籃隊','紫隊'],
             items: [ 'Appetizers', 'Entrees', 'Deserts', 'Cocktails', ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            //
            Lv_Ary:[ { text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' },{ text: '請設定關卡' }], 
            History_Ary:[],
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

            let tm_Name_ary=this.tm_Name_ary;
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
            tm_Color: item.tm_Color, 
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
       saveHistory(lv,s,m) { 
        var data = {
            time: Date.now() ,
            play_lv: lv,
            play_tm: m, 
            play_score: s,
            statu: 1,
            memo:'null',
            
        };

        playLvService.create(data)
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
                play_lv:data.play_lv,
                play_tm:data.play_tm,
                play_score: data.play_score,
                statu: data.statu,
                time: data.time,
                memo: data.memo,
            });
        });

        this.History = _tutorials;
        // this.Lv_AryCNT = _tutorials.length;

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
                    tm_Color: data.tm_Color,

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
        $(document).ready(function(){ 
        $('.carousel').carousel({ 
            fullWidth: true, 
            indicators: true 
        }); 
        autoplay(); 
        function autoplay() { 
            $('.carousel').carousel('next'); 
            setTimeout(autoplay, 4500); 
        }; 
        }); 
    },
    beforeDestroy() {
        SeatDataService.getAll().off("value", this.onDataChange);
    },
};
</script>

<style scoped>
     #carousel {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
}
.slide-indicators {
  display: flex;
  justify-content: center;
}
.slide-indicator {
  height: 44px;
  width: 50px;
  display: flex;
  justify-items: center;
  cursor: pointer;
}
.slide-indicator:after {
  content: "";
  background-color: #878787;
  height: 10px;
  margin-top: 10px;
  width: 40px;
}
.slide-indicator.active:after,
.slide-indicator:hover:after {
  background-color: #000000;
}
.slide-banner {
  background-color: #000000;
  color: #ffffff;
  position: absolute;
  left: 0;
  bottom: 20px;
  padding: 15px;
  font-size: 2.5vw;
}
.slide-banner a {
  color: #ffffff;
}
#slide-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 10px;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
.slide {
  scroll-snap-align: center;
  position: relative;
  min-width: 100%;
  padding-top: 50%;
}
.slide img {
  height: 100%;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
}
.arrow {
  color: #ffffff;
  height: 20px;
  width: 20px;
  background-color: #000000;
  position: absolute;
  padding: 10px;
  opacity: 0.3;
  cursor: pointer;
}
.arrow.back {
  left: 10px;
  top: 10px;
}
.arrow.forward {
  right: 10px;
  top: 10px;
}
.arrow:hover {
  opacity: 1;
}


</style>
 
<!--  

<script>
methods: {
        onDecode(result) { alert(result) },



    },

};
</script>-->
  