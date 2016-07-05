// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var script = '';

document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.executeScript(null,
    {
        code: 'document.body.innerHTML.match(\/"spuid"\s?:\\s?"(.*?)"\\s?\/)[1]'
    }, function(data){
        document.querySelector('input#spuid').value = data;
    })

    // chrome.tabs.executeScript(null,
    // {
    //     code: 'document.body.innerHTML.match(\/"spuid"\s?:\\s?"(.*?)"\\s?\/)[1]'
    // }, function(data){
    //     document.querySelector('input#spuid').value = data;
    // })

    // chrome.tabs.executeScript(null,
    // {
    //     code: 'document.body.innerHTML.match(\/"spuid"\s?:\\s?"(.*?)"\\s?\/)[1]'
    // }, function(data){
    //     document.querySelector('input#spuid').value = data;
    // })
});
