<template>
  <div class="home">
    <div class="poem_outer">
      <p class="poem">清明 杜牧</p>
      <p class="poem" @click="handleProduct">清明时节雨纷纷</p>
      <p class="poem">路上行人欲断魂</p>
      <p class="poem">借问酒家何处有</p>
      <p class="poem">牧童遥指杏花村</p>
      <p class="poem right">2021.03.12</p>
    </div>
  </div>
</template>

<script>
import { getProductList } from '../common/api'
export default {
  data (){
    return {

    }
  },
  methods: {
    async handleProduct (){
      console.log(666);
      let params = {}
      try {
        let res = await this.getProductInfo(params);
        console.log(res,'res')
      } catch (err){
        if(err){
          console.log(err,'err');
        }
      }
    },
    async getProductInfo(params) {
      return new Promise((resolve, reject) => {
        getProductList(params)
          .then((res) => {
            if (res && res.data && res.data.error === 0) {
              resolve(res.data.data);
            } else {
              reject(res);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  }
}
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.right {
  text-align: right;
}
</style>