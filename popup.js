/**
 * Given a URL to a ticket, saves the ticket to the user's Google Drive
 */
function saveTicketToDrive(url){

}

/**
 * Setup connection to user's Drive
 */
function oauthToDrive(){

}

function onLoadFunction(){
  var downloadButton = document.getElementById('geturl');
  if(downloadButton != null){
    downloadButton.addEventListener('click', function(){
      //TODO  Send request for all URLS
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {query: "urls"}, function(response) {
          var urls = response;
          console.log(urls);
        });
      });
      
    });  
  }else{
    console.log("ERROR: cannot find the download button");
  }
};

document.onload = onLoadFunction();


