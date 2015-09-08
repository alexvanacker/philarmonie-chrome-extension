chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
      if (request.query == "urls"){
         sendResponse(getAllTicketPrintURLS());
      }
});

function getAllTicketPrintURLS(){
    listPrintContainers = $(".print_button_container_for_expand_panel");
      // Extract hrefs 
    listLinkTags = listPrintContainers.find('a');
    // now the links
    listUrls = [];
    
    $(listLinkTags).each(function(){
        // Absolute URL
        listUrls.push(window.location.origin  + $(this).attr('href'));
    });
    return listUrls;
};

function executeScript(){
    // chrome.extension.sendMessage(getAllTicketPrintURLS(), function(anyResponse){
    //     return "OK";
    // });
    // Send to popup 
}

document.onload = executeScript();

  