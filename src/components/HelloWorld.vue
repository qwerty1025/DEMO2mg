<template>
    <div class=" flex justify-center  ">
     

    {{ ts[0] }}

    <v-select
        :items="[2,3,4]" 
      ></v-select>
        <!-- <div class="w-3/12 ml-4  h-screen ">
    {{  cT}}
             
        </div>
    
        <div class="w-11/12  ">
            
        </div>  -->
    </div>
</template>
 

<script> 

 

import SeatDataService from "../services/SeatPrepareService";
 
// import dayjs from 'dayjs';

 
import Vue from 'vue'
import JsonCSV from 'vue-json-csv'
Vue.component('downloadCsv', JsonCSV)

export default {
    name: "tutorials-list", 


    data() {
        return {
            // - - - - - 
            currentTime: Date.now(),
            cT: "ssss",
            cuT: "",
            plySTATU: "", 
            ts: [],
             

            start_copy: 0,

        };
    },
    computed: {
        

    },
    methods: {
         
          onDataChange(items) {

            let _tutorials = [];
            items.forEach((item) => {
                let key = item.key;
                let data = item.val();
                _tutorials.push({
                    key: key,
                    pos: data.pos,
                    sno: data.sno,
                    sno_idx: data.sno_idx,
                    sno_id: data.sno_id,

                    tmp_idx: data.tmp_idx,
                    left_time: data.left_time,
                    memo: data.memo,
                    ply_statu: data.ply_statu,
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
  