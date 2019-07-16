---
templateKey: 'blog-post'
title: 'Git Hunks'
date: 2014-05-05
featuredpost: false
description: >-
  Codebrahma explaining Git Hunks, one of the awesome tools in git. Git Hunks, git bisect and git cherrypick.
author: Yuvaraja Balamurugan
link: /git-hunks
---

Git is one of my favorite software. It always impresses me. Here is one of the awesome tools in git.

Let us consider a scenario where you modify a file and you just want to stage a part of the file. You stage hunk by hunk in git using the `--patch` option on `git add`. When you do `git add . -p` you will be presented with each hunk that is changed and various options like this

```diff
diff –git a/sample.txt b/sample.txt
index 65d26ae..1618d01 100644
--— a/sample.txt
+++ b/sample.txt
@@ -1,3 +1,5 @@ Hi,
+ This text was added now.
+ This text was present initially.
Stage this hunk [y,n,q,a,d,/,e,?]?
```

You can type `y` to add the hunk, or `n` to reject the hunk and it won’t be staged. Or you can type `e` to edit the hunk. And you will be presented with the hunk and a detailed description of how to edit the hunk.

```bash
# Manual hunk edit mode – see bottom for a quick guide
@@ -1,3 +1,5 @@ Hi,
+ This text was added now.
+ This text was present initially.
# ---
# To remove '-' lines, make them ' ' lines (context).
# To remove '+' lines, delete them.
# Lines starting with # will be removed.
#
# If the patch applies cleanly, the edited hunk will immediately be
# marked for staging. If it does not apply cleanly, you will be given
# an opportunity to edit again. If all lines of the hunk are removed,
# then the edit is aborted and the hunk is left unchanged.
```

If you are aware of some other awesome git tools let us know in the comments below.

