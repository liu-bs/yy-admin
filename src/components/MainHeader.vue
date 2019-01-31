<template>
  <div class="yy-main-header">
    <h3>{{$store.state.globalSettings.appName}}管理后台</h3>
    <div class="yy-right">
   
    </div>
  </div>
  
</template>

<script>
export default {
  methods:{
    quit(){
      this.$store.commit('setAdminName','');
      this.$storer.push('./login')
    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$hrader-height:60px;
.yy-admin-header{
  background:#dcdef6;
  boder-radius:2px;
  line-height:$hrader-height;
  height:$hrader-height;
  padding:0 6px;
  .yy-title{
    color:#303133;
    float:left;
    margin:0
  }
  .yy-right{
    float:right;
  }
}
</style>
