<template>
  <div class="settings">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全局设置</el-breadcrumb-item>
    </el-breadcrumb>

    <br>
    <el-card shadow="never">
      <el-form label-width="110px">
      
        <el-form-item label="应用名称：">
          <el-input v-model="appName"></el-input>
        </el-form-item>

        <el-form-item label="数据API地址：">
          <el-input v-model="apiUrl"></el-input>
        </el-form-item>

        <el-form-item label="管理后台地址：">
          <el-input v-model="adminUrl"></el-input>
        </el-form-item>

        <el-form-item label="客户App地址：">
          <el-input v-model="appUrl"></el-input>
        </el-form-item>

        <el-form-item label="ICP备案号：">
          <el-input v-model="icp"></el-input>
        </el-form-item>

        <el-form-item label="版权声明：">
          <el-input v-model="copyright"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="doSubmit">提交</el-button>
          <el-button @click="doCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      appName:'',
      apiUrl:'',
      adminUrl:'',
      appUrl:'',
      icp:'',
      copyright:''

    }
  },
  mounted(){
    //将$store存储中的全局配置数据赋值给中间变量-formData，方便表单元素执行双向数据绑定
    console.log(this.$store.state.globalSettings)
    this.appName = this.$store.state.globalSettings.appName;
    this.apiUrl = this.$store.state.globalSettings.apiUrl;
    this.adminUrl = this.$store.state.globalSettings.adminUrl;
    this.appUrl = this.$store.state.globalSettings.appUrl;
    this.icp = this.$store.state.globalSettings.icp;
    this.copyright = this.$store.state.globalSettings.copyright;
  },
  methods:{
    doSubmit(){
      var url = this.$store.state.globalSettings.apiUrl+'/admin/settings';
      var data = {
        appName:this.appName,
        apiUrl:this.apiUrl,
        adminUrl:this.adminUrl,
        appUrl:this.appUrl,
        icp:this.icp,
        copyright:this.copyright


      }
      this.$axios.put(url,data).then((res)=>{
        if(res.data.code==200){
          this.$message.sucess('全局设置成功')
          //Todd：修改$store中的全局设置
        }else{
          this.$message.erro('全局设置失败')
        }
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    },

    doCancel(){
       this.appName = this.$store.state.globalSettings.appName;
    this.apiUrl = this.$store.state.globalSettings.apiUrl;
    this.adminUrl = this.$store.state.globalSettings.adminUrl;
    this.appUrl = this.$store.state.globalSettings.appUrl;
    this.icp = this.$store.state.globalSettings.icp;
    this.copyright = this.$store.state.globalSettings.copyright;
    }
  }
}
</script>
