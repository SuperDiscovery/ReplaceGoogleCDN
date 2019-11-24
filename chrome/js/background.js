chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('ajax.googleapis.com', 'cdnjs.cloudflare.com');
        url = url.replace('ajax.aspnetcdn.com/ajax/jQuery/', 'code.jquery.com/');
		url = url.replace('www.google.com/recaptcha/api.js', 'recaptcha.net/recaptcha/api.js');
       //url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://ajax.aspnetcdn.com/*",
			"*://www.google.com/recaptcha/api.js*"
            //"*://themes.googleusercontent.com/*"
        ]
    },
    ["blocking"]
);
