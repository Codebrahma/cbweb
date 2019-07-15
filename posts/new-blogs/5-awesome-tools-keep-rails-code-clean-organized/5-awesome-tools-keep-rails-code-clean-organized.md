---
templateKey: 'blog-post'
title: '5 Awesome Tools to Keep Your Rails Code Clean & Organized'
date: 2016-04-29
featuredpost: false
description: >-
 The ruby on rails experts at codebrahma have come up with this list of awesome tools that would help you keep your code clean.
keywords:
- Ruby on Rails Development
- ruby on rails companies
- ruby on rails developers
- hire ruby on rails developers
author: ARAVINDAN 
link: /5-awesome-tools-keep-rails-code-clean-organized
tags:
- Ruby on rails development
- ruby on rails 
---

One of the main challenges in developing your own rails application is to keep your rails code clean. The rails experts at codebrahma have come up with this list of awesome tools that would help you keep your code clean and optimized for best results.

Ruby is an open-source, dynamic, object oriented programming language that is used extensively in the world of web-development. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is one of the most popular programming languages in the world. One of the main reasons for the popularity of ruby is the web application framework written in ruby called Ruby on rails.

Ruby on Rails or simply Rails is a  MVC framework that is used for creating web applications.  It was developed by David Heinemeier Hansson from his work on the project management tool called Basecamp. Developing a web application on Ruby on Rails is five to ten times faster than developing the same on any java frameworks.

## **The Thumb Rule**

### "Pure code is the code without side effects"

The fundamental difference between a professional programmer and an amateur coder lies in the quality of the code that they produce. The amateur may be able to produce code that does the job but there are certain aspects of the work of a professional that makes it stand out. The important qualities of a professional's work lies in the 3 R's

* Re-usability
* Readability
* Robust

Developing code that posses these qualities requires one simple rule: The code should be clean and organized.

## **Simple does not mean easy**

Though the path to creating professional code seems crystal clear and simple, executing the task may not be as easy as it sounds. As the size of the applications grows the task of keeping the code clean becomes tedious. Hours of fruitful labour that can be used in other useful pursuits should be used in order to make the written code organized. This limitation can be overcome with the use of some tools. These tools help in developing code that is optimized, understandable and re-usable

We at codebrahma recommend the use of these 5 amazing tools to keep your code absolutely clean and organized

### **Dead Weight**

Web content by nature is highly dynamic. The content and the design have to be changed from time to time inorder to keep netizens interested and to keep attrition rates down. But a major challenge in creating such an evolving content is the accumulation of unused CSS style sheets over time. Simple as it may seem, eliminating all unused css selectors manually is a daunting task. Dead weight is here to make the job easy for us. Dead weight is a ruby gem that is exclusively designed for the purpose of weeding out unused css selectors.

This gem helps the developer determine which CSS selectors are seldom used and can be safely removed. All you have to do is provide the set of style sheets and HTML pages to the gem and it will point out which are the css selectors that can be safely deleted. This gem cannot be implemented out of the box in rails as most of the web pages are dynamic in nature. In case you have opted to use pre-compilers such as Sass or Less then compiling all the style sheets and providing them as simple CSS files to the dead weight task is a recommended method to perform this operation.

### **Ruby Critic**

One of the newbies in the list of ruby tools, this gem is a combination of statistical analysis gems Reek,Flay and Flog where reek is used to determining smelly code, Flay is used for detecting duplicate code and Flog is used for ABC metrics. It eases the process of viewing your smelly code and refactoring them by creating a nice HTML file. This format of output makes it very user-friendly.

### **Bullet**

Another hurdle in the path to creating your amazing rails application is the N+1 query. Let us consider a case where we have a set of student roll numbers and corresponding marks as well in our application. When we reiterate over the marks then we will be running two queries

* One query to find the roll numbers
* And for each query we will have one query to find the corresponding marks

Thus if we run 1000 iterations then we will be running 1000+1 queries.This problem can be overcome with the use of include option that allows us to retrieve both roll numbers and the corresponding marks in a single query. The Bullet gem facilitates the solving of the N+1 problem by promptly throwing error messages whenever the code optimization is required. The gem also works out of the box and plays a huge role in creating optimized code

### **Brakeman**

In today's world cyber crime is a real threat. Creating secure code that does not have any malicious elements in it is an absolute necessity. The Brakeman is a gem that facilitates the process of making our code secure. It scans the entire application and provides a list of all the vulnerabilities in a neat format.The security warnings are classified according to their severity as high medium and low.This allows the easy navigation and understanding of the issues. The list of various security threats can be found in the [brakeman warning list][1]

"Vigilance is the price for security"

Just as all security applications one important disadvantage of Brakeman is that,if there are no warnings from brakeman for your application it does not mean that your application is absolutely vulnerability free.

![Brakeman screenshot][2]

![BRAKEMAN GEM][3]

![BRAKEMAN SCREENSHOT 3][4]

### **rails_best_practices**

The rails best practices is the rails code quality analyzer gem. It is used to sniff out code smells that are specific to rails. It offers a lot of suggestions to improve the quality of the code that you create such as  use scope access, restrict auto-generated routes, add database indexes, etc. Unfortunately there might be a number of suggestions which might turn out to be false positives  but nevertheless it is a great way to keep your code clean and tidy

 ![RAILS BEST PRACTICE GEM][5]

![RAILS BEST PRACTICE GEM][6]

## **Conclusion**

Creating optimized code for large rails applications can be a big challenge even for very experienced programmers. There are many gems present in Rails that can facilitate the process of clean code creation. We at codebrahma recommend these five gems to make great rails code. If you have any suggestions or if there are any gems that you feel should get on to this list go ahead and add it to the comments section.

[1]: http://brakemanscanner.org/docs/warning_types/
[2]: ./images/BRAKEMAN-SCREENSHOT-1.png
[3]: ./images/BRAKEMAN-SCREENSHOT-2.png
[4]: ./images/BRAKEMAN-SCREENSHOT-3-1024x373.png
[5]: ./images/RAILS-BP_1.png
[6]: ./images/RAILS-BP_2.png