# Tampermonkey Azure DevOps Pull Request Tag Filter

This scripts allows you to filter the pull request view of Azure Devops by tags using a query parameter.
Just add a *tagFilter* query parameter to the URL of the pull request view you want to filter and save this URL as a bookmark to have easy access to your filtered pull request view.
You can pass as many tags as you want to the parameter using a comma separated list.

This script should work with all user script managers and browsers.<br>
I tested it with Google Chrome (OSX) / Mozilla Firefox (OSX) as browsers and [Tampermonkey](https://www.tampermonkey.net/) / Greasemonkey as user script managers.

The script works by scanning the DOM in a set interval, scanning for the pull requests elements and removing them from the DOM.
It works this way because the pull requests are fetched and added to the DOM dynamically by Azure DevOps.
Because of this, pull requests might be visible for a split second before the script removes them.

## Example
Assuming you have the following URL:

```
https://dev.azure.com/<org>\<project>/_git/<repo>/pullrequests?_a=active
```

and you only want to see pull requests that are tagged with *Important* or *Coded With Love*.
You can do this by adding the *tagFilter* param like this:

```
https://dev.azure.com/<org>\<project>/_git/<repo>/pullrequests?_a=active&tagFilter=Important,Coded With Love
```

The script will remove all pull requests that are not tagged with either *Important* or *Coded With Love*.

## Installation
The scripts requires you to have a user script manager addon like *Tampermonkey* or *Greasemonkey* installed in your browser.

You can install this script using [this link](https://greasyfork.org/scripts/436418-azure-devops-pull-request-filter/code/Azure%20DevOps%20Pull%20Request%20Filter.user.js).

Alternetively, you can install it manually by copying the content of the *script.js* file and paste it into a new script of your user script manager.
With Tampermonkey you can add a new script by clicking on the addon icon and hit the *Create a new script* button.
It's pretty much the same for other user script managers.
