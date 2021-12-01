# Tampermonkey Azure DevOps Pull Request Tag Filter

This scripts allows you to filter the pull request view of Azure Devops by tags using a query parameter.
Just add a *tagFilter* query parameter to the URL of the pull request view you want to filter and save this URL as a bookmark to have easy access to your filtered pull request view.
You can pass as many tags as you want to the parameter using a comma separated list.

## Example
Aussimging you have the following URL:

```
https://dev.azure.com/<org>\<project>/_git/<repo>/pullrequests?_a=active
```

and you only want to see pull requests that are tagged with *Important* or *Coded With Love*.
You can do this by adding the *tagFilter* param like this:

```
https://dev.azure.com/<org>\<project>/_git/<repo>/pullrequests?_a=active&tagFilter=Important,Coded With Love
```

The script will remove all pull requests that are not tagged with either *Important* or *Coded With Love*.
