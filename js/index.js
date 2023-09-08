new Vue({
    el: '#app',
    data: function () {
        return {
            resume: {
                base: {
                    name: "陈思颖",
                    /* sex: "男", */
                    birthday: "1995-01",
                    /* address: "上海",*/
                    phone: "17683260807 / +33771654105", 
                    mail: "siying.chen@yahoo.com",
                   /*  jobState: "在职", */
                    /* reportState: "月内到岗",
                    experience: "5年经验",
                    position: "全栈工程师",
                    salary: "26K" */
                },
                advantage: {
                    content: "软件：熟练ArcGis Pro, Qgis, 了解ENVI, ERDAS,了解Illustrator, 熟悉Micro Office   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   数据库：Geoserver, PostGres, MySQL"  + `<br>` +
                    "计算机语言：了解VUE3 , javascript, css3 , HTML5。" +"&nbsp;了解java, python, R"+`<br>` +
                    "操作系统：了解Linux &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "语言：熟练使用法语，英语，普通话"
                    
                },
                works: [{
                    company: "ENEDIS 法国国家电网公司",
                    position: "GIS 数据分析师 制图师",
                    duration: "2022.03-2023.03",
                    content: `【项目概述】该项目旨在通过GIS技术和地理数据分析，评估自然灾害对朗格多克-鲁西永地区电网设备的潜在影响以及估算对潜在受害地区的投资预算。该项目旨在帮助公司和该大区的政府部门更好地了解自然灾害风险，采取适当的预防和灾后恢复措施，确保电力供应的可靠性和连续性。
                    【项目内容】
                    1. 搜索，收集，整理，清洗，更新，分析公司负责地区的洪灾，火灾以及电网设备数据，并撰写报告
                    2. 根据数据，主要使用ArcGisPro 定义灾害等级区域并预测定位可能受影响的电网设备，对相关数据进行空间数据分析
                    3. 绘制专题地图以及以leaflet为框架库的离线地图以使数据可视化并生成报告，总结分析结果，分析投资预算
                    【项目成果】该项目的主要成果包括详细的自然灾害风险分析报告、GIS地图可视化、电网设备分布数据，该成果有助于公司领导制定未来电网设备发展路线以及制定投资预算
                    `
                    
                },{
                    company: "上莱茵省领土局",
                    position: "GIS 工程师实习生",
                    duration: "2020.03-2020.06",
                    content: `1. 分析道路安全与协调局（BSRC）的需求并分析整理可用数据
                    2. 创建永久性地理数据库（建模化，结构化，倒入，搜索，更新）
                    3. 制作该省道路网2D地图模型 以及相关均速，实速等地图
                    `
                },
                ],
                projects: [
                    {
                        name: "蒙彼利埃市智慧医疗保健机构",
                        position: "  ",
                        duration: "",
                        content: `使用HTML5，CSS3, JavaScript以及leaflet库构建蒙彼利埃市医疗机构定位离线地图网页，用户可以在该网页选择医疗机构目的地并获得导航提示，也可查看用户自定义范围内(米为单位)的医疗机构位置以及数量
                        `
                    
                    },
                    {
                       /*  name: "广汽乘用车PLS系统",
                        position: "全栈工程师",
                        duration: "2019.03-2019.10",
                        content: `为减轻汽车生产过程浩大的物料拉动、零件装配流转的管理压力，减少生成所需人力，实现智能化工厂，PLS生产物流系统孕育而生。本项目包含基础数据、物料拉动、仓库管理、取货管理、物流监控、接口管理、断点管理、PDA移动端、大屏监控、系统设置十大系统模块，项目整体采用.NET MVC、.NET CORE、WebService、WebApi、Windows服务设计，使用到了T4模板、JQuery、EasyUI、Xamarin、存储过程、数据库视图等技术
                        ● 本人在此大型项目中主要负责断点管理系统功能，以及全权负责大屏监控和PDA移动端开发。
                     。` */
                    }, /* 
                    } */
                ],
                certificates: ["法语DALF C1", "法国计算机应用水平证书level 1"],
                educations: [
                    {
                        school: "AgroParisTech (巴黎高科农科院)  ranked #4 in QS WUR Ranking By Subject",
                        level: "硕士",
                        professional: "géomatique (地理信息系统)",
                        duration: "2020-2022",
                        content: `主要相关课程：计算机课程(JAVA, Python, linux), 数据分析(MySQL, R), 数学, 统计学, 地理交通, 遥感, WebGis(HTML,PHP,JavaScritp,GeoServer,Leaflet), 地图学(ArcgisPro, Qgis, Illustrator), 地理空间数据分析(Postgres, postgis, PGAdmin, ArcgisPro)
                         `

                    },
                    {
                        school: "斯特拉斯堡大学",
                        level: "学士",
                        professional: "地理和规划",
                        duration: "2016-2019",
                        content: `主要相关课程：土地规划和交通，数据分析，数学，统计学，地图学，遥感理论，大气学，生物地理
                        
                        `

                    }
                ]
            },
            loading: {}
        }
    }, created() {
        this.loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    }, mounted() {
        this.loading.close();
    }
})