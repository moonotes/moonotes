
var base = +new Date(2015, 3, 28);
var oneDay = 24 * 3600 * 1000;
var date = [];
var cndDate = '';
var week = '';
var now = '';
var _day = '';
var _yy = '';
var _mm = '';
var _dd = '';

for (var i = 1; i < 247+364+299+69; i++) {
    now = new Date(base += oneDay);
    week = "星期日";
    _day = now.getDay();
    if (_day === 1) {
        week = "星期一";
    } else if (_day === 2) {
        week = "星期二";
    } else if (_day === 3) {
        week = "星期三";
    } else if (_day === 4) {
        week = "星期四";
    } else if (_day === 5) {
        week = "星期五";
    } else if (_day=== 6) {
        week = "星期六";
    }

    _yy = now.getFullYear();
    _mm = now.getMonth() + 1;
    _dd = now.getDate();
    if (_yy < 100) _yy = "19" + _yy;
    cndDate = GetLunarDay(_yy, _mm, _dd);

    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + " " + week + " " + cndDate);
}

data = [
    932.4,1028.7,868.9,671.5,719.3,903.1,915.4,910,926,974.2,718.96,694.6,880,953.2,951.5,933,959.9,789.4,718.4,891.9,
    949,951.2,929.2,974.5,719.8,669.3,912.2,912.5,895.1,888.8,936.8,694.3,684.8,912.6,819.9,900.8,902.8,958.3,728.3,
    611.7,839.6,893.9,897.1,908.2,945.1,697.6,626.7,903.9,858.2,873.4,929.3,1028.2,737.7,624.5,529,914.7,915.8,909.6,
    904,616,535.4,904,927.5,924.1,953.2,978.2,693.3,664.1,908.6,921.4,952.5,951.4,991.1,370.7,602.4,982,964.3,976.6,
    982.5,997.4,776.1,711.1,966.2,973.9,971.4,932.7,983.9,718.1,652.6,931.8,901.6,913.2,932.3,968.9,699.7,619.5,917.6,
    906.2,906.9,919.6,950.6,705.4,640,917.6,933.7,958.1,952.1,984.2,748.1,664.6,953.7,957.4,959.7,992.4,963.1,624.8,
    623.2,846.7,970.8,967.8,951.9,970.5,698.1,630.6,916,911.3,962.1,607.1,676.6,595.6,867,910,924.3,936.2,944.3,1004.5,
    742.9,712.7,933.7,910.9,946.3,956.6,1019,778.5,708.3,950.4,938.3,936.9,961.6,1034.2,759.7,673.8,897.1,851.1,
    923.3,605.2,733,694.9,624.7,560.4,661,616.1,878.9,911,914,653.2,944.1,963.1,969.8,972,1035,796.5,717,953.6,958.8,
    968.8,956.7,1011.6,759.6,694.8,944.2,948.8,953.6,909,1008.3,766.6,597,954.5,961.8,948.7,945.2,1010,718.3,679.4,
    939.9,964.6,964.9,949.6,1004.4,739.7,696.5,941.5,939.1,942.1,939.5,1018,677.8,652.8,931.2,937.4,950.5,949.1,1020.4,
    751.8,652,962.9,958.7,942.8,971.4,1036,701.4,662.5,957.5,966.2,938,909.4,1029.7,793.5,648.94,951,958.6,963.9,950.5,
    1019.5,768.84,608.6,956.9,948.5,945.4,981.1,1054.7,749.3,665,957.1,956.9,966.6,1083.3,
    761.1,710.4,627.3,912.6,910.8,928.6,949.9,1003.8,717.8,623.5,937.5,955.3,960.9,961.4,1015.7,746.6,631.8,977.2,
    985.3,987.3,927.8,961.2,632.3,520,927.8,963.6,930.7,919.7,935.2,687.9,616.3,880.9,865.1,827.7,740.7,657.1,487.4,
    281.4,382.8,452.4,457.2,405.7,462.9,434,650.2,771.1,831.6,876,902.9,932.5,702.8,632.3,887.5,971.4,999.5,1008.1,
    1063.1,817.1,733.8,1016.5,1023.9,1033.1,1025.3,1082.6,811.7,718.9,1030.9,1001,1002.3,1000,1116.5,832.8,680.9,1031.8,
    1057.5,1067.8,1040.5,1091,805.5,771.5,1041.3,1026.4,1037.6,1043.2,1107.2,856.4,777,1049.2,1060,1035.5,1019.8,1129.9,
    717.5,612.6,754.8,1009.8,945.3,996.7,1109.4,819.4,735.1,1047.5,1015.5,1050.3,1045.8,1117.9,703.5,812.2,1076.3,
    1089.3,998.4,1035.8,1111.2,697.9,741.6,1031.5,1021.1,1053.7,1083.1,1152.3,884,874.8,689,1020,1044.1,1012.9,1102,
    791.2,676.5,1020,1036.1,1084.3,1075,1119.8,840.5,684,1052.6,1065,1076,1074.8,1107.6,689.5,722.9,1049.4,1062.7,1063,
    1017.4,1048.2,681.5,652.3,1046.9,1027.3,993.8,1055.5,1024,754.5,732,1034.5,1030.6,1091.2,743.3,764.1,699.3,838.3,
    1043,1049.8,1039.5,1052,1099.4,800.3,707,1021.3,1072,1015,1063,1084.8,724.6,719,1011.3,1000.3,1032,1075.3,1092.7,
    745,685.8,1060.9,1049,1069.9,1061.2,1103.8,761.5,656,1033.8,1079.1,1068,1026,1093,808.8,745,1080.2,1078.4,1074,
    1050.7,1079,720.8,635.2,1033.9,1028,1019,1014.6,1062,753,690.1,1042,1041.5,1038.7,1024,1087.7,765.3,692,1054,1085.7,
    1048,1038.2,1068,753.2,681.6,1039.6,1042,1043.5,1051.3,1062,742.5,684.9,1041,1053.4,1043.8,1038,1063.1,759.7,698,
    1030.2,1031.4,1026,1032.3,1075.9,752.6,672,1032.7,1027,991.5,1050.7,1115,824.5,693.1,1052.5,1059.7,1088.6,624.8,
    610.8,693.5,959.9,1019.3,1041.6,1036.2,1036.1,1100.1,816.8,741.8,1042.5,1034.7,1008.4,1004.8,1089,748.6,745.6,684.7,
    714.7,600,688.4,643.2,919.7,975.1,1036.4,1048.6,1054,1043.7,1098.3,808.4,742.4,1052.7,1064,1060.6,1037,1065,651.2,718.5,
    1055,1061.3,1008.3,1038.6,1122.8,807,764,1034.8,1062,1069,1068,1130.9,819.9,740.8,1045.3,1023.8,1050.5,1057.7,
    1139.1,798.8,691.4,1036,1050.6,1047.4,1019.3,1108,788.1,706.9,1035.6,1045.1,1041.4,1063.6,1118.2,701.7,770,1051.6,
    1053.2,1049.9,1057.6,1128,828.6,718.4,1042.9,1042.4,1043,1043,1114.6,814.8,725,1043.1,1000.5,1029,1039.1,1103.6,
    801.5,732.5,1049.4,1028.6,1024,1040.8,1119.5,859,695,1005.1,1034.6,1043.6,1051.2,1113.5,851.9,
    768.7, 675.5, 1014, 1015.3, 991, 1067.3, 665.5, 661, 1053.7, 1056.3, 1043, 1054.7, 1113.4, 810.8, 739.3, 1083.1, 1084.3,
    1063.8, 1050, 1068.2, 714.3, 867, 916.2, 847.9, 731, 574.3, 313.1, 427, 485.9, 449.8, 483.8, 484.4, 519.3, 687.3, 719.4,
    586.3, 953.8, 977.9, 939.5, 980, 1030.6, 715.4, 675.4, 1057, 1117.5, 1079, 1065, 1098.8, 809.1, 738.5, 1048.8, 1064, 1035,
    1069.9, 1146, 832, 753.1, 1082, 1093.4, 1086.9, 1082, 1155.8, 831.4, 704, 1083, 1091.4, 1146, 1095, 1168.1, 828, 667, 1016,
    1113, 1136.8, 1119, 1179.2, 839.2, 682.6, 1055.4, 1120.4, 1067.5, 1090.3, 1152.4, 865, 806.8, 1113.9, 1127.7, 1122.2,
    1079.3, 1108.4, 1096.2, 840.7, 832.5, 737.1, 1050, 1052.9, 1116, 820, 646.7, 1067, 1085.8, 1121.1, 1118, 1156.9, 855.9, 738,
    1057.5, 1105, 1107, 1103.7, 1176.9, 865.5, 789.1, 1099, 1097.9, 1102.1, 1121.1, 1186, 853.4, 858.7, 782, 1028, 1064.6, 1034,
    1132.6, 791.9, 718, 1038.4, 1084.5, 1107, 1091.6, 1095.1, 825, 747.1, 1088.4, 1105, 1109.6, 1100, 1160.3, 856.6, 747.1, 1075,
    1055.1, 1087, 1096, 1095.9, 1065.7, 762, 748.2, 692.3, 1030, 1028.9, 1081.9, 738, 663, 1017.4, 1045, 1083, 1068.9, 1119,
    612.1, 710.7, 1040, 1038.1, 1092, 1088.9, 1130.3, 805.3, 736.5, 1065, 1088.2, 1086, 1085.3, 1113.3, 704.3, 663.4, 1080.9,
    1078, 1100.8, 1099.2, 1158, 801.9, 727, 1099.7, 1100.8, 1106.1, 1113, 1142, 787.1, 707, 1107.1, 1108.8, 1097, 1082.4, 1106.5,
    759, 681.5, 1082, 1095, 1079, 1091, 694, 622.3, 1037, 1033, 1044.8, 1058, 1111.6, 758.9, 677, 1066, 1073.2, 1080, 1071, 1083.2,
    716, 691, 1065, 1068, 1058, 1088.6, 1110, 777, 715.5, 1087, 1104, 1107.8, 1095, 1128, 799.5, 707, 1080, 1107.2, 1089, 1076,
    1092.8, 799, 723, 1096.3, 1040, 1053, 1045, 1085.7, 741, 663.2, 1040, 1042, 1054.6, 1040, 1122, 783, 733.7, 1050, 1093.4, 1097,
    1082, 1125, 809, 741, 1068, 1075, 1048, 1068.3, 1139.7, 769, 650.6, 1013.4, 1074, 1077.3, 1078.8, 1082, 1043.8, 751, 707,
    767.1, 767.1, 669, 621, 691.1, 696, 667, 1007.7, 1040, 1040, 1077.3, 1160.3, 802, 659.7, 1033, 1080, 1091, 1084.9, 1171, 853.1,
    772, 1087,1096.8,1106.4,1087,1173.7,862.5,749,1085,1104.7,1092,1084.2,1150.6,817,740.5,1077,1087,1103.1,1110.2,1170,856.2,756.9,1075,1067,
    1103,1066,1152.3,791,737,1085.2,1079,1076,1101.4,1165,825,753.9,1089,1086,1060.8,1083,1165,810.8,717,1084,1096,1099.2,1086,1171.7,834,746,
    1079.2,1089,1081,1063,1120,786.5,727,1090,1088,1092.3,1084,1155,822.5,776,1100,1084.4,1083,1059,1135,770,883];
var option_tmp = {
    backgroundColor:'#F0F0F0',
    grid: {
        left: '3.5%',
        top:'21.5%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },

    title: {
        left: 'center',
        text: '2015.5-2017.12上海地铁网络客流统计',
        subtext: '（数据来源：【上海地铁shmetro】官方微博）',
        textStyle: {
            fontSize: 20,
            fontWeight: 'bolder',
            color: 'red'          // 主标题文字颜色
        }
    },
    legend: {
        data: ['日期'],
        right: 'center',
        bottom: 0,
        orient: 'horizontal'
    },
    xAxis: {
        type: 'category',
        name: '日期',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        name: '日总客流量(万人次)'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        textStyle: {
            color: '#000'
        }
    },
    dataZoom: [{
        type: 'slider',
        start: 50,
        end: 100
    }, {
        type: 'inside',
        start: 50,
        end: 100
    }],
    series: [
        {
            name: '日总客流量(万人次)',
            type: 'line',
            smooth: false,
            //symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 165, 168)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 50, 31)'
                    }])
                }
            },
            data: data
        }
    ]
};

var myChart = echarts.init(document.getElementById('main'));
myChart.setOption(option_tmp);