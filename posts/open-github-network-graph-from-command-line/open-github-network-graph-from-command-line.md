---
templateKey: 'blog-post'
title: 'Open github network graph from command line'
date: 2014-12-11
featuredpost: false
description: >-
  Github&#039;s network graph is one most elegant tools to track your project&#039;s progress. Here is a brief tutorial on how to open github network graph from command line
author: Nithin Krishna  
link: /open-github-network-graph-from-command-line
tags:
- github
---

Github's [network graph][1] is one most elegant tools to track your project's progress. Open the network graph of you current project with this shell script.

Just type _network_.
    
```js    
function network(){
    url=$(git remote -v | grep origin | awk 'FNR == 2{print $2}')
    sub_path=$(echo ${url##*github.com})
    project_name=$(echo ${sub_path:1} | rev | cut -c 5- | rev)
    project_url=$(echo "https://github.com/${project_name}/network")
    cowsay "I'm taking you to $(echo ${project_url})"
    python -mwebbrowser $(echo ${project_url})
}
```
![network][2]

With a little more customization.
    
```js    
function open_url(){
  cowsay "I'm taking you to ${1}"
  python -mwebbrowser $1
}

function gh(){
  url=$(git remote -v | grep origin | awk 'FNR == 2{print $2}')
  sub_path=$(echo ${url##*github.com})
  project_name=$(echo ${sub_path:1} | rev | cut -c 5- | rev)
  open_url "https://github.com/${project_name}/${1}"
}
```

```
gh # Open repo
gh network # Open network graph
gh pulse # Open repo pulse
gh pulls # Open pull requests
gh branches # Open branch list
gh wiki # Open wiki
```
 
[1]: https://github.com/blog/39-say-hello-to-the-network-graph-visualizer
[2]: ./images/network-1024x398.png

  