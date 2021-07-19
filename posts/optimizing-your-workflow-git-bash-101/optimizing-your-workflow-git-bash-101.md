---
templateKey: 'blog-post'
title: 'Optimizing your workflow Git-Bash-101'
date: 2014-06-11
featuredpost: false
description: >-
  Codebrahma sharing cool bash scripts to optimize your git workflow. Git workflow for web development
author: Nithin Krishna 
link: /optimizing-your-workflow-git-bash-101
category:
- Tutorial
---

Git is a developer’s best friend. When ever you screw up, git is always there to save the day. Here are some cool bash scripts to optimize your git workflow. Add the following snippets to your `.bash_profile` and voila.

## 1.Know where you are.
Often you forget which branch you are working on. It will be great if you always knew which branch you are on currently.
```js
function current_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ \1/'
}

export PS1="\u@\h \W\[\033[32m\] |\$(current_branch)\[\033[00m\] > "
```

## 2.Push this!
Especially when working with colleagues who use weird and complicated branch names, typing the name every time you push code is a pain in the ‘wrong’ place.

```bash
function gpthis(){
    remote=${1-origin}
    cowsay "pushing $(current_branch) to $remote"
    git push $remote $(current_branch)
}
```


## 3.First to push.
When multiple people are working in the same branch, there is always a race for who pushes first. The guy who pushed second, has to pull rebase and then push, too much work right?

```bash
function gpsafe(){
    git stash
    remote=${1-origin}
    conflict=$(git pull -r $remote $(current_branch) | grep -i "CONFLICT")

    if [[ -n $conflict ]]
    then
        cowsay "Please resolve the above CONFLICTS"
        git status
    else
        gpthis $remote
    fi
    git stash pop
}
```
