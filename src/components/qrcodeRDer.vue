<template>
    <div class=" flex justify-center  ">
        <!-- <qrcode-stream @decode="onDecode"></qrcode-stream> -->

    Here QRDer
 
 <!-- <qrcode-stream
        @decode="onDecode"
        :camera="cameraSettings"
        :track="false"
        :paused="paused"
></qrcode-stream> -->


<hr>
<qrcode-stream></qrcode-stream>
<qrcode-drop-zone></qrcode-drop-zone>
<qrcode-capture></qrcode-capture>
        <!-- <div class="w-3/12 ml-4  h-screen ">
    {{  cT}}
             
        </div>
    
        <div class="w-11/12  ">
            
        </div>  -->
    </div>
</template>
 

<script> 

  
import SeatDataService from "../services/SeatPrepareService";
 import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

// import dayjs from 'dayjs';

 
import Vue from 'vue'
import JsonCSV from 'vue-json-csv'
Vue.component('downloadCsv', JsonCSV)

export default {
    name: "tutorials-list", 

    // components: {
    //     QrcodeStream,
    //     QrcodeDropZone,
    //     QrcodeCapture
    // },
    data() {
        return {
            // - - - - - 
            currentTime: Date.now(),
            cT: "ssss",
            cuT: "",
            plySTATU: "", 
            ts: [],
             

            start_copy: 0,

             // QRDer -Setting
            cameraSettings: {
                audio: false,
                video: {
                    facingMode: { ideal: 'environment' }
                }
            },
            paused: false,

        };
    },
    
    computed: { 

    },
    methods: {
        async onDecode (content) {
            try {
            this.content = content;
            this.pauseCamera(); // 暫停鏡頭準備調用
        
            // 調用 redeem 進行兌換
            // let message = await this.redeem(content);
            // 兌換成功後彈出訊息並重新啟用鏡頭
            Swal.fire('Good job!',
                    content,
                    'success').then(() => {
                    // this.unPauseCamera()
            });
            } catch (error) {
                Swal.fire('Whoops!',
                    error.message,
                    'error').then(() => {
                    // this.unPauseCamera()
                });

                // Swal.fire(
                //         '清除完畢!',
                //         '目前.',
                //         'success'
                //     )
            }
        },
        pauseCamera () {
            this.paused = true
        },
        unPauseCamera () {
            this.paused = false
        },
        // redeem (content) {
        //     return new Promise((resolve, reject)) => {
        //     // 兌換票券請求
        //     if (content) { 
        //         resolve('Success'); 
        //     } else { 
        //         reject('failed'); 
        //     }
        // },

         
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
  