var start2 = document.getElementById('exit');
var end2 = document.getElementsByClassName('open');
var exit2 = document.getElementById('ita');
var khy = document.querySelector('.start');
var go2 = document.querySelector('.go2');
var end22 = document.getElementsByClassName('end22');
var btnMenu = document.querySelector('.menu1');
var btnAccount =document.querySelector('.account1');
var btnSetting = document.querySelector('.setting1');
var menu12 = document.querySelector('.menu12');
var menu13 = document.querySelector('.menu13');
var menu14 = document.querySelector('.menu14');


        function add() {
              exit2.classList.remove('hide');
        };
        function remove2() {
             exit2.classList.add('hide');
        };
        function go() {
           go2.classList.remove('hide');
        };
        function end() {
            go2.classList.add('hide');
        };
        function men() {
            menu12.classList.remove('hide');
            menu13.classList.add('hide');
            menu14.classList.add('hide');
            btnMenu.style.backgroundColor = "black";
            btnMenu.style.color = "white";
            btnAccount.style.backgroundColor = "transparent";
            btnAccount.style.color = "black";
            btnSetting.style.backgroundColor = "transparent";
            btnSetting.style.color = "black";
        };
        function meu() {
            menu12.classList.add('hide');
            menu13.classList.remove('hide');
            menu14.classList.add('hide');
            btnAccount.style.backgroundColor = "black";
            btnAccount.style.color = "white";
            btnMenu.style.backgroundColor = "transparent";
            btnMenu.style.color = "black";
            btnSetting.style.backgroundColor = "transparent";
            btnSetting.style.color = "black";
        };
        function meo() {
            menu12.classList.add('hide');
            menu13.classList.add('hide');
            menu14.classList.remove('hide');
            btnSetting.style.backgroundColor = "black";
            btnSetting.style.color = "white";
            btnMenu.style.backgroundColor = "transparent";
            btnMenu.style.color = "black";
            btnAccount.style.backgroundColor = "transparent";
            btnAccount.style.color = "black";
        };




