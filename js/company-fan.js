var dom = document.getElementById("company-fan");
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
            name:'公司',
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
                    "value": 3320702,
                },
                {
                    "name": "にじさんじ",
                    "value": 1305637
                },
                {
                    "name": "ENTUM",
                    "value": 1062413
                },
                {
                    "name": ".LIVE",
                    "value": 919034
                },
                {
                    "name": "ホロライブ",
                    "value": 249060
                }
            ]
        },
        {
            name:'VTuber',
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
                    "value": 2007932
                },
                {
                    "name": "キズナアイ(ゲーム)",
                    "value": 926561
                },
                {
                    "name": "Others",
                    "value": 386209
                },
                {
                    "name": "月ノ美兎",
                    "value": 241806
                },
                {
                    "name": "静凛",
                    "value": 128602
                },
                {
                    "name": "Others",
                    "value": 935229
                },
                {
                    "name": "ミライアカリ",
                    "value": 625038
                },
                {
                    "name": "猫宮ひなた",
                    "value": 358555
                },
                {
                    "name": "Others",
                    "value": 78820
                },
                {
                    "name": "電脳少女YouTuberシロ",
                    "value": 507818
                },
                {
                    "name": "ばあちゃる",
                    "value": 78927
                },
                {
                    "name": "Others",
                    "value": 332289
                },
                {
                    "name": "ときのそら",
                    "value": 161895
                },
                {
                    "name": "ロボ子さん",
                    "value": 36959
                },
                {
                    "name": "Others",
                    "value": 50206
                }
            ]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}