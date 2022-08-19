<template>

  <div class="flex  justify-center flex-col ">


    掃描結果 : {{ text || "Nothing" }}

    
    <StreamBarcodeReader
      @decode="(a, b, c) => onDecode(a, b, c)"
      @loaded="() => onLoaded()"
    ></StreamBarcodeReader>


    <v-btn class="m-2"  rounded dark  color="#039BE5s" > 確認增加</v-btn>

    <hr class="m-2">
    <v-btn class="m-2" @click="saveDta" rounded dark  color="#827717" > 手動增加</v-btn>
    顯示增加列表:

    {{ ts }}

      
   
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import SeatDataService from "../services/SeatPrepareService";  
export default {
  name: "HelloWorld",
  components: {
    StreamBarcodeReader,
  },
  data() {
    return {
      text: "",
      ts: [],
      id: null,
    };
  },
  props: {
    msg: String,
  },
  
  methods: {

    saveDta(){

            var data = {
                uuid:"",
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
        onDecode (result) { alert(result) },
         
         
          
    }, 
     
};
</script> -->
  