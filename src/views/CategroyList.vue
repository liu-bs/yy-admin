<template>
    <div class='yy-category-list'>
        <el-breadcrumb>
            <el-breadcrumb-item to="/main">首页
            </el-breadcrumb-item>
            <el-breadcrumb-item to="/main">菜品类别首页
            </el-breadcrumb-item>
            <el-breadcrumb-item to="/main">类别列表
            </el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-button type="primary" @click="addCategory">添加新的菜品类别
        </el-button>
        <br>
        <el-table :data="catecoryList" boder stripe>
            <el-table-column label='编号' prop="cid"></el-table-column>
            <el-table-column label='名称' prop="cname"></el-table-column>
            <el-table-column label='操作' >
                <template slot-scope="{row,$index}">
                    <el-button type="success" size="mini"
                    @click="updateCatecory()">修改
                    </el-button>
                    <br>
                    <el-button type="danger" size="mini" 
                    @click="deleteCatecory(row,$index)">删除
                    </el-button>
                </template>
                <el-button>
                </el-button>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                catecoryList:[]
            }
        },
        methods:{
            deleteCatecory(c,i){

                   this.$confirm('您确定要删除吗:','提示',{type:'warning'}).then(()=>{
                       
                    var url = this.$store.state.globalSettings.apiUrl+'/admin/category/'+c.cid;
                    this.$axios.delete(url).then((res)=>{
                        if(res.data.code==200){
                            this.catecoryList.splice(i,1);//模型数据删除
                            this.$message.success("菜品删除成功")
                        }else{
                            this.$message.error('类别删除失败'+res.data.msg)
                        }
                    }).catch((err)=>{
                        console.log(err)
                })
                }).catch(()=>{
                    
                })  
            },
            updateCategory(c, i){
                this.$prompt('请输入您想修改的类别名：','提示',{
                    inputValue: c.cname
                }).then(({value})=>{

                }).catch(()=>{

                })
            },
            addCategory(){
                this.$prompt('请输入新的菜品类别名：','提示',{type:'info'}).then(({value})=>{
                    //获得用户的输入，调用数据API添加到数据库
                    var url = this.$store.state.globalSettings.apiUrl + '/admin/category';
                    this.$axios.post(url, {cname:value}).then((res)=>{
                    if(res.data.code==200){
                        //数据库中添加成功
                        this.$message.success('新的类别添加成功!')   
                        //模型数据中添加新的类别
                        this.categoryList.push({cid:res.data.cid, cname:value})
                    }else {
                        this.$message.error('新的类别添加出错：'+res.data.msg);
                    }
                    }).catch((err)=>{
                    console.log(err);
                    })
                }).catch(()=>{
                })
                }
  },
        mounted() {
            var url = this.$store.state.globalSettings.apiUrl+'/admin/category';
            this.$axios.get(url).then((res)=>{
                this.catecoryList=res.data;
            }).catch((err)=>{
                console.log(err)
            })
        },
    }
</script>