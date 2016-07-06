document.addEventListener('DOMContentLoaded', function () {
    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        console.log(e);
        var btn = e.trigger;
        btn.setAttribute('aria-label', '复制成功');
        setTimeout(function(){
            btn.setAttribute('aria-label', '点击复制');
        }, 2000)
    });

    chrome.tabs.executeScript(null,
    {
        code: 'document.body.innerHTML.match(\/"spuid"\s?:\\s?"(.*?)"\\s?\/)[1]'
    }, function(data){
        document.querySelector('input#spuid').value = data;
    })

    chrome.tabs.executeScript(null,
    {
        code: 'document.body.innerHTML.match(\/"pageId"\s?:\\s?"(.*?)"\\s?\/)[1]'
    }, function(data){
        document.querySelector('input#urlno').value = data;
    })

    chrome.tabs.executeScript(null,
    {
        code: 'document.body.innerHTML.match(\/"pageUrl"\s?:\\s?"(.*?)"\\s?\/)[1]'
    }, function(data){
        document.querySelector('input#pageurl').value = data;
    })
});
