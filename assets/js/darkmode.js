(function(){
    if(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") == ''){
        if(new Date().getHours() > 22 || new Date().getHours() < 6){
            $('body').toggleClass('night');
            $('html').toggleClass('night');
            $('.icon-light-mode').css('display','none');
            $('.icon-dark-mode').css('display','block');
            document.cookie = "night=1;path=/";
            console.log('夜间模式开启');
        }else{
            $('body').removeClass('night');
            $('html').removeClass('night');
            $('.icon-light-mode').css('display','block');
            $('.icon-dark-mode').css('display','none');                       
            document.cookie = "night=0;path=/";
            console.log('夜间模式关闭');
        }
    }else{
        var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
        if(night == '0'){
            $('body').removeClass('night');
            $('html').removeClass('night');
            $('.icon-light-mode').css('display','block');
            $('.icon-dark-mode').css('display','none');              
        }else if(night == '1'){         
            $('body').toggleClass('night');
            $('html').toggleClass('night');
            $('.icon-light-mode').css('display','none');
            $('.icon-dark-mode').css('display','block');                     
        }
    }
})();
//夜间模式切换
function switchNightMode(){
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0'; 
    if(night == '0'){
        $('body').toggleClass('night');
        $('html').toggleClass('night');
        $('.icon-light-mode').css('display','none');
        $('.icon-dark-mode').css('display','block');
        document.cookie = "night=1;path=/";
        console.log('夜间模式开启');
    }else{
        $('body').removeClass('night');
        $('html').removeClass('night');
        $('.icon-light-mode').css('display','block');
        $('.icon-dark-mode').css('display','none');   
        document.cookie = "night=0;path=/";
        console.log('夜间模式关闭');
    }
}

$(document).on('click', '.nav-switch-dark-mode', function(event) {
    event.preventDefault();
        switchNightMode();

});