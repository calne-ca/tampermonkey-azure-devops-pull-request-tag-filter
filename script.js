// ==UserScript==
// @name         Azure DevOps Pull Request Filter
// @namespace    https://github.com/calne-ca
// @version      0.1
// @description  Filter pull Requests in Azure DevOps by tags
// @author       Joscha Düringer
// @supportURL   https://github.com/calne-ca/tampermonkey-azure-devops-pull-request-tag-filter
// @license      MIT
// @match        https://dev.azure.com/*/pullrequests*
// @icon         https://www.google.com/s2/favicons?domain=dev.azure.com
// @grant        none
// ==/UserScript==

function removePullRequest(pullRequest){
    console.log("Removing pull request: " + pullRequest);
    pullRequest.remove();
}

function adjustRowSpacers() {
    const rowSpacers = document.getElementsByClassName('bolt-list-cell-spacer');

    for(const rowSpacer of rowSpacers){
        rowSpacer.style.height = 0;
    }
}

function filterPullRequests(pullRequests, filteredTags){
    console.log("Filtering for pull requests with tags '" + filteredTags + "'");

    for (const pullRequest of pullRequests) {
        const labels = pullRequest.querySelectorAll('.bolt-pill-overflow .text-ellipsis');
        const pullRequestLabels = []

        for (const label of labels) {
            pullRequestLabels.push(label.textContent);
        }

        var pullRequestHasFilteredLabel = pullRequestLabels.some(tag=> filteredTags.includes(tag));

        if (!pullRequestHasFilteredLabel) {
            removePullRequest(pullRequest)
        }
    }

    adjustRowSpacers();
}

(function() {
    'use strict';

    const urlParams = new URLSearchParams(window.location.search);
    const tagFilterParam = urlParams.get('tagFilter');
    const refreshInterval = 200;

    const filteredTags = tagFilterParam.split(',');

    if(!filteredTags) {
        return;
    }

    setInterval(function() {
        const pullRequests = document.getElementsByClassName('bolt-list-row');

        if (pullRequests) {
            filterPullRequests(pullRequests, filteredTags);
        }
    }, refreshInterval);
})();
