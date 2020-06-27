chrome.webRequest.onBeforeRequest.addListener(
    function (request) {
        // var url = request.url.replace('ajax.googleapis.com/ajax/libs/jquery', 'cdnjs.cloudflare.com/ajax/libs/jquery');
        var url = request.url.replace('ajax.googleapis.com/ajax/libs/jquery/', 'raw.githubusercontent.com/cdnjs/cdnjs/master/ajax/libs/jquery/');
        url = url.replace('ajax.googleapis.com/ajax/libs/jqueryui/', 'code.jquery.com/ui/');
        url = url.replace('ajax.aspnetcdn.com/ajax/jQuery/', 'code.jquery.com/');
        url = url.replace('ajax.aspnetcdn.com/ajax/jquery/', 'code.jquery.com/');
        //url = url.replace('ajax.aspnetcdn.com/ajax/jquery.dataTables/', 'cdn.datatables.net/');
        url = url.replace('ajax.aspnetcdn.com/ajax/jquery.dataTables/', 'raw.githubusercontent.com/SuperDiscovery/OpenLibs/master/ajax/jquery.dataTables/');
        // url = url.replace('ajax.aspnetcdn.com/ajax/jquery.ui/', 'code.jquery.com/ui/');

        url = url.replace('ajax.googleapis.com/ajax/libs/webfont/', 'raw.githubusercontent.com/SuperDiscovery/OpenLibs/master/ajax/libs/webfont/');

        url = url.replace('www.google.com/recaptcha/api.js', 'recaptcha.net/recaptcha/api.js');
        url = url.replace('maps.googleapis.com', 'maps.google.cn');

        url = url.replace('cdn.sstatic.net', 'sstatic.net');
        return { redirectUrl: url };
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://maps.googleapis.com/*",
            "*://ajax.aspnetcdn.com/*",

            "*://www.google.com/recaptcha/api.js*",

            "*://cdn.sstatic.net/*"
        ]
    },
    ["blocking"]
);
