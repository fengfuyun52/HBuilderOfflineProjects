﻿
(function () {

  window.getViewTemplatePath = function (path) {
    return 'text!helloworld/templates/' + path + '.html';
  }

  require.config({
    baseUrl: '../',
    paths: {
    }
  });

  require(['AbstractApp'], function (App) {
    //实例化App
    var app = new App({
      hasPushState: true,
      'defaultView': 'index',
      'viewRootPath': 'helloworld/views/'
    });

  });
})();


