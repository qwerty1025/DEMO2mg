<template>

  <div class="hello">
      Here QRDer 2222 
    <StreamBarcodeReader
      @decode="(a, b, c) => onDecode(a, b, c)"
      @loaded="() => onLoaded()"
    ></StreamBarcodeReader>
    Input Value: {{ text || "Nothing" }}
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
      id: null,
    };
  },
  props: {
    msg: String,
  },
  mounted() { 
        SeatDataService.getAll().on("value", this.onDataChange);  
    },
    beforeDestroy() {
        SeatDataService.getAll().off("value", this.onDataChange);
    },
  methods: {
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
  