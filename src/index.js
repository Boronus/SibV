require("font-awesome-webpack");

import './css/main.less';
//document.body.innerHTML += '<i class="fa fa-fw fa-check"></i>';
//console.log("Hello!");


document.getElementById('main_header_top_button_signin').addEventListener('click', function() {
    show('external_signin', 'block');
});
document.getElementById('main_header_top_button_register').addEventListener('click', function() {
    show('external_register', 'block');
});
document.getElementById('main_header_form_smallscreen_button').addEventListener('click', function() {
    show('external_register', 'block');
});
document.getElementById('main_header_bottom_lite_button').addEventListener('click', function(e) {
    e.preventDefault();
    show('external_register', 'block');
});




document.getElementById('external_form_close_signin').addEventListener('click', function() {
    show('external_signin', 'none');
});
document.getElementById('external_form_close_register').addEventListener('click', function() {
    show('external_register', 'none');
});




document.getElementById('features_list_button_previous').addEventListener('click', function() {
    slideListLeft();
});
document.getElementById('features_list_button_next').addEventListener('click', function() {
    slideListRight();
});

document.getElementById('main_header_bottom_capabilities_smallscreen').addEventListener('click', function(e) {
    showList(e.target.closest('.main-header-bottom-capabilities-smallscreen'));
});



document.getElementById('main_header_nav_smallscreen_button').addEventListener('click', function(e) {
    showMenu();
});

function show(elemId, state){
    document.getElementById(elemId).style.display = state;
    document.getElementById('external_wrapper').style.display = state;
}

function slideListLeft(){
    document.getElementById('features_list_column_left').style.display = 'block';
    document.getElementById('features_list_column_right').style.display = 'none';
}

function slideListRight(){
    document.getElementById('features_list_column_left').style.display = 'none';
    document.getElementById('features_list_column_right').style.display = 'block';
}

window.onresize = function(event) {
    if (window.innerWidth > 850) {
        document.getElementById('features_list_column_left').style.display = '';
        document.getElementById('features_list_column_right').style.display = '';
    }
};

function showList(panel){
    console.log(panel);
    let elemStyle = document.getElementById('main_header_bottom_capabilities').style;
    let panelClassList = panel.getElementsByClassName('fa')[0].classList;
    if (elemStyle.display == 'block') {
        elemStyle.display = '';
        panelClassList.remove('fa-long-arrow-up');
        panelClassList.add('fa-long-arrow-down');
    } else {
        elemStyle.display = 'block';
        panelClassList.remove('fa-long-arrow-down');
        panelClassList.add('fa-long-arrow-up');
    }
}

function showMenu(){
    let elemStyle = document.getElementById('main_header_nav').style;
    if (elemStyle.display == 'block') {
        elemStyle.display = '';
    } else {
        elemStyle.display = 'block';
    }
}