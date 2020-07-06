<template>
<div>
    <div class="main flex a-center j-around p-tb-10">
        <div class="main_left">
            <form action="/">
                <van-search v-model="value" show-action placeholder="请输入搜索关键词" background="#F2F2F2" @search="onSearch">
                    <template #action>
                        <div @click="onSearch" class="m-l-20">搜索</div>
                    </template>
                    <template #left>
                        <div @click="onCity">{{city}}</div>

                        <van-icon name="arrow-down" class="m-r-20" />
                    </template>
                </van-search>
            </form>
        </div>

        <div>{{city}}</div>
    </div>

</div>
</template>

//为什么不能显示我的hello world

<script>
import {
    Toast
} from "vant";
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            value: "",
            city: ''
        };
    },
    methods: {
        onSearch(val) {
            Toast(val);
        },
        onCity(val) {
            Toast(val);
        },
        getSomeCity() {
            let _this = this
            AMap.plugin('AMap.Geolocation', function () {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                    buttonOffset: new AMap.Pixel(10, 20),
                    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    zoomToAccuracy: true,
                    //  定位按钮的排放位置,  RB表示右下
                    buttonPosition: 'RB'
                })

                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', onComplete)
                AMap.event.addListener(geolocation, 'error', onError)

                function onComplete(data) {
                    // data是具体的定位信息
                    _this.city = data.addressComponent.city

                }

                function onError(data) {
                    // 定位出错
                }
            })

        }

    },
    mounted() {
        this.getSomeCity()
        // let _this = this
        // AMap.plugin('AMap.Geolocation', function () {
        //     var geolocation = new AMap.Geolocation({
        //         // 是否使用高精度定位，默认：true
        //         enableHighAccuracy: true,
        //         // 设置定位超时时间，默认：无穷大
        //         timeout: 10000,
        //         // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        //         buttonOffset: new AMap.Pixel(10, 20),
        //         //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        //         zoomToAccuracy: true,
        //         //  定位按钮的排放位置,  RB表示右下
        //         buttonPosition: 'RB'
        //     })

        //     geolocation.getCurrentPosition(function (status, result) {
        //         // if(status=='complete'){
        //         //     onComplete(result)
        //         // }else{
        //         //     onError(result)
        //         // }

        //         var geolocation = new AMap.Geolocation({
        //             // 是否使用高精度定位，默认：true
        //             enableHighAccuracy: true,
        //             // 设置定位超时时间，默认：无穷大
        //             timeout: 10000,
        //             // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        //             buttonOffset: new AMap.Pixel(10, 20),
        //             //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        //             zoomToAccuracy: true,
        //             //  定位按钮的排放位置,  RB表示右下
        //             buttonPosition: 'RB'
        //         })

        //         geolocation.getCurrentPosition()
        //         AMap.event.addListener(geolocation, 'complete', onComplete)
        //         AMap.event.addListener(geolocation, 'error', onError)

        //     });

        //     function onComplete(data) {
        //         // data是具体的定位信息
        //          //这里我们给页面上的那个city赋值，
        //         _this.city = data.addressComponent.city
        //       

        //     }

        //     function onError(data) {
        //         // 定位出错
        //     }
        // })

    },
    watch: {},
    computed: {}
};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    background: #f2f2f2;
    position: fixed;
    top: 0;
    z-index: 999;
}

.van-search__content {
    background: #fff;
}

.van-search {
    padding: 0;
}
</style>
