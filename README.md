# Bookmarklets

## How to create bookmarklets?

Normally you could just drag links to your browser bookmarks or bookmarks toolbar, but it looks like Github strips links containing javascript.

So, follow these simple steps instead:

1. Create a new bookmark (look for _"bookmark manager"_ or _"manage bookmarks"_ in your browser's main menu).
2. You can enter any matching name you want; just paste the bookmarklet of your choice into the URL field and save it.
3. Just click the bookmark to execute the javascript bookmarklet.

## Bookmarklet to copy (Atlassian) Jira ticket info

Any time you are visiting a Jira ticket page, you can click this bookmarklet to popup a dialog from which you can easily copy ticket info to be used while working on your projects.

```javascript
javascript:(function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.");};js.src="https://cdn.jsdelivr.net/gh/dirkdesmet/bookmarklets@master/copy-jira-ticket-title.js";})();
```

## Bookmarklet to copy (Atlassian) Jira ticket info in a suitable way for GIT branch names:

Same as above, but in a GIT branch friendly way.

```javascript
javascript:(function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.");};js.src="https://cdn.jsdelivr.net/gh/dirkdesmet/bookmarklets@master/copy-jira-ticket-title-git-branch-friendly.js";})();
```

![Preview of bookmarklet in action](screenshot.png)

## Pass any URL to archive.is

Handy service to see archived versions from any webpage.

```javascript
javascript:(function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.");};js.src="https://cdn.jsdelivr.net/gh/dirkdesmet/bookmarklets@master/open-link-in-archive.is.js";})();
```
