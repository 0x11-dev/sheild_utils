document.addEventListener('DOMContentLoaded', function () {
    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        var btn = document.querySelector('button');
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
});
