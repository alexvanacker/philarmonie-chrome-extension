
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
    console.log(listUrls);
    return listUrls;
};

function executeScript(){
    console.log("Running awesome script");
    var getURLs = getAllTicketPrintURLS();
    chrome.extension.sendMessage(getAllTicketPrintURLS(), function(anyResponse){
        return "OK";
    });
    // Send to popup 
}

document.onload = executeScript();

  