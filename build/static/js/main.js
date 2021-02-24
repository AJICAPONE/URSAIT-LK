$(document).ready(function () {
    $('[data-dismiss="modal"][data-target]').click(function () {

        if($('.modal').hasClass('show')){
            $('body').addClass('modal-open-2');
        } else {
            $('body').removeClass('modal-open-2');
        }

    });
    $("#acc-img").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-section-top__img-change').attr('style', 'background-image:url("'+ e.target.result +'");');

            };
            reader.readAsDataURL(this.files[0]);
        }

    });
    $('.show-in-all-time__select').click(function(){
        $(this).children('.show-in-all-time__select--list').fadeToggle(200);
    });
    $('.show-in-all-time__select--item').click(function(){
        var gt = $(this).text();
        $(this).parents('.show-in-all-time__select').children('span').text(gt);
    });

    $('.panel-toggle--button').click(function(){
        $(this).parent('.relative-block').next().slideToggle(200)
    });

    $('.section-lk-input-flex').click(function(){
        $(this).toggleClass('active');
        $(this).children('.section-lk-select-list').slideToggle(200);
    });
    $('.section-lk-select-item').click(function(){
        var gt = $(this).text();
        $(this).parents('.section-lk-input-flex').children('span').text(gt);
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".section-lk-input-flex,.section-lk-select-list").length) {
            $('.section-lk-select-list').slideUp(100);
        }
        e.stopPropagation();
    });


    $('.popup-radio-input--wrap').on('click',function () {
        $('.popup-radio-input--wrap').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');

    });

    $('.popup-checked--item').on('click',function () {
        $('.popup-checked--item').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');

    });


     // создём массив ВНЕ функции, чтобы он каждый раз не затирался
     var array_files = [];


     $(function () {


         $('.load-files').on('change', function (e) {
            //  $('.chat-container--edit--message--file--add').addClass('active');

             // пушим файлы в массив
             for (var i = 0; i < e.target.files.length; i++) {
                 array_files.push(e.target.files[i]);
             }

             var data = new FormData(); var count = 0;
             $.each(array_files, function(i, file){
                 data.append(count, file);
                 count++;
             });

             // удаляем все старые иконки файлов на JS
             var x = document.getElementsByClassName("popup-files--wrap");
             for (var i = 0; i < x.length; i++) {
                 // удаляем с конца!!!
                 for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                     if (x[i].childNodes[y].className == "personal-loaded--file")
                         x[i].removeChild(x[i].childNodes[y]);

                 }
             }

             // здесь ты получал расширение только певого файла
             // поэтому иконки для всех файлов были одинаковые


             Array.from(array_files).forEach(file => {



                 var file_name = file.name;
                 var substr = file_name.split('.').shift().substring(0,15);

                 // теперь расширение файла получается здесь
                 // поэтому иконки файлов правильные
                 var ext = file_name.split('.').pop();
                 var file_format = ext;


                 if(file_format == 'pdf'){
                     $('.popup-files--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-pdf"><use xlink:href="/static/img/svg/symbol/sprite.svg#pdf"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span><div class="load-file--close"><svg class="icon icon-close"><use xlink:href="/static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                 } else if(file_format == 'png'){
                     $('.popup-files--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-png"><use xlink:href="/static/img/svg/symbol/sprite.svg#png"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span><div class="load-file--close"><svg class="icon icon-close"><use xlink:href="/static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                 } else if(file_format == 'jpg' || 'jpeg'){
                     $('.popup-files--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-jpg"><use xlink:href="/static/img/svg/symbol/sprite.svg#jpg"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span><div class="load-file--close"><svg class="icon icon-close"><use xlink:href="/static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                 } else if(file_format == 'docx'){
                     $('.popup-files--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-doc"><use xlink:href="/static/img/svg/symbol/sprite.svg#doc"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span><div class="load-file--close"><svg class="icon icon-close"><use xlink:href="/static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                 } else if(file_format == 'zip'){
                     $('.popup-files--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-zip"><use xlink:href="/static/img/svg/symbol/sprite.svg#zip"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span><div class="load-file--close"><svg class="icon icon-close"><use xlink:href="/static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                 } else if(file_format == 'txt'){
                     $('.popup-files--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-txt"><use xlink:href="/static/img/svg/symbol/sprite.svg#txt"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span><div class="load-file--close"><svg class="icon icon-close"><use xlink:href="/static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                 }
             });

         });

     });

    $('.popup-files--wrap').on('click','.load-file--close',function (e) {
        e.preventDefault();
        $(this).parent().remove();
        array_files = [];

    });

    //  $(".load-files").before($(".personal-loaded--file"));
    //  $('.personal-loaded--file__icon').click(function () {
    //      $('.popup-files--wrap').remove();
    //      array_files = [];
    //      // $(".chat-container-footer")[0].reset();
    //      $('.chat-container--edit--message--file--add').removeClass('active');
    //  });


    // ========================== Chat ======================================//

    var x = document.getElementsByClassName("chat-container-message--name--button")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", showChangeMsg);
    function showChangeMsg(){ // Изменить или удалить сообщение
        $('.chat-container-option--message').fadeOut(200);
        $('.chat-container-message--name--button').removeClass('active');
        $(this).toggleClass('active');
        $(this).next().fadeToggle(200).toggleClass('active');
        // if($(this).hasClass('active') && $(window).width() < 576){
        //     $('body').css('overflow','hidden');
        // } else {
        //     $('body').css('overflow-y','scroll');
        // }
        if($(this).hasClass('active')){
            $('.header-panel--fixed').addClass('anim-bottom');
        }
    }
    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container-option--message,.chat-container-message--name--button").length) {
            $('.chat-container-option--message').fadeOut(200);
            $('.chat-container-message--name--button').removeClass('active');
            //$('body').css('overflow-y','scroll');
        }
        e.stopPropagation();
    });
    $('.chat-container-option--message--item--cancel,.chat-change-message,.chat-answer-message').click(function () {
        $('.chat-container-option--message,.chat-delete-out-msg').fadeOut(200);
        $('.chat-container-message--name--button').removeClass('active');
        //$('body').css('overflow-y','scroll');
        $('.header-panel--fixed').removeClass('anim-bottom');

    });
    var x = document.getElementsByClassName("chat-change-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", changeMsg);
    function changeMsg(){ // Удаление сообщений отправителя
        $('#chat-edit-msg').fadeIn(150).css('display','flex');
        var get_text_edit = $(this).parents('.chat-container-message--date__name').next().text();
        $('#chat-edit-text').text(get_text_edit);
        $('.chat-show-message-out--mobile').fadeOut(150);
        $('.header-panel--fixed').removeClass('anim-bottom');
    }
    var x = document.getElementsByClassName("chat-delete-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", deleteMsg);
    function deleteMsg(){ // Удаление сообщений отправителя
        $(this).parents('.chat-container-message-out').remove();
        $('.header-panel--fixed').removeClass('anim-bottom');
    }
    var x = document.getElementsByClassName("chat-answer-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", shareMsg);
    function shareMsg(){ // Удаление сообщений отправителя
        $('#chat-edit-msg').fadeIn(150).css('display','flex').addClass('chat-edit-now');

        var get_text_share = $(this).parents('.chat-container-message--date__name').next().text();
        var get_name_share = $(this).parents('.chat-container-option--message').next().text();
        $('#chat-edit-text').text(get_text_share);
        $('.chat-container--edit--title').text(get_name_share);

    }
    var x = document.getElementsByClassName("cab-chat-emoji")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", handleClickEmoji);

    function handleClickEmoji() {

        var x = document.getElementById("chat-get-text");
        if (x) {
            var img = document.createElement("img");
            img = this.cloneNode(true);
            img.className = 'gogocar-emoji--in-input';
            x.appendChild(img);
        }

    }
    $('.chat-container-footer--input__text').click(function () {
        $('.chat-container-footer--placeholder').fadeOut(150);
    });
    if (!$('.chat-container-footer--input__text').is(':empty')){
        $('.chat-container-footer--placeholder').fadeOut(200);
    }


    $(document).click(function (e) {

        if (!$(e.target).closest(".chat-container-footer--input__text,.chat-container-footer--file__input,.chat-container-footer--smiles,.gogocar-emoji,.chat-container-footer--emoji").length) {
            $('.chat-container-footer--placeholder').fadeIn(200);
        }
        if ($('.chat-container-footer--input__text').html()) {
            $('.chat-container-footer--placeholder').hide();
        }
        e.stopPropagation();
    });
    // создём массив ВНЕ функции, чтобы он каждый раз не затирался
    var array_files = [];


    $(function () {


        $('.personal-upload-files--input,.chat-container-footer--input__file').on('change', function (e) {
            $('.chat-container--edit--message--file--add').addClass('active');

            // пушим файлы в массив
            for (var i = 0; i < e.target.files.length; i++) {
                array_files.push(e.target.files[i]);
            }

            var data = new FormData(); var count = 0;
            $.each(array_files, function(i, file){
                data.append(count, file);
                count++;
            });

            // удаляем все старые иконки файлов на JS
            var x = document.getElementsByClassName("personal-appear--file--wrap");
            for (var i = 0; i < x.length; i++) {
                // удаляем с конца!!!
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                    if (x[i].childNodes[y].className == "personal-loaded--file")
                        x[i].removeChild(x[i].childNodes[y]);

                }
            }

            // здесь ты получал расширение только певого файла
            // поэтому иконки для всех файлов были одинаковые


            Array.from(array_files).forEach(file => {



                var file_name = file.name;
                var substr = file_name.split('.').shift().substring(0,15);

                // теперь расширение файла получается здесь
                // поэтому иконки файлов правильные
                var ext = file_name.split('.').pop();
                var file_format = ext;


                if(file_format == 'pdf'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-pdf"><use xlink:href="/static/img/svg/symbol/sprite.svg#pdf"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'png'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-png"><use xlink:href="/static/img/svg/symbol/sprite.svg#png"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'jpg' || 'jpeg'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-jpg"><use xlink:href="/static/img/svg/symbol/sprite.svg#jpg"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'docx'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-doc"><use xlink:href="/static/img/svg/symbol/sprite.svg#doc"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'zip'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-zip"><use xlink:href="/static/img/svg/symbol/sprite.svg#zip"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'txt'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-txt"><use xlink:href="/static/img/svg/symbol/sprite.svg#txt"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                }
            });

        });

    });

    $('.personal-loaded--file__icon').click(function () {
        $('.personal-loaded--file').remove();
        array_files = [];
        // $(".chat-container-footer")[0].reset();
        $('.chat-container--edit--message--file--add').removeClass('active');
    });



    $('.chat-answer-message').on('click',function () {
        $('#chat-edit-msg').fadeIn(150).css('display','flex');
    });
    $('#chat-edit-close').click(function () {
        $('#chat-edit-msg').fadeOut(150).removeClass('chat-edit-now');

    });
    $('.chat-container-footer--smiles').on('click',function () {
        $('.chat-container-footer--emoji--list').fadeToggle(200).css('display','flex');
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container-footer--smiles,.chat-container-footer--emoji--list").length) {
            $('.chat-container-footer--emoji--list').fadeOut(200);
        }
        e.stopPropagation();
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container--edit--message--file--add").length) {
            $('.chat-container--edit--message--file--add').removeClass('active');
        }
        e.stopPropagation();
    });
    $(function () {


        $('.chat-answer-message').on('click',function () {
            $('#chat-edit-msg').fadeIn(150).css('display','flex');
        });
        $('#chat-edit-close').click(function () {
            $('#chat-edit-msg').fadeOut(150).removeClass('chat-edit-now');

        });



        var x = document.getElementsByClassName("chat-change-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", changeMsg);
        function changeMsg(){ // Удаление сообщений отправителя
            $('#chat-edit-msg').fadeIn(150).css('display','flex');
            var get_text_edit = $(this).parents('.chat-container-message--date__name').next().text();
            $('#chat-edit-text').text(get_text_edit);
            $('.chat-show-message-out--mobile').fadeOut(150);
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        var x = document.getElementsByClassName("chat-answer-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", shareMsg);
        function shareMsg(){ // Удаление сообщений отправителя
            $('#chat-edit-msg').fadeIn(150).css('display','flex').addClass('chat-edit-now');

            var get_text_share = $(this).parents('.chat-container-message--date__name').next().text();
            var get_name_share = $(this).parents('.chat-container-option--message').next().text();
            $('#chat-edit-text').text(get_text_share);
            $('.chat-container--edit--title').text(get_name_share);

        }



        var x = document.getElementsByClassName("chat-delete-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", deleteMsg);
        function deleteMsg(){ // Удаление сообщений отправителя
            $(this).parents('.chat-container-message-out').remove();
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        $('.chat-container-option-dot').click(function () {
            $('.chat-container-header--delete__message').fadeOut(200);
            $(this).next('.chat-container-header--delete__message').fadeIn(200).css('display','flex');
            $('.chat-container-option-dot').removeClass('chat-close-delete__window');
            $(this).toggleClass('chat-close-delete__window');
        });

        $(document).click(function (e) {
            if (!$(e.target).closest(".chat-container-option-dot,.chat-container-header--delete__message").length) {
                $('.chat-container-header--delete__message').fadeOut(200);
                $('.chat-container-option-dot').removeClass('chat-close-delete__window');

            }
            e.stopPropagation();
        });

        $('.close-delete-chat').click(cdm);
        function cdm(){
            $(this).parent().fadeOut(100);
            $('.chat-container-header--option-delete__panel').css('display','flex');
            $('.gogocar-go-back-chat--mobile').addClass('active');
            $('.chat-container-option-dot').css('display','none');
            $('.chat-container-message--wrap--delete__check--wrap').css('display','flex');
        }


        $('.chat-container-header--option-delete--back').click(cdmb);
        function cdmb(){
            $('.chat-container-header--option-delete__panel').css('display','none');
            $('.chat-container-option-dot').css('display','flex');
            $('.chat-container-message--wrap--delete__check--wrap').css('display','none');
            $('.gogocar-go-back-chat--mobile').removeClass('active');
            $('.chat-delete-out-msg').removeClass('active');
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        $('.chat-container-header--option-delete--delete').click(showDelMsg);
        function showDelMsg(){ // Изменить или удалить сообщение
            $('.chat-delete-out-msg').addClass('active');

            if($(window).width() < 576){
                $('body').css('overflow','hidden');
                $('.chat-delete-out-msg').fadeIn(200);
            }
            // else {
            //     $('body').css('overflow-y','scroll');
            // }
            if($('.chat-delete-out-msg').hasClass('active')){
                $('.header-panel--fixed').addClass('anim-bottom');
            }
        }

        var x = document.getElementsByClassName("chat-container-message--wrap--delete__check")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", deleteAllMsg);
        function deleteAllMsg(){ // Удаление сообщений отправителя
            $(this).toggleClass('checked');
            if($(this).hasClass('checked')){
                $(this).html('<svg class="icon icon-ok-del "><use xlink:href="static/img/svg/symbol/sprite.svg#ok-del"></use></svg>')
                $(this).parents('.chat-container-message-out').addClass('checked-delete-msg');
            } else {
                $(this).html('');
                $(this).parents('.chat-container-message-out').removeClass('checked-delete-msg');
            }

        }

        $('.delete-choise-chat-msg,.chat-choise-delet-msg').click(function () {
            $('.checked-delete-msg').remove();
        });
        $('.chat-choise-delet-msg').click(function () {
            $('.chat-delete-out-msg').fadeOut(150);
            $('.header-panel--fixed').removeClass('anim-bottom');
        });

        // Добавить сообщение
        var today = new Date();
        var getDate = today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();



        $('.chat-container-footer--submit').click(printMsg);
        function printMsg() {
            var contents = $('#chat-get-text').html();

            var c_name = $('.chat-container--edit--title').text();
            var c_text = $('.chat-container--edit--text').text();
            var content_share = '<div class="chat-message--share--info"><div class="chat-message--share--info__name">'+ c_name +'</div><div class="chat-message--share--info__text">'+ c_text +'</div></div>'

            $('.chat-container-main--info').append(

                '<div class="chat-container-people-messages chat-container-message-out">\n' +
                '                        <div class="chat-container-message--wrapper">\n' +
                '                          <div class="chat-container--message--status">\n' +
                '                            <svg class="icon icon-not-looked ">\n' +
                '                              <use xlink:href="static/img/svg/symbol/sprite.svg#not-looked"></use>\n' +
                '                            </svg>\n' +
                '                          </div>\n' +
                '                          <div class="chat-container-message--wrap">\n' +
                '                            <div class="chat-container-message--info__message">\n' +
                '                              <div class="chat-container-message--date__name"><span>'+ time +'</span>\n' +
                '                                <div class="chat-container-message--name--wrap">\n' +
                '                                  <div class="chat-container-message--name--button">\n' +
                '                                    <svg class="icon icon-down-arrow ">\n' +
                '                                      <use xlink:href="static/img/svg/symbol/sprite.svg#down-arrow"></use>\n' +
                '                                    </svg>\n' +
                '                                  </div>\n' +
                '                                  <div class="chat-container-option--message chat-show-message-out chat-show-message-out--mobile">\n' +
                '                                    <div class="chat-container-option--message--wrap">\n' +
                '                                      <div class="chat-container-option--message--wrap--buttons">\n' +
                '                                        <div class="chat-container-option--message--item chat-change-message">\n' +
                '                                          <svg class="icon icon-pen ">\n' +
                '                                            <use xlink:href="static/img/svg/symbol/sprite.svg#pen"></use>\n' +
                '                                          </svg><span>Изменить</span>\n' +
                '                                        </div>\n' +
                '                                        <div class="chat-container-option--message--item chat-delete-message">\n' +
                '                                          <svg class="icon icon-delete-red ">\n' +
                '                                            <use xlink:href="static/img/svg/symbol/sprite.svg#delete-red"></use>\n' +
                '                                          </svg><span>Удалить</span>\n' +
                '                                        </div>\n' +
                '                                      </div>\n' +
                '                                      <div class="chat-container-option--message--item--cancel">Отмена</div>\n' +
                '                                    </div>\n' +
                '                                  </div>\n' +
                '                                  <div class="chat-container-message--name">Татьяна Гусева</div>\n' +
                '                                </div>\n' +
                '                              </div>\n' +
                '                              <p class="chat-container--message">'+ contents  +'</p>\n' +
                '                            </div>\n' +
                `                          <div class='chat-container-message--img' style='background-image:url("/static/img/content/drivers-avatar/driver2.png");'></div>\n` +
                '                          </div>\n' +
                '                          <div class="chat-container-message--wrap--delete__check--wrap">\n' +
                '                            <div class="chat-container-message--wrap--delete__check"></div>\n' +
                '                          </div>\n' +
                '                        </div>\n' +
                '                      </div>'
            )
            var x = document.getElementsByClassName("chat-container-message--name--button")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", showChangeMsg);
            var x = document.getElementsByClassName("chat-delete-message")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", deleteMsg);
            var x = document.getElementsByClassName("chat-container-message--wrap--delete__check")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", deleteAllMsg);
            var x = document.getElementsByClassName("chat-change-message")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", changeMsg);
            var x = document.getElementsByClassName("chat-container-option--message--item--cancel")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", closeActionChat);



        }

    });
    var chat_go2 = function() {
        if ($(window).width() > 576) {
            $('.chat-container-header--option-delete--delete').attr('data-toggle','modal').attr('data-target','#popup-del-msg');

        }
    };
    chat_go2();
    // **********************************************************************//





    var datePickerContainer = $('.date-start');
    var datePickerContainer1 = $('.date-end');


        $(datePickerContainer1).each(function(){

            $(this).datepicker({
                autoShow: false,
                autoPick: true,
                language: 'ru-RU',
                autoHide: true,
                //trigger: '.data-exam-popup',
                container: '.popup-calendar',
                pickedClass: 'picked-day-gogocar',
                highlightedClass: 'today-day-gogocar',
                zIndex: 1050,
                startView: 0
            });
        });



        $(datePickerContainer).each(function(){
            $(this).datepicker({
                //autoShow: true,
                autoPick: true,
                language: 'ru-RU',
                autoHide: true,
                //trigger: '.data-exam-popup',
                inline: true,
                //container: '.trip-show-calendar',
                pickedClass: 'picked-day-gogocar',
                highlightedClass: 'today-day-gogocar',
                zIndex: 1050,
                startView: 0,
                // startDate: function(date){
                //     date.valueOf() < now ? true : false;
                // },
                template: '<div class="datepicker-container" id="datepicker-id-trip">' + '<div class="datepicker-panel" data-view="years picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="years prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
                    '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
                    '</svg></li>' + '<li data-view="years current"></li>' + '<li data-view="years next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
                    '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
                    '</svg></li>' + '</ul>' + '<ul data-view="years"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="months picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="year prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
                    '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
                    '</svg></li>' + '<li data-view="year current"></li>' + '<li data-view="year next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
                    '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
                    '</svg></li>' + '</ul>' + '<ul data-view="months"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="days picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="month prev" class="gogocar-calendar-prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
                    '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
                    '</svg></li>' + '<li data-view="month current" class="gogocar-calendar-current"></li>' + '<li data-view="month next" class="gogocar-calendar-next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
                    '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
                    '</svg></li>' + '</ul>' + '<ul data-view="week"></ul>' + '<ul data-view="days"></ul>' + '</div>' + '</div>',
            });

        });


    function setCalendaryDates(id) {
        if (id > -1) {
            var dateStart = new Date();
            var dateEnd = new Date();
            var dateType = id;
            switch(dateType) {
                case 0:
                        dateStart.setDate(dateStart.getDate() - 1);
                        break;
                case 1:
                        dateStart.setMonth(dateStart.getMonth() - 1);
                        break;
                case 2:
                        dateStart.setFullYear(dateStart.getFullYear() - 1);
                        break;
            }
            $(datePickerContainer).datepicker("setDate", dateStart);
            $(datePickerContainer1).datepicker("setDate", dateEnd);
        }
    }

    var x = document.querySelectorAll(".calendar-destroy");
    if (x) for (let item of x) item.addEventListener("click", function() {
        let flag = 0;
        let interval = this.parentNode.parentNode.parentNode;
        if (interval.querySelector("label").textContent == "Интервал:") {
            var range = this.innerHTML;
            switch(range) {
                case "День": flag = 0; break;
                case "Месяц": flag = 1; break;
                case "Год": flag = 2; break;
            }
        }
        setCalendaryDates(flag);
    })

    $('.sandwich-menu--icon').click(function(){
        $('.sidebar-fixed').toggleClass('active');
    })

    $('.panel-toggle--button__mobile').click(function(){
        $('.panel-mobile .panel-toggle--wrapper').addClass('active');
    });
    $('.panel-mobile .button-style-black').click(function(){
        $('.panel-mobile .panel-toggle--wrapper').removeClass('active');
    });


    $('.chats-bottom-users--item').click(function(){
        $('.chats-fixed').addClass('active');
    });
    $('.gogocar-go-back').click(function(){
        $('.chats-fixed').removeClass('active');
    });
    $('.chats-dots').click(function(){
        $(this).children('.chats-dots-menu').fadeToggle(200);
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".chats-dots-menu,.chats-dots").length) {
            $('.chats-dots-menu').fadeOut(200);
        }
        e.stopPropagation();
    });
});