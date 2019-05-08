var dom = document.getElementById("top100-fan");
var myChart = echarts.init(dom);
var app = {};
option = null;
var seriesData = [
    {
        "name": "キズナアイ",
        "value": 2007932
    },
    {
        "name": "キズナアイ(ゲーム)",
        "value": 926561
    },
    {
        "name": "輝夜月(かぐやるな)",
        "value": 750528
    },
    {
        "name": "ミライアカリ",
        "value": 625038
    },
    {
        "name": "電脳少女YouTube…",
        "value": 507818
    },
    {
        "name": "猫宮ひなた",
        "value": 358555
    },
    {
        "name": "ねこみみマスター(バー…",
        "value": 285932
    },
    {
        "name": "月ノ美兎",
        "value": 241806
    },
    {
        "name": "ヨメミ",
        "value": 232382
    },
    {
        "name": "ときのそら",
        "value": 161895
    },
    {
        "name": "鳩羽つぐ",
        "value": 137504
    },
    {
        "name": "静凛",
        "value": 128602
    },
    {
        "name": "樋口楓",
        "value": 123945
    },
    {
        "name": "Ami Yamato(…",
        "value": 122120
    },
    {
        "name": "富士葵(ふじあおい)",
        "value": 121943
    },
    {
        "name": "バーチャルおばあちゃん…",
        "value": 118475
    },
    {
        "name": "夢咲楓",
        "value": 108923
    },
    {
        "name": "アズマ リム(アズリム)",
        "value": 99015
    },
    {
        "name": "物述有栖",
        "value": 88578
    },
    {
        "name": "田中ヒメ 鈴木ヒナ",
        "value": 84625
    },
    {
        "name": "のらきゃっと",
        "value": 81545
    },
    {
        "name": "ばあちゃる",
        "value": 78927
    },
    {
        "name": "エルフのえる",
        "value": 77013
    },
    {
        "name": "薬袋カルテ(みないかる…",
        "value": 76702
    },
    {
        "name": "織田信姫",
        "value": 73789
    },
    {
        "name": "かしこまり",
        "value": 72803
    },
    {
        "name": "鈴鹿詩子",
        "value": 72537
    },
    {
        "name": "名取さな",
        "value": 69303
    },
    {
        "name": "モイラ",
        "value": 65987
    },
    {
        "name": "剣持刀也",
        "value": 65403
    },
    {
        "name": "ハッカドール",
        "value": 63903
    },
    {
        "name": "家長むぎ",
        "value": 62328
    },
    {
        "name": "藤崎由愛(YUA)",
        "value": 60311
    },
    {
        "name": "ピーナッツくん",
        "value": 53987
    },
    {
        "name": "勇気ちひろ",
        "value": 52632
    },
    {
        "name": "萌恵",
        "value": 49797
    },
    {
        "name": "宇志海いちご",
        "value": 48149
    },
    {
        "name": "ヤミクモケリン",
        "value": 46331
    },
    {
        "name": "甲賀流忍者 ぽんぽこ",
        "value": 44980
    },
    {
        "name": "YuNi",
        "value": 44035
    },
    {
        "name": "森中花咲",
        "value": 43757
    },
    {
        "name": "源元気",
        "value": 43554
    },
    {
        "name": "虹河ラキ",
        "value": 43208
    },
    {
        "name": "乾伸一郎(忍者)",
        "value": 41652
    },
    {
        "name": "-yume-柚萌",
        "value": 41452
    },
    {
        "name": "鈴谷アキ",
        "value": 40752
    },
    {
        "name": "おめがレイ おめがリオ",
        "value": 40093
    },
    {
        "name": "吟醸姉妹/Ginjo …",
        "value": 39156
    },
    {
        "name": "ウェザーロイドAiri",
        "value": 38906
    },
    {
        "name": "地球ちゃん(海外)",
        "value": 38652
    },
    {
        "name": "ベイレーン",
        "value": 37526
    },
    {
        "name": "にじさんじ",
        "value": 37143
    },
    {
        "name": "ロボ子さん",
        "value": 36959
    },
    {
        "name": "北上双葉",
        "value": 36157
    },
    {
        "name": "シスター・クレア",
        "value": 34931
    },
    {
        "name": "渋谷ハジメ",
        "value": 34317
    },
    {
        "name": "叶(かなえ)",
        "value": 34164
    },
    {
        "name": "すーぱーそに子",
        "value": 33528
    },
    {
        "name": "夜桜たま",
        "value": 33021
    },
    {
        "name": "もこ田めめめ",
        "value": 32932
    },
    {
        "name": "カフェ野ゾンビ子",
        "value": 32816
    },
    {
        "name": "文野環",
        "value": 32709
    },
    {
        "name": "届木ウカ",
        "value": 32181
    },
    {
        "name": "夕陽リリ",
        "value": 31463
    },
    {
        "name": "赤羽葉子",
        "value": 31268
    },
    {
        "name": "金剛いろは",
        "value": 30945
    },
    {
        "name": "万楽えね(まぐら えね)",
        "value": 29716
    },
    {
        "name": "もちひよこ",
        "value": 29493
    },
    {
        "name": "ディープウェブ・アンダ…",
        "value": 29390
    },
    {
        "name": "イヴ・ヴァルレーヌ",
        "value": 29088
    },
    {
        "name": "伏見ガク",
        "value": 28952
    },
    {
        "name": "花京院ちえり",
        "value": 28402
    },
    {
        "name": "ふぇありす",
        "value": 27844
    },
    {
        "name": "あっくん大魔王",
        "value": 27472
    },
    {
        "name": "ギルザレンIII世",
        "value": 26678
    },
    {
        "name": "ゴールドシップ(ゴルシ)",
        "value": 26462
    },
    {
        "name": "響木アオ",
        "value": 26051
    },
    {
        "name": "東雲めぐ",
        "value": 25168
    },
    {
        "name": "TEN",
        "value": 25012
    },
    {
        "name": "のなか三崎",
        "value": 24824
    },
    {
        "name": "シロ(ゲーム)",
        "value": 24690
    },
    {
        "name": "御来屋久遠",
        "value": 24672
    },
    {
        "name": "カルロ・ピノ",
        "value": 24464
    },
    {
        "name": "さはな",
        "value": 24447
    },
    {
        "name": "バーチャルネットアイド…",
        "value": 24331
    },
    {
        "name": "バーチャルゴリラ",
        "value": 23850
    },
    {
        "name": "マグロナ",
        "value": 23691
    },
    {
        "name": "ニーツ（VT-212）",
        "value": 23146
    },
    {
        "name": "ンヌグム",
        "value": 22468
    },
    {
        "name": "猫乃木もち",
        "value": 21693
    },
    {
        "name": "藤間桜",
        "value": 21649
    },
    {
        "name": "滓残",
        "value": 20801
    },
    {
        "name": "メイドのユキさん 調教…",
        "value": 20722
    },
    {
        "name": "鈴木あんず 白藤環(あ…",
        "value": 20716
    },
    {
        "name": "木曽あずき",
        "value": 20399
    },
    {
        "name": "白上フブキ",
        "value": 20388
    },
    {
        "name": "日雇礼子",
        "value": 20376
    },
    {
        "name": "瀬兎一也と屍人の記録部…",
        "value": 20324
    },
    {
        "name": "ディープブリザード(深…",
        "value": 20237
    },
    {
        "name": "春日部つくし",
        "value": 20212
    }
];

