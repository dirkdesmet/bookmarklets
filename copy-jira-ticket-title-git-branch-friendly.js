(function() {
    /* copy selected issues from agile planning lists */
    var issues = jQuery('.ghx-selected').filter('.js-issue').map(function(i, issue) {
        var k = jQuery(issue).attr("data-issue-key");
        var s = jQuery(issue).find('.ghx-summary').attr("title");
        return {
            key: k,
            summary: s
        }
    }).toArray(); /* copy issue from open issue */
    var t = document.title.replace(/(^\[|\]|\(|\)|\:|;|,|"|'|´|`| - [^ - ]+.$)/g, "").replace(/ |\//g, "-");
    window.prompt("Copy to clipboard: Ctrl+C, Enter", t)
})()
