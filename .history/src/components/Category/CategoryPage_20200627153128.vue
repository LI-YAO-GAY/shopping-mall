<template>
<div>
    <div class="tab" ref="tab">
        <div class="flex j-center p-tb-10 category">商品分类</div>
        <div class="flex main-bottom j-between">
            <div class="flex a-column left a-center">
                <div v-for="(item,index) in categorydata" :key="index">
                    <input type="button" :value="item.mallCategoryName" class="ipt" @click="OnChange(item,index)" :class="{'white' : aIndex === index }" />
                </div>
            </div>

            <div class="flex right">
                <div v-if="categorydata.length>0">
                    <van-tabs v-model="active" swipeable @click="onClick">
                        <van-tab v-for="(item1,index1) in categorydata[aIndex].bxMallSubDto" :key="index1" :title="item1.mallSubName" ellipsis="false">
                            <div>
                                <div v-for="(item3,index3) in dataList" :key="index3">
                                    <div class="flex line">
                                        <div class="m-l-10 img m-tb-10">
                                            <img :src="item3.image" class="w100p" />
                                        </div>
                                        <div class="m-tb-10">
                                            <div class="m-b-20 m-l-10 name">{{item3.name}}</div>
                                            <span class="color-red m-lr-10">￥{{item3.orl_price}}</span>
                                            <span class="F14 zprice color-ccc">{{item3.present_price}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            active: "",
            aIndex: "",
            categorydata: [],
            dataList: [],
            id: "",
            num: 0,
            flag: false
        };
    },
    methods: {
        //right_top
        onClick(name, title) {
            console.log(name); //下标
            console.log(title); //标题
            let id = this.categorydata[this.aIndex].bxMallSubDto[name].mallSubId;
            this.$api
                .getClassification(id)
                .then(res => {
                    console.log(res);
                    this.dataList = res.dataList;
                })
                .catch(err => {
                    console.log(err);
                });

        },

        //left
        OnChange(item, index) {
            this.active = 0
            this.aIndex = index;

            //你的num 其实和aindex是一样的，所以可以用aindex来代替，num只是一个中间变量绑定类名enen 
            //我明白你的意思，但是它可以用aindex代替，我已经帮你改了嗯你刷新看看呢  还是刚刚视频的效果  
            //现在好了。再次刷新嗯   但是 我直接点分类 就米的
            let id = this.categorydata[index].bxMallSubDto[0].mallSubId;
            this.$api
                .getClassification(id)
                .then(res => {
                    console.log(res);
                    this.dataList = res.dataList;
                })
                .catch(err => {
                    console.log(err);
                });
        },

        autoGetData() {
            //这里的第一个if就是判断它是否是从首页点击过来，
            //如果是从首页过来的那么它发请求就要改变他的这个categorydata[this.aIndex]，这里就用首页传过来的数据
            if (!this.$route.query.id) {

                let id = this.categorydata[0].bxMallSubDto[0].mallSubId;
                this.$api
                    .getClassification(id)
                    .then(res => {
                        console.log(res);
                        this.dataList = res.dataList;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                let id = this.categorydata[this.aIndex].bxMallSubDto[0].mallSubId;
                this.$api
                    .getClassification(id)
                    .then(res => {
                        console.log(res);
                        this.dataList = res.dataList;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    },
    mounted() {
        this.categorydata = JSON.parse(localStorage.getItem("categorydata"));
        this.aIndex = this.$route.query.index;
        // this.fn();
        console.log(this.aIndex);

        // console.log(this.categorydata);
        this.autoGetData();
    },
    watch: {},
    computed: {
        // CategoryData() {
        //   return this.$store.state.CategoryData;
        // }
    }
};
</script>

<style lang="scss" scoped>
.tab {
    white-space: nowrap;
    overflow: hidden;
}

.category {
    border-bottom: 1px solid rgb(246, 246, 246);
    position: fixed;
    width: 100%;
}

.left {
    background: rgb(241, 248, 255);
    height: 100vh;
    width: 100px;
}

.right-nav {
    width: 80px;
}

.main-bottom {
    margin-top: 42px;
}

.van-tab__pane {
    width: 275px;
}

.img {
    width: 80px;
    height: 80px;
    border: 1px solid rgb(246, 246, 246);
}

.line {
    border-bottom: 1px solid rgb(246, 246, 246);
}

.zprice {
    text-decoration: line-through;
}

.name {
    width: 160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.ipt {
    border: none;
    width: 100px;
    border-bottom: 1px solid rgb(246, 246, 246);
    background: rgb(241, 248, 255);
    padding: 10px 0 10px 0;
}

.white {
    background: #ffffff;
}
</style>
