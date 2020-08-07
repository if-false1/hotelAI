
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabBar/index/index","pages/tabBar/dongtai/dongtai","pages/tabBar/my/my","pages/tabBar/kefu/kefu","pages/logins/login/login","pages/logins/register/register","pages/logins/phone/phone","pages/logins/sigin-login/sigin-login","pages/indexpage/citySelect/citySelect","pages/indexpage/calendarSelect/calendarSelect","pages/logins/loginFace/loginFace","pages/search-hotel/search-hotel","pages/hotel-detail/hotel-detail","pages/pay/pay","pages/confirm-pay/confirm-pay","pages/hotel-order/hotel-order","pages/checkPhone/checkPhone","pages/checkIdentity/checkIdentity","pages/room-nav/room-nav","pages/select-room/select-room","pages/confirm-qr-code/confirm-qr-code"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"酒店AI","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#2c2c2c","selectedColor":"#1296db","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabBar/index/index","iconPath":"static/tabBarImg/home-select.png","selectedIconPath":"static/tabBarImg/home.png","text":"首页"},{"pagePath":"pages/tabBar/dongtai/dongtai","iconPath":"static/tabBarImg/dt.png","selectedIconPath":"static/tabBarImg/dt-select.png","text":"动态"},{"pagePath":"pages/tabBar/kefu/kefu","iconPath":"static/tabBarImg/kefu.png","selectedIconPath":"static/tabBarImg/kefu-select.png","text":"客服"},{"pagePath":"pages/tabBar/my/my","iconPath":"static/tabBarImg/my.png","selectedIconPath":"static/tabBarImg/my-select.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"酒店AI","compilerVersion":"2.6.11","entryPagePath":"pages/tabBar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabBar/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","bounce":"none","titleNView":{"type":"transparent"}}},{"path":"/pages/tabBar/dongtai/dongtai","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"动态","bounce":"none","scrollIndicator":"none","titleNView":{"type":"transparent"}}},{"path":"/pages/tabBar/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","bounce":"none","titleNView":{"type":"transparent"}}},{"path":"/pages/tabBar/kefu/kefu","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"客服"}},{"path":"/pages/logins/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/logins/register/register","meta":{},"window":{"navigationBarTitleText":"注册","animationType":"slide-in-bottom"}},{"path":"/pages/logins/phone/phone","meta":{},"window":{"navigationBarTitleText":"手机号登录","titleNView":{"buttons":[{"color":"#79b8ff","text":"注册","fontSize":"16px","float":"right"}]}}},{"path":"/pages/logins/sigin-login/sigin-login","meta":{},"window":{"navigationBarTitleText":"账号登录","titleNView":{"buttons":[{"color":"#79b8ff","text":"注册","fontSize":"16px","float":"right"}]}}},{"path":"/pages/indexpage/citySelect/citySelect","meta":{},"window":{"navigationBarTitleText":"城市选择","titleNView":false,"animationType":"slide-in-bottom"}},{"path":"/pages/indexpage/calendarSelect/calendarSelect","meta":{},"window":{"navigationBarTitleText":"日期选择","titleNView":false,"animationType":"slide-in-bottom"}},{"path":"/pages/logins/loginFace/loginFace","meta":{},"window":{}},{"path":"/pages/search-hotel/search-hotel","meta":{},"window":{"navigationBarTitleText":"寻找酒店","titleNView":false,"animationType":"slide-in-right"}},{"path":"/pages/hotel-detail/hotel-detail","meta":{},"window":{"navigationBarTitleText":"详情","bounce":"none","animationType":"slide-in-bottom","titleNView":{"type":"transparent","buttons":[{"color":"#333333","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"./static/font/iconfont.ttf","text":""},{"color":"#333333","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"./static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"支付订单","titleNView":false,"animationType":"slide-in-right"}},{"path":"/pages/confirm-pay/confirm-pay","meta":{},"window":{"navigationBarTitleText":"支付"}},{"path":"/pages/hotel-order/hotel-order","meta":{},"window":{"navigationBarTitleText":"我的订单"}},{"path":"/pages/checkPhone/checkPhone","meta":{},"window":{"navigationBarTitleText":"手机号验证"}},{"path":"/pages/checkIdentity/checkIdentity","meta":{},"window":{"navigationBarTitleText":"确认身份"}},{"path":"/pages/room-nav/room-nav","meta":{},"window":{"navigationBarTitleText":"内景导航"}},{"path":"/pages/select-room/select-room","meta":{},"window":{"navigationBarTitleText":"选择房间"}},{"path":"/pages/confirm-qr-code/confirm-qr-code","meta":{},"window":{"navigationBarTitleText":"保存二维码"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
