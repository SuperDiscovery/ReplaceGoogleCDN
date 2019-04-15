chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('ajax.googleapis.com', 'cdnjs.cloudflare.com');
        //url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*"//,
            //"*://themes.googleusercontent.com/*"
        ]
    },
    ["blocking"]
);
