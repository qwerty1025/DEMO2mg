<template>
    <div class="">
        <v-card>
            <v-toolbar flat>
                <v-tabs v-model="tabs" fixed-tabs left>
                    <v-tab href="#k1" class="primary--text">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                        <a class="text-xs">掃描</a>
    
                    </v-tab>
    
                    <v-tab href="#k2" class="primary--text">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
    
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg> -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
    
    
                        <a class="text-xs">成績</a></a>
                    </v-tab>
    
    
    
                    <v-tab href="#k4" class="primary--text">
    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
    
    
                        <a class="text-xs">排名</a>
                    </v-tab>
    
                    <v-tab href="#k3" class="primary--text">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
    
    
                        <a class="text-xs">設定</a>
                    </v-tab>
    
                </v-tabs>
            </v-toolbar>
    
            <v-tabs-items v-model="tabs">
                <v-tab-item key='k2' value='k2'>
                    <v-card-text>
                        <div v-for="n in 3" :key="n" class="m-1">
                            <div class="grid grid-rows-3 grid-flow-col gap-4">
                                <div class="row-span-3 ...">
                                    <qr-code :text="ts[n].key" size="100" error-level="L"></qr-code>
                                </div>
                                <div class="col-span-2 ...">
                                    <a class="text-xs"> 輸入代碼：{{ ts[n].key }} , 現在分數： {{ ts[n].score }} </a>
                                </div>
                                <div class="row-span-2 col-span-2 ...">
                                    隊伍名稱：？？？？
                                </div>
    
                            </div>
                            <hr> 
    
                        </div>
                    </v-card-text>
                </v-tab-item>


                <v-tab-item key='k1' value='k1'>
                    <v-card v-scroll.self="onScroll" class="overflow-y-auto h-screen">
                        <!-- <v-banner class="justify-center text-h5 font-weight-light" sticky overflow-x-auto> -->
    
                        
    
                                <v-card-text>
                                    <StreamBarcodeReader @decode="(a, b, c) => onDecode(a, b, c)" @loaded="() => onLoaded()"></StreamBarcodeReader>
                                </v-card-text>
    
                                <v-row align="center" class="m-10 text-s bg-gray-100">
    
    
                                    <div class="grey--text p-4">
                                        掃描結果 : {{ text || "Nothing" }}
                                    </div>
                                </v-row>
    
                                <v-row>
                                    <v-col cols="8" class="m-25 pr-4 bg-gray-200">
                                        

           <v-chip-group
            active-class="primary--text"
            column
            v-model="temp_score"
            class="pl-3"
          >
            <v-chip
              v-for="tag in score_tags"
              :key="tag"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>

          
        </v-col>

         <v-col cols="4" class=" pr-4 bg-gray-200">
          <a class="text-xs"> 
            【 成 績 登 入 】
          </a>

          <v-text-field
                 v-model="temp_score"
                class="mt-0 pt-0 pr-20"
                clear
                 
                solo
                single-line
                label="請輸入成績"
                placeholder="請輸入成績"
                type="number"
                style="width: 80px"
              ></v-text-field> 

              <v-btn class="" small
                @click="Addd_Score(text)" 
                  rounded 
                  dark  
                  color="#E53935" > 
                  新增成績
              </v-btn> 

        <!-- <v-btn  class="" small
          @click="Addd_Score(text)"  
            rounded 
            dark  
            color="#827717" > 
            重新輸入
        </v-btn>

        <v-btn class="" small
          @click="Addd_Score(text)" 
            rounded 
            dark  
            color="#827717" > 
            請求修改
        </v-btn>  -->
          
        </v-col>
      </v-row> 
    
  </v-card> 

     </v-tab-item>
     
    </v-tabs-items>
  </v-card>


     
  
   
   
  </div>
</template>

<script>
import Vue from 'vue'
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)


import { StreamBarcodeReader } from "vue-barcode-reader";
import SeatDataService from "../services/SeatPrepareService";
export default {
    name: "HelloWorld",
    components: {
        StreamBarcodeReader,
    },
    data() {
        return {
            tabs: 'k1',
            //
            temp_score: 3,
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

        Addd_Score(key) {
            // const data = {
            //     tmp_idx: this.currentTutorial.tmp_idx,
            //     left_time: this.currentTutorial.left_time,
            //     // memo: this.currentTutorial.memo,
            //     ply_statu: this.currentTutorial.ply_statu,
            // };
            const OLD = {
                score: this.temp_score,
                // left_time: "",
                // memo:"",
                // ply_statu: "",
            };

            // TutorialDataService.update(key, data)
            //     .then(() => {})
            //     .catch((e) => {
            //         console.log(e);
            //     });

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
            // this.upld_History_mdf(this.currentTutorial);
            // this.overlay = false;
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

        onDataChange(items) {

            let _tutorials = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tutorials.push({
                    key: key,
                    score: data.score,
                    // pos: data.pos,
                    // sno: data.sno,
                    // sno_idx: data.sno_idx,
                    // sno_id: data.sno_id,

                    // tmp_idx: data.tmp_idx,
                    // left_time: data.left_time,
                    // memo: data.memo,
                    // ply_statu: data.ply_statu,
                });
            });

            this.ts = _tutorials;

        },
    },
    mounted() {
        SeatDataService.getAll().on("value", this.onDataChange);
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
  