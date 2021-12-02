# Tampermonkey Azure DevOps Pull Request Tag Filter

This scripts allows you to filter the pull request view of Azure Devops by tags and other criteria using query parameters.

This script should work with all user script managers and browsers.<br>
I tested it with Google Chrome (OSX) / Mozilla Firefox (OSX) as browsers and [Tampermonkey](https://www.tampermonkey.net/) / Greasemonkey as user script managers.

The script works by scanning the DOM in a set interval, scanning for the pull requests elements and removing them from the DOM.
It works this way because the pull requests are fetched and added to the DOM dynamically by Azure DevOps.
Because of this, pull requests might be visible for a split second before the script removes them.

## Usage

### Parameters

There are several query paramters you can add to the URL to filter the pull request view in different ways:

| Parameter      | Type                                           | Description                                                                                                  |
|----------------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| tagFilter      | comma separated list of<br>regular expressions | Removes all pull requests that don't have at least one tag<br>that matches one of the the regular expressions|
| showUntagged   | boolean                                        | If *true* and *tagFilter* is set, does not remove pull requests without a tag                                |
| titleFilter    | comma separated list of<br>regular expressions | Removes all pull requests where the title doesn't<br>match one of the the regular expressions                |
| unassignedOnly | boolean                                        | If *true*, removes all pull requests that have an assignee                                                   |

**Note:** Regular expressions are automatically enclosed with *^$*.
So if you want a filter that exactly matches the string *ABC* you can simply write *ABC* instead of *^ABC$*.

### Examples

Assuming you have the following URL:

```
https://dev.azure.com/<org>\<project>/_git/<repo>/pullrequests?_a=active
```

#### Simple tagFilter Example

If you only want to see pull requests that are tagged with *Important* or *Coded With Love*.
You can do this by adding the *tagFilter* param like this:

```
https://dev.azure.com/<org>\<project>/_git/<repo>/pullrequests?_a=active&tagFilter=Important,Coded With Love
```

The script will remove all pull requests that are not tagged with either *Important* or *Coded With Love*.

#### Complex Example with all Parameters

If you only want to see pull requests that are either tagged with *Important* or are untagged and have a title that starts with *User Story* or *Bug* and do not have an assignee yet.
You can do this by adding the parameters like this:

```
https://dev.azure.com/<org>\<project>/_git/<repo>/pullrequests?_a=active&tagFilter=Important&showUntagged=true&titleFilter=User Story.*,Bug.*&unassignedOnly=true
```

## Installation
The scripts requires you to have a user script manager addon like *Tampermonkey* or *Greasemonkey* installed in your browser.

You can install this script using [this link](https://greasyfork.org/scripts/436418-azure-devops-pull-request-filter/code/Azure%20DevOps%20Pull%20Request%20Filter.user.js).

Alternetively, you can install it manually by copying the content of the *script.js* file and paste it into a new script of your user script manager.
With Tampermonkey you can add a new script by clicking on the addon icon and hit the *Create a new script* button.
It's pretty much the same for other user script managers.
