// app.js
var FzuCat_Name=new Array("黑猫警长","佳咪","橙子","大壮","胖虎","芝麻","布丁","东东","栗子"," 威威","虎虎","抱抱","小海盗","平安","大虎");//姓名
var FzuCat_Gender=new Array("男","女","男","男","男","男","女","男","女","女","女","女","男","男","男");//性别
var FzuCat_Character=new Array("活泼好动，到处出警，打抱不平，勇敢无畏，勇斗大蛇！","活泼，亲人，勇斗大狗，为母则刚。是福大最勇敢的猫咪！","怕人怕人，懒惰虫一个，喜欢被投喂，不爱运动。","喜欢遛弯，金屿大哥","胆小怕事，畏畏缩缩，空有一副强壮皮囊和可爱外表。喜欢吃饭。","开朗活泼。","活泼爱动，继承妈妈美貌。","十分亲人！猫界大学教授！还有甜甜恋爱谈！","不喜欢和人太近，吃饭也保持安全距离。有责任心，经常帮佳咪带孩子。","爱和虎虎一起玩，不爱吃饭的小坏蛋","可以抱抱","伟大的妈妈，有点怕人","学术性学长，喜欢去图书馆，有一个大黄狗好朋友。","粘人小宝，亲人可抱。","娇宝宝，喜欢讨食。金屿退役男明星。");//性格
  var FzuCat_Variety=new Array("英短(?)，奶牛","漂亮三花","橘白","橘猫","胖狸花猫","狸白(狸花很少)，佳咪的头胎儿子","三花（串？），佳咪的某胎女儿。","橘","狸花","白手套橘猫，佳咪和橘爸的第一胎宝宝","白手套橘猫，相比于威威颜色更深。","橘白","三花狸花猫（一个串串）","胖胖狸花","狸花猫");//品种
  var FzuCat_Bodytype=new Array("大胖小子型","中等偏胖","偏胖","大胖小子","bigbig","中等偏瘦，人界俊猫，猫界细狗。狗系小猫，喜欢窝里横，喜欢欺负布丁和栗子，会被狗狗吓到树上去。","中等偏瘦，漂亮小猫。胸口有有一个投币口，谁能拒绝胸口有投币口的小猫呢？","胖胖小猫","中等偏胖","小小宝宝","小小宝宝","中等","中等小帅哥","胖胖小宝","肥肥喵");//体型
  var FzuCat_Hauntedplace=new Array("图书馆，素拓，全校","不三不四湖边","33号楼下","金屿地铁站猫咪聚集地","金屿地铁站，他是最不抢饭的猫，至今未知是如何吃那么胖的（？）","不三不四湖，时而去找妈妈（佳咪），妈宝猫。","不三不四湖 ，带着她的两个宝宝居住。","东三教学楼以及周边","别墅区","不三不四湖边","不三不四湖附近","金屿地铁站","图书馆","在湖边发现的黏人宝宝，后续因为治疗肺炎笼养。","金屿");//出没地点
  var FzuCat_People=new Array("可在喂食状态下触摸，脾气好。","看她心情，喜欢霸占别人电动车，因为生产太多的原因，摸多了会生气，建议谨慎触碰。","不亲人，对长期喂食的稍微会放松警惕，但是还是不能触摸，可以投喂猫粮。","十分亲人，可以大薅。不舒服会自己走开。","大NO。实施级别怕人，因为带去绝育像个大青蛙趴在房顶空调而一战成名。","可以薅，亲人。因为某次TNR吓着了现在有点不亲人。","亲人，会保护自己的宝宝，不抗拒触摸。","亲人！喜欢和人在一起，撒娇卖萌讨食。","不亲人，喂食猫条会伸爪子。","亲人，可喂食","特别亲人","一般般，会和喂食者保持距离。","亲人，可是拍屁屁很多次会生气。","亲人可抱，黏人精。","亲人，喜欢出卖色相来换取好吃的。")//是否亲人
  var FzuCat_Condition=new Array("已于2021年被领养","湖边大别墅持有者，许多猫都是她的宝宝，以一己之力拉高福大猫猫颜值。","于2022年10月失联。","在金屿定居，经常去三千创客遛弯。","在金屿地铁站，行踪不定，不喜欢人也不喜欢猫。","在不三不四湖附近猫猫祟祟。","在不三不四湖附近，和两个宝宝共同拥有湖景大别野（墅）。","在东三上课，时而助教时而巡查。五险一金职场猫。","2022年三月生了宝宝，藏在湖景大别墅里。","于2021年1月被领养","2022年送养。虎虎在怀孕的时候被领养，领养人非常细心的照顾了虎虎和它的宝宝，并给宝宝们找领养。","在金屿地铁站美美生活。","每天都在图书馆住宿的学长一枚呀。","已送养，有爱他的家庭啦。","已于2021送养。");//状态
  
  var FzuCatLike=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

  var FzuCatImg_1=new Array("https://img-blog.csdnimg.cn/7442a4b49ba14422bab85a5aab57f62b.jpeg")//黑猫警长
  var FzuCatImg_2=new Array("https://img-blog.csdnimg.cn/243ed4743ff14f55a4c78ca61cd44983.jpeg")//佳咪
  var FzuCatImg_3=new Array("https://img-blog.csdnimg.cn/4803c6a78311461d82c0eceb413f36ea.jpeg#pic_center")//橙子
  var FzuCatImg_4=new Array("https://img-blog.csdnimg.cn/b2aab68e4fc7457983e7266d310627cb.jpeg#pic_center")//大壮
  var FzuCatImg_5=new Array("https://img-blog.csdnimg.cn/bf1d59eef6654b84b4a558ee425d5fe8.jpeg#pic_center")//胖虎
  var FzuCatImg_6=new Array("https://img-blog.csdnimg.cn/7bf18db843e746579a0bd9dfbad40f39.jpeg#pic_center")//芝麻
  var FzuCatImg_7=new Array("https://img-blog.csdnimg.cn/20f97d37c40a407980e02e38c9826539.jpeg#pic_center")//布丁
  var FzuCatImg_8=new Array("https://img-blog.csdnimg.cn/9d244a5e91a949dd95d5fc81c325704a.jpeg#pic_center")//东东
  var FzuCatImg_9=new Array("https://img-blog.csdnimg.cn/27eb00bc1a88409d950abc0eba62ff24.jpeg#pic_center")//栗子
  var FzuCatImg_10=new Array("https://img-blog.csdnimg.cn/f35563da66aa4f11b1ef5bbca25710bc.jpeg#pic_center")//威威
  var FzuCatImg_11=new Array("https://img-blog.csdnimg.cn/909b3eb2e8ad43b1904afc953eac0e71.jpeg#pic_center")//虎虎
  var FzuCatImg_12=new Array("https://img-blog.csdnimg.cn/a4fffeb4a59749558c9b61fc8a6e1e92.jpeg#pic_center")//抱抱
  var FzuCatImg_13=new Array("https://img-blog.csdnimg.cn/60c3fcd324c44c74bc2be72790f2bc67.jpeg#pic_center")//小海盗
  var FzuCatImg_14=new Array("https://img-blog.csdnimg.cn/b1b913de57954f839be992c9fdeeb97a.jpeg#pic_center")//平安
  var FzuCatImg_15=new Array("https://img-blog.csdnimg.cn/aeae13b095a44ccd8018fd8f0237fa44.jpeg#pic_center")//大虎

  var FzuCatHeadshots=new Array("https://img-blog.csdnimg.cn/3a408220871a4a3487a85a73df55f00d.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/4c64a8f21aa94608a6da038a5ea54832.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/a8b0edf88aef4b4a88ae93000b8bb829.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/4328fe2ebf834376bff554134e0a4e00.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/3ac0c668fc20466aa95f02a2f9d76ab6.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/c050115d8b8646e0af5f0a8e4c1b5d2c.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/f9282e6dd70c482dac9cf6d6fce1d220.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/cc73b62186294fca9f4168468c579261.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/8d55946509a44661a7b2dea60251aded.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/e60d129442ee4125bf692f9dd0f558df.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/9d858abcc46d4946bd5ac86f4a8facab.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/9a74e9874cf94d379d4ff10dd607e87c.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/05cc7fa1e68246799a4fc72e093dc1d5.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/68d5b5ad6a6a4775822e83a931cae96b.jpeg#pic_center",
  "https://img-blog.csdnimg.cn/d67ff4de7156452fbb54597b6f90beec.jpeg#pic_center")

 

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    FzuCatHeadshots: FzuCatHeadshots,
    FzuCat_Name: FzuCat_Name
  }
})
