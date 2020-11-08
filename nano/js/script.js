(function (global) {
    var home = {};

    var homeHtml = "/snippets/home-snippet.html";
    var contactHtml = "/snippets/contacts.html";
    var discHtml = '/snippets/disc.html';
    var advanHtml = 'snippets/advan.html';
    var sferHtml = 'snippets/sfer.html';
    var lampHtml = '/snippets/lamps.html';
    var resHtml = '/snippets/result.html';
    var ideaHtml = "/snippets/idea.html";
    var allPartners = "/partners/partners.json";
    var aboutHtml = "/snippets/aboutUs.html";
    var partnersTitle = "/snippets/partners-head-snippet.html";
    var partnersBody = "/snippets/partners-body-snippet.html";
    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    var showLoading = function(selector) {
        var html = "<div class='text-center'> <img src='photo/ajax-loader.gif'></div>"
        insertHtml(selector,html);
    }

    var insertPropety=function(string, propName,propValue){
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    }

    home.LoadPartners = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            allPartners, buildAndShowPartners
        );
    };

    home.LoadHome = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    home.LoadAbout = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            aboutHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    home.LoadContact = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            contactHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    home.LoadIdea = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            ideaHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    home.LoadDisc = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            discHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    home.LoadRes = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            resHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    home.LoadLamp= function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            lampHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    home.LoadAdvan = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            advanHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    home.LoadSfer = function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            sferHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    }
    function buildAndShowPartners(partners) {
        $ajaxUtils.sendGetRequest(
            partnersTitle,
            function (partnersTitle) {
                $ajaxUtils.sendGetRequest(
                    partnersBody,
                    function(partnersBody){
                       
                        var partnersView = 
                            buildPartnersView(partners,
                                              partnersTitle,
                                              partnersBody);
                            insertHtml("#main-content", partnersView)
                    },false
                );
            },false
        );
    }
    function buildPartnersView(partners,partnersTitle,partnersBody){
        var finalHtml = partnersTitle+"<section class='row'>";
        for(var i = 0;i<partners.length;i++){
            var html = partnersBody;
            var name = "" + partners[i].name;
            var url = partners[i].url;
            html = insertPropety(html, "name", name);
            html = insertPropety(html, "url", url);
            finalHtml += html;
        }
        finalHtml +="</section>";
        return finalHtml;
        
    }
    document.addEventListener("DOMContentLoaded", function(event) {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText) {
                document.querySelector("#main-content")
                .innerHTML = responseText;
            },
            false
        )
    })
global.$home = home;
})(window)