var legendData = [
    "キズナアイ",
    "キズナアイ(ゲーム)",
    "輝夜月(かぐやるな)",
    "ミライアカリ",
    "電脳少女YouTube…",
    "猫宮ひなた",
    "ねこみみマスター(バー…",
    "月ノ美兎",
    "ヨメミ",
    "ときのそら",
    "鳩羽つぐ",
    "静凛",
    "樋口楓",
    "Ami Yamato(…",
    "富士葵(ふじあおい)",
    "バーチャルおばあちゃん…",
    "夢咲楓",
    "アズマ リム(アズリム)",
    "物述有栖",
    "田中ヒメ 鈴木ヒナ",
    "のらきゃっと",
    "ばあちゃる",
    "エルフのえる",
    "薬袋カルテ(みないかる…",
    "織田信姫",
    "かしこまり",
    "鈴鹿詩子",
    "名取さな",
    "モイラ",
    "剣持刀也",
    "ハッカドール",
    "家長むぎ",
    "藤崎由愛(YUA)",
    "ピーナッツくん",
    "勇気ちひろ",
    "萌恵",
    "宇志海いちご",
    "ヤミクモケリン",
    "甲賀流忍者 ぽんぽこ",
    "YuNi",
    "森中花咲",
    "源元気",
    "虹河ラキ",
    "乾伸一郎(忍者)",
    "-yume-柚萌",
    "鈴谷アキ",
    "おめがレイ おめがリオ",
    "吟醸姉妹/Ginjo …",
    "ウェザーロイドAiri",
    "地球ちゃん(海外)",
    "ベイレーン",
    "にじさんじ",
    "ロボ子さん",
    "北上双葉",
    "シスター・クレア",
    "渋谷ハジメ",
    "叶(かなえ)",
    "すーぱーそに子",
    "夜桜たま",
    "もこ田めめめ",
    "カフェ野ゾンビ子",
    "文野環",
    "届木ウカ",
    "夕陽リリ",
    "赤羽葉子",
    "金剛いろは",
    "万楽えね(まぐら えね)",
    "もちひよこ",
    "ディープウェブ・アンダ…",
    "イヴ・ヴァルレーヌ",
    "伏見ガク",
    "花京院ちえり",
    "ふぇありす",
    "あっくん大魔王",
    "ギルザレンIII世",
    "ゴールドシップ(ゴルシ)",
    "響木アオ",
    "東雲めぐ",
    "TEN",
    "のなか三崎",
    "シロ(ゲーム)",
    "御来屋久遠",
    "カルロ・ピノ",
    "さはな",
    "バーチャルネットアイド…",
    "バーチャルゴリラ",
    "マグロナ",
    "ニーツ（VT-212）",
    "ンヌグム",
    "猫乃木もち",
    "藤間桜",
    "滓残",
    "メイドのユキさん 調教…",
    "鈴木あんず 白藤環(あ…",
    "木曽あずき",
    "白上フブキ",
    "日雇礼子",
    "瀬兎一也と屍人の記録部…",
    "ディープブリザード(深…",
    "春日部つくし"
];

