<template>
    <div class="box">
      <div class="left">
        <div ref="map" style="width: 100%;height: 95%;position: absolute;left: 0;top: 5%;"></div>
      </div>


    </div>
</template>

<script>
    import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
    export default {
        name: "echarts",
        mounted() {
          this.map();
        },
      methods:{
          map(){
            let map = this.$echarts.init(this.$refs.map); //这里是为了获得容器所在位置
            window.onresize = map.resize;
            let data = [
              {name:"北京",value:177},
              {name:"天津",value:42},
              {name:"河北",value:102},
              {name:"山西",value:81},
              {name:"内蒙古",value:47},
              {name:"辽宁",value:67},
              {name:"吉林",value:82},
              {name:"黑龙江",value:66},
              {name:"上海",value:24},
              {name:"江苏",value:92},
              {name:"浙江",value:114},
              {name:"安徽",value:109},
              {name:"福建",value:116},
              {name:"江西",value:91},
              {name:"山东",value:119},
              {name:"河南",value:137},
              {name:"湖北",value:116},
              {name:"湖南",value:114},
              {name:"重庆",value:91},
              {name:"四川",value:125},
              {name:"贵州",value:62},
              {name:"云南",value:83},
              {name:"西藏",value:9},
              {name:"陕西",value:80},
              {name:"甘肃",value:56},
              {name:"青海",value:10},
              {name:"宁夏",value:18},
              {name:"新疆",value:67},
              {name:"广东",value:123},
              {name:"广西",value:59},
              {name:"海南",value:14},
            ];
            let mapFeatures = this.$echarts.getMap('china').geoJson.features;
            let res = []
            mapFeatures.forEach(function (v) {
              let name = v.properties.name;
              let value = JSON.parse(JSON.stringify(v.properties.cp))
              value.push(0)
              res.push({name,value})

            });
            res.push({name:"南海诸岛",value:[0,0,0]})
            let convertData = function (data) {
              res.forEach(item=>{
                data.forEach(ite=>{
                  if(item.name == ite.name){
                    item.value[2] = ite.value
                  }
                })
              })
              return res;
            };
            var option = {
              tooltip: {
                trigger: 'item',
                triggerOn:"click",
                confine:true,
                position:"left",
                enterable: true,
                alwaysShowContent: false,

                textStyle: {
                  fontFamily: 'PingFangSC-Regular',
                  fontSize: 15,
                  lineHeight: 18
                },
                backgroundColor: 'rgba(0,22,30,0.4)',
                borderColor: 'rgba(27, 113, 110, 0.5)',
                borderWidth: '1px',
                padding: [20, 20, 20, 20],
                extraCssText: 'border-radius:2px;',
                formatter: function (params) {
                  return params.name + ' : ' + params.data.value[2];
                }
              },
              // visualMap: {
              //   show: true,
              //   min: 1,
              //   max: 200,
              //   left: '10%',
              //   bottom: '10%',
              //   // text: ['高', '低'], // 文本，默认为数值文本
              //   seriesIndex: [0],
              //   inRange: {
              //     color:  ['#48AFC3','#268DA0','#02697B']
              //
              //   },
              //   textStyle: {
              //     show:false,
              //     fontFamily: 'PingFangSC-Regular',
              //     fontSize: 8,
              //     lineHeight: 18,
              //     color:'#fff'
              //   }
              // },
              geo: {
                regions: [{
                    name: '广东',
                    itemStyle: {
                        areaColor: 'blue',
                      areaColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                          offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                          offset: 1, color: 'green' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                      }
                    }
                }],
                map: 'china',
                zoom:1.2,
                roam: true,
                left:"8%",
                top:"10%",
                label: {
                  normal: {
                    show: false,
                    textStyle: {
                      color: "#e2e2e2",
                      fontSize: 8
                    },
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      color: "#fff"
                    },
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(15, 118, 132, 0.9)',
                    color: 'rgba(128, 128, 128, 0)'
                  },
                  emphasis: {
                    areaColor: 'rgba(239,197,73,0.9)',
                  }
                }
              },
              series: [
                {
                  type: 'map',
                  geoIndex: 0,
                  data: convertData(data),
                  showLegendSymbol:false,
                },
                // {
                //     type: 'scatter',
                //     coordinateSystem: 'geo',
                //     symbol: 'circle', //气泡
                //     symbolSize: 8,
                //     label: {
                //         normal: {
                //             show: true,
                //             position:"right",
                //             formatter:"{b}",
                //             textStyle: {
                //                 color: "#e2e2e2",
                //                 fontSize: 8
                //             },
                //         }
                //     },
                //     itemStyle: {
                //         normal: {
                //             color: '#e2e2e2', //标志颜色
                //         }
                //     },
                //     data: convertData(data),
                // },
              ]
            };
            map.setOption(option)
          }
      }
    }
</script>

<style scoped>
  .box{
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*align-content: flex-start;*/
    width: 120%;
  }
  .left{
    box-sizing: border-box;
    width: 49.5%;
    border: 1px solid rgb(15,112,126);
    height: 900px;
    background: url("../assets/bg.jpg");
    background-size: 100%;
    position: relative;
  }
</style>
