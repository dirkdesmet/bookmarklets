(function() {
    /* copy selected issues from agile planning lists */
    var issues = jQuery('.ghx-selected').filter('.js-issue').map(function(i, issue) {
        var k = jQuery(issue).attr("data-issue-key");
        var s = jQuery(issue).find('.ghx-summary').attr("title");
        return {
            key: k,
            summary: s
        }
    }).toArray();
    /* copy issue from open issue */
    var t = document.title.replace(/ - [^ - ]+.$/g, "");
    var match = t.match(/\[(.*)\]/);
    if (match) {
        var k = match[1];
        issues.push({
            key: k,
            summary: t.replace("[" + k + "] ", "")
        })
    } /* create list */
    var links = jQuery.map(issues, function(i) {
        return "[" + i.key + "] " + i.summary;
    });
    window.prompt("Copy to clipboard: Ctrl+C, Enter", links.join("\r\n"))
})();
