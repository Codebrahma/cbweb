---
templateKey: 'blog-post'
title: 'Getting Started with Tmux'
date: 2014-08-04
featuredpost: false
description: >-
  Tmux has become an essential development tool for many programmers. Here is a brief tutorial on getting started with Tmux.
author: Yuvaraja Balamurugan
link: /getting-started-with-tmux
category:
- Tutorial
tags:
- tmux
---

tmux is an awesome tool for developers to improve their workflow. Here I am going to cover some of the basic functionalities along with the aliases that I use, for you guys to start with tmux.

## tmux.conf

The ~/.tmux.conf file is a config file for tmux. The tmux global configs are set here. This is our playground for this post.

## Remap the prefix

Now Let us remap the prefix from `crtl + b` to `ctrl + a`. I choose `ctrl + a` because it is easier to access those keys together. Add the fllowing snippet to your `~/.tmux.conf`file and reload it using `source-file ~/.tmux.conf`.
    
    
```bash    
# remap prefix to Control + a
set -g prefix C-a
unbind C-b
bind C-a send-prefix
```    

## Reload easily

Now after changing the `~/.tmux.conf`, I felt a little annoying to run the command`source-file ~/.tmux.conf` everytime. So I wrote 2 lines to make this task just a single button away. Add the following lines to your `~/.tmux.conf` and reload it using `source-file ~/.tmux.conf`
    
    
```bash    
# force a reload of the config file
unbind r
bind r source-file ~/.tmux.conf
```    

Now all you need to do is change the `tmux.conf` file and do `ctrl + a` and `r`. This will reload the config file for you.

## Panes

Another feature of tmux is you can type `ctrl + a` and % to split the window vertically and `ctrl + a` and " to split the window horizontally. Personally I found this very annoying and hard to remember. So I decided to have the key `v` for vertical split and `h` for horizontal split. So I added the following to my `tmux.conf`file. Additionally doing a vertical or horizontal split will split the pane and put you into the home directory.
    
    
```bash    
unbind %
unbind '"'
bind C-v split-window -v -c "#{pane_current_path}"
bind C-h split-window -h -c "#{pane_current_path}"
```    

This will enable you to use `ctrl + v` to split the pane vertically and put you in the same folder as you were before splitting the pane. Similarly for `ctrl + h`.

## Additional Points

* You can create new windows using `ctrl + a` and `c`.
* You can kill a pane using `ctrl + a` and `x`. This will ask you for (y)es or (n)o prompt, typing in `y` will kill the active pane.
* Google about tmux sessions and learn to use them efficiently.
* Make tmux start at the start of your terminal.

The following is the tmux aliases that I use. Feel free to use them as per your needs.
    
    
```bash    
tnew_session(){
    
    TMUX= tmux new-session -d -s $1
        tmux switch-client -t $1
}


alias tnews='tnew_session'
alias tls='tmux list-session'
alias tlw='tmux list-window'
alias tsw='tmux switch -t '
alias tlc='tmux list-command'
alias tat='tmux attach -t'
alias trs='tmux rename-session -t'



alias tks='tmux kill-session -t'
```
  