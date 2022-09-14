<template>
    <div class="">
     
        <v-card> 
            <v-tabs class="w-screen"
            v-model="tab"  
            icons-and-text 
            show-arrows
            dense
            >
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

            <!-- <v-tab href="#tab-1">
                <a class="text-xs">通用掃描</a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                        
            </v-tab> -->

            <v-tab href="#tab-2">
                <a class="text-xs">成績一覽</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg> 
                        
            </v-tab>

            <v-tab href="#tab-3">
                <a class="text-xs">關主計分</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg> 
                        
            </v-tab>
            <v-tab href="#tab-4">
                <a class="text-xs">隊伍設定</a>
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
                </v-tab-item>
 
                
                <v-tab-item key='tab-2' value='tab-2'> 
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
                </v-tab-item>

                <v-tab-item key='tab-3' value='tab-3'>
                    <v-card flat>
                        <div class="grid grid-cols-2 gap-1">
                            <div class="" v-for="(item,index) in playLv_Name" :key="index" v-if="index > 0">
                                <v-btn :to=playLv_Scr_Mdf[index] class="col-span-1 w-full" color="#7CB342" height="80px" dark   >
                                       {{ '〖'+index+'〗'}} - {{ playLv_Name[index]}} 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </v-btn>  
                            </div>
                             
                        </div>
 
                    </v-card>
                </v-tab-item> 

                <v-tab-item key='tab-4' value='tab-4'>
                    <v-card  class="overflow-y-auto h-screen mb-20" >  
                        <v-row dense class="" >
                                        <v-expansion-panels >
                                            <v-expansion-panel >
                                                <v-expansion-panel-header>
                                                    <a class="rounded-full text-lg bg-gray-100 px-5"> 隊伍啟用 控制盤(電腦版) </a> 
                                                </v-expansion-panel-header>

                                                <v-expansion-panel-content> 
                                                    <!-- class="flex justify-center" -->
                                                    <v-row dense class="overflow-y-auto h-screen" >
                                                        <v-col  v-for="card in ts" :key="card.key" :cols="2">
                                                            <v-card class="p-1" >
                                                                    <v-checkbox 
                                                                    class=""
                                                                    v-model="card.using" 
                                                                    value="true"
                                                                    dense
                                                                    @change="changQrCD_Mdf(card)"
                                                                    label="啟用" 
                                                                    small
                                                                ></v-checkbox>
                                                                <a class="rounded-xl text-lg bg-gray-100   px-2"> {{ card.tm_Name }} </a>
                                                                <a class="text-xs text-gray-400   px-2"> {{ card.key }} </a>
                                                                <!-- <v-btn @click="deleteTeam(card)" dark color="#388E3C">刪除 </v-btn>    -->
                                                                

                                                            </v-card>  
                                                        </v-col >
                                                    </v-row>
                                                    
                                                    
                                                </v-expansion-panel-content>
                                             </v-expansion-panel>
                                        </v-expansion-panels>

                                <v-col v-for="card in ts" :key="card.key" :cols="12">
                                    <v-card class="p-1"> 
                                        <v-expansion-panels >
                                            <v-expansion-panel >
                                                <v-expansion-panel-header>
                                                    <a class="rounded-full text-lg bg-gray-100 px-5"> {{ card.tm_Name }} </a> 顯示條碼
                                                    <!-- <a class="rounded-full bg-red-500"> show Qr-Code </a> -->
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content> 
                                                    <div class="flex justify-center">
                                                        <qr-code :text="card.key" 
                                                            size="200" error-level="L">
                                                        </qr-code>  
                                                    </div> 
                                                </v-expansion-panel-content>
                                             </v-expansion-panel>

                                             <v-expansion-panel >
                                                <v-expansion-panel-header>
                                                    後台修改..關卡.得分
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content> 

                                                    <div class="grid grid-cols-2 gap-1"> 
                                                        <div class="col-span-2" > <a class="text-gray-500 text-base" > 輸入“ {{ card.tm_Name }} “分數 </a>   </div>

                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[1] }}</a> 
                                                            <v-text-field v-model="card.score_1"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,1)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[2] }}</a> 
                                                            <v-text-field v-model="card.score_2"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,2)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[3] }}</a> 
                                                            <v-text-field v-model="card.score_3"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,3)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[4] }}</a> 
                                                            <v-text-field v-model="card.score_4"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,4)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[5] }}</a> 
                                                            <v-text-field v-model="card.score_5"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,5)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 

                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[6] }}</a> 
                                                            <v-text-field v-model="card.score_6"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,6)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[7] }}</a> 
                                                            <v-text-field v-model="card.score_7"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,7)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[8] }}</a> 
                                                            <v-text-field v-model="card.score_8"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,8)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[9] }}</a> 
                                                            <v-text-field v-model="card.score_9"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,9)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                        <div class="col-span-1 flex" > 
                                                            <a class="text-lg font-black p-1">{{ playLv_Name[10] }}</a> 
                                                            <v-text-field v-model="card.score_10"  filled dense rounded ></v-text-field>   
                                                            <v-btn @click="Score_Mdf_byAdmin(card,10)" dark color="#388E3C"> 修改 </v-btn>  
                                                        </div> 
                                                             

                                                    </div>

                                                </v-expansion-panel-content>
                                             </v-expansion-panel>

                                             <v-expansion-panel >
                                                <v-expansion-panel-header> 
                                                    設定 {{ card.key }} 資料   
                                                    <v-spacer></v-spacer>
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    <div class="grid grid-cols-3 gap-0.5">  
                                                        <div class="col-span-3 row-span-1">  
                                                            <div class="flex flex-row "> 
                                                                <v-checkbox 
                                                                    class="py-1"
                                                                    v-model="card.using" 
                                                                    value="true"
                                                                    dense
                                                                    @change="changQrCD(card)"
                                                                    label="啟用隊伍" 
                                                                    small
                                                                ></v-checkbox>
 
                                                                    <v-text-field
                                                                        v-model="card.tm_Name"
                                                                        label="隊名" 
                                                                        filled
                                                                        dense
                                                                        class="px-3" 
                                                                    ></v-text-field>

                                                                    <v-text-field
                                                                        v-model="card.tm_amt"
                                                                        type="number"
                                                                        label="人數" 
                                                                        filled 
                                                                        dense
                                                                        class="px-2"
                                                                    ></v-text-field>

                                                                    <v-btn @click="changQrCD_tm_Name(card)" dark color="#388E3C" > 修改 </v-btn> 
                                                                    <v-btn @click=" " dark  color="#1E88E5" class="mx-2" > 重置歸零 </v-btn>  
                                                                
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </v-expansion-panel-content>
                                             </v-expansion-panel>
                                        </v-expansion-panels> 

                                    </v-card>
                                </v-col>
                        </v-row> 

                        <br>
                        <br>
                        <br>
                        <br>

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
 
            // playLv_Scr:['','scUp_1','scUp_2','scUp_3','scUp_4','scUp_5','scUp_6','scUp_7','scUp_8','scUp_9','scUp_10','scUp_11'],
            playLv_Scr_Mdf:['','scUp/1','scUp/2','scUp/3','scUp/4','scUp/5','scUp/6','scUp/7','scUp/8','scUp/9','scUp/10','scUp/11'],
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
  