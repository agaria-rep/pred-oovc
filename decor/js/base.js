let addm = document.querySelector('#menu').innerHTML;
let menu = "<header><nav><div class=\"menu-item\"><a href=\"/\">Главная</a></div><div class=\"menu-item\"><a href=\"/news\">Новости</a></div><div class=\"menu-item menu-icon\"><a href=\"/\"><img src=\"media/imgs/logo.png\"/></a></div><div class=\"menu-item\"><a href=\"/countries\">Страны</a></div><div class=\"menu-item\"><a href=\"/about\">О нас</a></div></nav></header>";
document.querySelector('#menu').innerHTML = menu;

let addf = document.querySelector('#footer').innerHTML;
let footer = "<footer><img src=\""+addf +"media/imgs/logo.png\" alt=\"logo\" class=\"footer-img\"><div class=\"con\"><div class=\"nra\">НРА</div><a href=\"https://vk.com/agaria_official\" class=\"vk\">VK</a></div></footer>";
//document.querySelector('#footer').innerHTML = footer;