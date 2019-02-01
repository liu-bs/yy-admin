<template>
    <div class='yy-login'>
        <el-card class="yy-login-card">
            <div slot="header">管理员</div>
            <div>
                <el-form label-width="100px">
                    <el-form-item label="管理员名"  >
                        <el-input type="text" v-model="formDate.aname" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="管理员密码" >
                        <el-input type="password" v-model="formDate.apwd" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click.native="doLogin">登录</el-button>
                        <el-button type="danger" @click.native="doCancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </el-card>

    </div>
</template>
<script>
export default {
    data(){ //普通组件的模型数据是函数返回值
        return{
            formDate:{ //表单用户输入的数据
                aname:'admin',
                apwd:'123456'

            }
        }
    },
    methods:{
        doLogin(){
            // this.$store.state.globalSettings
            var url = this.$store.state.globalSettings.apiUrl+`/admin/${this.formDate.aname}/${this.formDate.apwd}`;
            console.log(url)
            this.$axios.get(url).then((res)=>{
                console.log(res.data);
                if(res.data.code==200){
                    this.$store.commit('setAdmianName',this.formDate.aname);
                    console.log(this.$store.state.adminName)
                    this.$router.push('/main')
                }else{
                    this.$alert('用户名密码错误！登录失败',{type:'erro'})
                }

            }).catch((err)=>{
                console.log(err)
            })
        },
        doCancel(){
            this.formDate.aname='';
            this.formDate.apwd='';
        }
    },
}
</script>
<style lang="scss">
    .yy-login-card{
        width:450px;
        margin:150px auto;
        .el-card__header {
            text-align:center;
            font-size:1.2em;
        }
    }
    
</style>