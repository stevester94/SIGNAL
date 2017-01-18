username = signalBotC
password = signal

app_id = mExpTeA7dU_j8A
secret = Gh4qH211IF65nefvaeDrkSNOEMc

// Interactive login will be problemai since it uses a redirect URL, should use 'script' type
reddit@reddit-VirtualBox:~$ curl -X POST -d 'grant_type=password&username=&password=snoo' --user 'p-jcoLKBynTLew:gko_LXELoV07ZBNUXrvWZfzE3aI' https://www.reddit.com/api/v1/access_token

function tokenRequest() {
  var req = new XMLHttpRequest();

  post_data = {"grant_type": "password", "username": username, "password": password};
  req.setRequestHeader('Authorization','Basic ' + btoa(app_id + ":" + secret));
  req.setRequestHeader('User-Agent', "pmBot/0.1 by stevester94")


  // Log what the request returns
  req.onreadystatechange = function() {
    console.log(req.responseText);
  }

  req.open("POST", "", true);
  req.send(JSON.stringify(post_data));
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

httpGetAsync("https://www.reddit.com", function(text) {
    document.body.innerHTML = text;
});
