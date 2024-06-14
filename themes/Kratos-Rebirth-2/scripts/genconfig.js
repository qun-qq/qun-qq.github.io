// 生成运行时调用的配置专用JS文件

hexo.once('generateBefore', () => {

    hexo.extend.generator.register('configMain', function(){
        
        var configMain = hexo.theme.config.jsconfig.main;

        configMain.site_root = hexo.config.root

        return {
            path: 'config/main.json',
            data: JSON.stringify(configMain)
        };
    });
    // hexo.extend.generator.register('configSnow', function(locals){
    //     return {
    //         path: 'config/snow.json',
    //         data: JSON.stringify(hexo.theme.config.jsconfig.snow)
    //     };
    // });
});