var selected = {
    "キズナアイ": true,
    "キズナアイ(ゲーム)": true,
    "輝夜月(かぐやるな)": true,
    "ミライアカリ": true,
    "電脳少女YouTube…": true,
    "猫宮ひなた": true,
    "ねこみみマスター(バー…": true,
    "月ノ美兎": true,
    "ヨメミ": true,
    "ときのそら": true,
    "鳩羽つぐ": false,
    "静凛": false,
    "樋口楓": false,
    "Ami Yamato(…": false,
    "富士葵(ふじあおい)": false,
    "バーチャルおばあちゃん…": false,
    "夢咲楓": false,
    "アズマ リム(アズリム)": false,
    "物述有栖": false,
    "田中ヒメ 鈴木ヒナ": false,
    "のらきゃっと": false,
    "ばあちゃる": false,
    "エルフのえる": false,
    "薬袋カルテ(みないかる…": false,
    "織田信姫": false,
    "かしこまり": false,
    "鈴鹿詩子": false,
    "名取さな": false,
    "モイラ": false,
    "剣持刀也": false,
    "ハッカドール": false,
    "家長むぎ": false,
    "藤崎由愛(YUA)": false,
    "ピーナッツくん": false,
    "勇気ちひろ": false,
    "萌恵": false,
    "宇志海いちご": false,
    "ヤミクモケリン": false,
    "甲賀流忍者 ぽんぽこ": false,
    "YuNi": false,
    "森中花咲": false,
    "源元気": false,
    "虹河ラキ": false,
    "乾伸一郎(忍者)": false,
    "-yume-柚萌": false,
    "鈴谷アキ": false,
    "おめがレイ おめがリオ": false,
    "吟醸姉妹/Ginjo …": false,
    "ウェザーロイドAiri": false,
    "地球ちゃん(海外)": false,
    "ベイレーン": false,
    "にじさんじ": false,
    "ロボ子さん": false,
    "北上双葉": false,
    "シスター・クレア": false,
    "渋谷ハジメ": false,
    "叶(かなえ)": false,
    "すーぱーそに子": false,
    "夜桜たま": false,
    "もこ田めめめ": false,
    "カフェ野ゾンビ子": false,
    "文野環": false,
    "届木ウカ": false,
    "夕陽リリ": false,
    "赤羽葉子": false,
    "金剛いろは": false,
    "万楽えね(まぐら えね)": false,
    "もちひよこ": false,
    "ディープウェブ・アンダ…": false,
    "イヴ・ヴァルレーヌ": false,
    "伏見ガク": false,
    "花京院ちえり": false,
    "ふぇありす": false,
    "あっくん大魔王": false,
    "ギルザレンIII世": false,
    "ゴールドシップ(ゴルシ)": false,
    "響木アオ": false,
    "東雲めぐ": false,
    "TEN": false,
    "のなか三崎": false,
    "シロ(ゲーム)": false,
    "御来屋久遠": false,
    "カルロ・ピノ": false,
    "さはな": false,
    "バーチャルネットアイド…": false,
    "バーチャルゴリラ": false,
    "マグロナ": false,
    "ニーツ（VT-212）": false,
    "ンヌグム": false,
    "猫乃木もち": false,
    "藤間桜": false,
    "滓残": false,
    "メイドのユキさん 調教…": false,
    "鈴木あんず 白藤環(あ…": false,
    "木曽あずき": false,
    "白上フブキ": false,
    "日雇礼子": false,
    "瀬兎一也と屍人の記録部…": false,
    "ディープブリザード(深…": false,
    "春日部つくし": false
};

option = {
    title : {
        text: 'VTuber粉丝分布（前100名）',
        subtext: '2018年7月17日 17:00:00',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 375,
        bottom: 20,
        data: legendData,
        selected: selected
    },
    series : [
        {
            name: 'VTuber',
            type: 'pie',
            radius : '55%',
            center: ['45%', '50%'],
            data: seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}