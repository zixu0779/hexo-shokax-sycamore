'use strict';
const path = require('path');

hexo.extend.filter.register('theme_inject', function(injects) {
    injects.footer.file('footer-addon', path.join(__dirname, 'views/footer-addon.pug'),{}, {cache: false});
});