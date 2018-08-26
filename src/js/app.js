import ApplicationRender from './application/ApplicationRender';

document.addEventListener('DOMContentLoaded', function(){ 

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw/sw.js', { scope: '/sw-test/' }).then(function(reg) {
      // регистрация сработала
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // регистрация прошла неудачно
      console.log('Registration failed with ' + error);
    });
  };

  const app = new ApplicationRender();
  
  app.render();

});
