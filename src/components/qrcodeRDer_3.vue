<template>
    <div class="">
     
        <v-card> 
            <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            grow 
            icons-and-text
            >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
                <a class="text-xs">掃描</a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                        
            </v-tab>

            <v-tab href="#tab-2">
                <a class="text-xs">成績</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg> 
                        
            </v-tab>

            <v-tab href="#tab-3">
                <a class="text-xs">排名</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg> 
                        
            </v-tab>
            <v-tab href="#tab-4">
                <a class="text-xs">設定</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg> 
                        
            </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item key='tab-1' value='tab-1'>
                    <v-card v-scroll.self="onScroll" class="overflow-y-auto h-screen">
                     
                        <StreamBarcodeReader @decode="(a, b, c) => onDecode(a, b, c)" @loaded="() => onLoaded()"></StreamBarcodeReader>
    
    
                        <v-row align="center" class=" m-10 text-s">
                            <div class="grey--text p-4">
                                掃描結果 : {{ text || "Nothing" }}
                            </div>
                        </v-row>

                        <v-row>
                            <div class="col-span-3 flex flex-row pl-5"> 
                                <a class="mt-2.5">本關新增分數：</a>
                                <v-text-field 
                                    v-model="temp_score" 
                                    class="mt-0 pt-0 m-10" 
                                    type="number"
                                    clear solo single-line 
                                    label="請輸入成績" 
                                    placeholder="請輸入成績" >
                                </v-text-field> 
                                <v-btn class="mt-2 ml-4" @click="Addd_Score(text)" 
                                        rounded dark color="#E53935">
                                    新增成績
                                </v-btn>
                            </div>
                        </v-row>
                        <v-row class="m-20">
                            <v-textarea  
                                auto-grow outlined shaped
                                label="備註內容"  
                                rows="3" 
                                row-height="25" >
                            </v-textarea>
                        </v-row>

    
                        <!-- <div class="grid grid-rows-3 gap-1  bg-gray-100">
                            <div class="col-span-3 ...">
                                <v-chip-group active-class="primary--text" column v-model="temp_score" class="pl-3">
                                    <v-chip v-for="tag in score_tags" :key="tag">
                                        {{ tag }}
                                    </v-chip>
                                </v-chip-group>
    
                            </div>
    
                            <div class="col-span-3 flex flex-row pl-5"> 
                                <a class="mt-2.5">本關新增分數：</a>
                                <v-text-field 
                                    v-model="temp_score" 
                                    class="mt-0 pt-0 m-10" 
                                    type="number"
                                    clear solo single-line 
                                    label="請輸入成績" 
                                    placeholder="請輸入成績" >
                                </v-text-field> 
                                <v-btn class="mt-2 ml-4" @click="Addd_Score(text)" 
                                        rounded dark color="#E53935">
                                    新增成績
                                </v-btn>
                            </div>
    
                            <div class="col-span-1 p-2 ">
                                <v-btn class="" @click="Addd_Score(text)" 
                                       rounded dark color="#E53935">
                                    新增成績
                                </v-btn>
    
                                <v-btn class="" @click="Push_New()" rounded dark color="#E53935">
                                    新增 Key
                                </v-btn> 
                            </div>
    
                            <div class="col-span-3">
                                <v-textarea label="備註內容" auto-grow outlined rows="3" row-height="25" shaped></v-textarea>
                            </div>
                        </div> -->
    
                    </v-card>
                </v-tab-item>

                <v-tab-item key='tab-2' value='tab-2'>
                    <v-card flat>
                    <v-card-text>功能建立中...待更新</v-card-text>
                    </v-card>
                </v-tab-item>

                <v-tab-item key='tab-3' value='tab-3'>
                    <v-card flat>
                    <v-card-text>功能建立中...待更新</v-card-text>
                    </v-card>
                </v-tab-item> 

                <v-tab-item key='tab-4' value='tab-4'>
                    <div  class="  " >  
                        <v-row dense class="overflow-y-auto h-screen" >
                                <v-col v-for="card in ts" :key="card.key" :cols="12">
                                    <v-card class="p-1"> 
                                        <v-expansion-panels>
                                            <v-expansion-panel >
                                                <v-expansion-panel-header>
                                                    顯示 Qr-Code
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    <qr-code :text="card.key" 
                                                        size="200" error-level="L">
                                                    </qr-code>
                                                </v-expansion-panel-content>
                                             </v-expansion-panel>

                                             <v-expansion-panel >
                                                <v-expansion-panel-header>
                                                    修改 關卡得分
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    <qr-code :text="card.key" 
                                                        size="200" error-level="L">
                                                    </qr-code>
                                                </v-expansion-panel-content>
                                             </v-expansion-panel>

                                             <v-expansion-panel >
                                                <v-expansion-panel-header>
                                                    設定 隊伍資訊 
                                                    <v-checkbox 
                                                        v-model="card.using" 
                                                        value="true"
                                                        @change="changQrCD(card)"
                                                        label="激活使用" 
                                                    ></v-checkbox>
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    <div class="grid grid-cols-3 gap-0.5">  
                                                        <div class="col-span-3 row-span-1">  
                                                            <div class="flex flex-row items-center p-1">
                                                                <label for="filter-color-1" 
                                                                    class="ml-3 text-sm 
                                                                    text-gray-600">
                                                                    隊名
                                                                </label>
                                                                <input type="text" @change="changQrCD(card)" v-model="card.tm_Name"
                                                                    class="flex w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    label=""
                                                                    placeholder="隊名" required>
                
                                                                <input type="text" @change="changQrCD(card)" v-model="card.tm_amt"
                                                                    class="flex w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    placeholder="人數" required>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </v-expansion-panel-content>
                                             </v-expansion-panel>
                                        </v-expansion-panels> 

                                    </v-card>
                                </v-col>
                            </v-row>
                            
                        
                    </div>
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
import playLvService from "../services/playLvService";

export default {
    name: "HelloWorld",
    components: {
        StreamBarcodeReader,
    },
    data() {
        return {
            // - - - - -
             
            temp_nickName:'', 

            tabs: 'k1',
            //
            tab: 'tab-4',
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
        Push_New() {
            
            const OLD = {
                score: 2,
                memo: "something",
                tm_Name: "here",
                lv_Name:["0","0","0","0"],
                lv_score:[2,3,4,5],
                tm_amt: 1,

            };

            for( let v=10 ; v <=40 ; v++  )
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
                    score: data.score,
                    tm_Name: data.tm_Name,
                    tm_amt: data.tm_amt,
                    lv_Name: data.lv_Name,
                    lv_score: data.lv_score,

                    using: data.using,
 
                    memo: data.memo, 
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
  