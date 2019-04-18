var dom = document.getElementById("company-play");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br>{b}: {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    // },
    series: [
        {
            name:'VTuber',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                    "name": "upd8",
                    "value": 204664017
                },
                {
                    "name": "ENTUM",
                    "value": 66141643
                },
                {
                    "name": ".LIVE",
                    "value": 59062863
                },
                {
                    "name": "にじさんじ",
                    "value": 53784364
                },
                {
                    "name": "転生組",
                    "value": 20504382
                }
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: ' {b|{b}}\n{hr|}\n  {c}  {per|{d}%}',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 14,
                            lineHeight: 30,
                            align: 'center'
                        },
                        // c: {
                        //     align: 'right'
                        // },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2,
                            align: 'right'
                        }
                    }
                }
            },
            data:[
                {
                    "name": "キズナアイ",
                    "value": 133472984
                },
                {
                    "name": "キズナアイ(ゲーム)",
                    "value": 53098082
                },
                {
                    "name": "Others",
                    "value": 18092951
                },
                {
                    "name": "ミライアカリ",
                    "value": 50196323
                },
                {
                    "name": "猫宮ひなた",
                    "value": 13674186
                },
                {
                    "name": "Others",
                    "value": 2271134
                },
                {
                    "name": "電脳少女YouTuberシロ",
                    "value": 48733195
                },
                {
                    "name": "ばあちゃる",
                    "value": 2589416
                },
                {
                    "name": "Others",
                    "value": 7740252
                },
                {
                    "name": "月ノ美兎",
                    "value": 13916034
                },
                {
                    "name": "静凛",
                    "value": 8355704
                },
                {
                    "name": "Others",
                    "value": 31512626
                },
                {
                    "name": "TEN",
                    "value": 13520739
                },
                {
                    "name": "-yume-柚萌",
                    "value": 4135005
                },
                {
                    "name": "Others",
                    "value": 2848638
                }
            ]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}