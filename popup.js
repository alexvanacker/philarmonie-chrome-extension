chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Getting URLs from page!");
    console.log(request);
    for (var i = request.length - 1; i >= 0; i--) {
      newURL = request[i];
      chrome.tabs.create({ url: newURL });
    };
  });


