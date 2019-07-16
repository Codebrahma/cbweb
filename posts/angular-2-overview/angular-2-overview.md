---
templateKey: 'blog-post'
title: 'ANGULAR JS 2 : The Overview'
date: 2016-05-16
featuredpost: false
description: >-
 The Angular 2 has reached release candidate stage. This Angular 2 Overview provides all you need to know to stay updated with the framework.
keywords:
- Angular 2 overview
author: ARAVINDAN 
link: /angular-2-overview
tags:
- Angular.js
- Angular2
---

Angular 2, Google's much awaited new framework has reached the release candidate stage. This indicates that the new framework will be available for general usage quite soon. The web development community awaits the newly upgraded framework with a million questions. There cannot be a better time to analyse the various aspects of the framework with a complete Angular 2 Overview.

Angular JS is a Java script framework that is extensively used for the development of web based applications. It is an open-source framework maintained by Google and a community of individuals,corporations. Right from its launch in 2009, Angular JS has been continuously evolving to accommodate the rapidly developing changes in the world of internet. The current version of Angular JS, angular 1.5.5 is one of the most advanced versions of Angular JS available today.

In October 2014 Google announced that Angular JS will go through some drastic changes and would be directly upgraded to Angular js 2.0. The web development community has been ablaze with a large number of questions about the Angular js 2. The launch of angular 2 beta version this year has only given way for more queries regarding the new upgrade. This Angular js 2 Overview is aimed at addressing some of these queries.

## Why Angular 2.0?

Google has announced the shift from all the Angular JS previous versions to angular 2 without any backward support. This is a radical decision. A paradigm shift in a widely used framework should definitely be backed by solid reasons. Let us analyse the reasons behind this shift.

### Performance

"Perform or Perish: The law of the jungle"

Angular JS was initially designed by Google for designers who wanted to build persistent HTML forms quickly. It was later embraced by the developer community for building large and diverse web applications. This change in fundamental functionality meant that Angular JS had to be equipped with many new features to ensure a smooth development process. However there are some limitations on the improvements that can be made to Angular JS. This is due to the contradictions in the fundamental assumptions that were made while designing the framework. To overcome these limitations Google has re-designed the entire framework. Thus, it overcame a lot of performance issues that existed before.

### Mobile

Angular JS was introduced in 2009. Back then the proliferation of mobile devices such as cell phones and tablets had not yet started. Thus, the initial versions of Angular JS were not built with mobile devices in mind. Angular 2 is designed with mobile devices at its crux. The philosophy behind this decision is that, any framework that is built to handle mobile development will definitely be able to handle the desktop aspect of things.

### The ever changing internet

"Yesterday's technology is too old to hold good!"

From the time Angular JS was designed, the internet has evolved drastically. Building applications on Angular JS that are cross browser compliant on the modern browsers is a difficult task. Developers had to come up with various workarounds and hacks to overcome this difficulty.

Angular JS 2 is designed with ES6 and modern browsers in mind. this lets the designer focus on the code required to perform the functionality rather than the compatibility issues.

### Modular

Over the years, through the various stages of evolution, a number of modules have been added to Angular JS core. These have accumulated as extra baggage thereby affecting the performance of the framework. These modules have been removed from the core in angular 2 and they will be available in the angular's ecosystem of modules. The programmer can utilize these modules as per requirement.

### User Friendly

Angular JS is not a very user-friendly framework. The learning curve for the framework is also quite steep. The range of new features from derivatives to controller have been bolted on to Angular JS framework. This is the reason it still remains a framework of nerds. The angular 2 is designed with all the essential features in its core that would definitely be more user-friendly and much easy to learn.

 
 

## Mixed Reaction

"Change is the only thing that never changes"

Right from the day Google announced a shift to Angular 2.0,the web development community has been quite skeptical about it. The announcement at ng conference that there will be no backward compatibility for the older versions of Angular JS created a lot of resentment about the shift.  Migrating all the existing applications to Angular 2 remains the major concern of the web development community.

## Angular 2 overview

Angular 2 is a completely revamped framework that has undergone some significant changes. Let us see what some of these changes are:

### React native and Angular 2 : The Marriage of Convenience

One of the most fundamental change in Angular 2 is the separation of the framework into two:

The core – This deals with components, services, router, directives, filters

The renderer – This deals with DOM, CSS, animation, templates, web components, custom events, etc.

The split in rendering has multiple benefits including improved performance. This split has also made it possible to render an Angular JS application with React. Adding a [library][1] will allow the developer to come up with Angular JS applications rendered with react native.

### Typescript & Angular 2 : If you can't fight an enemy, join him

Google and Microsoft join hands to develop Angular2 on typescript.( _The only time the products of these giants have been coupled together before is when we use IE to download chrome_)

Until 2015 Angular 2 was supposed to be written in AtScript. AtScript is a superset of ES6 that uses Microsoft typescript's type syntax to generate runtime assertions instead of compile time checks. But in march 2015 Google came into an agreement with Microsoft. Now Angular 2 is being developed on Typescript. Microsoft has agreed to add decorators i.e annotations to its typescript language which is a strict superset of JavaScript. Thus, typescript emerged as the language for developing Angular 2 and also the recommended language for apps.

### LAZY LOADING:

The perpetual agony that a user faces when the page is continuously loading is not new to any netizen. The slow loading is a cause for major concern among the web community as it results in increased attrition rate.

Angular 2 proposes a solution to this problem by lazy loading where the basic HTML content loads before the additional time-consuming code, thus allowing the user to view the main content of the page without waiting for the complete page to load.

### Improved Dependency Injection : The Upgrade

Dependency injection is one of the main advantages of Angular 1.x series. It is one of the main factors which has made Angular JS as the most preferred web development frameworks. Yet there were some issues that has created some discomfort for the developers.

Angular 2 enters the arena,promising to solve all these issues. Some of the other important features such as child injector and lifetime/scope control are being added.

### Child Injector:

A child injector has the ability to inherit all the parent services but also the authority to override at the child level.

### Templating and Data Binding:

The template compilation process of Angular 2 is asynchronous in nature. Code based on module spec where the module loader will load the the dependencies by simply referencing them in the component definition.

### Directives:

Angular JS is equipped with 3 types of directives: Component, decorative & Template. The component creates the reusable components using encapsulated logic. The decorative as the name suggests will be used to decorate the elements. The template is used to create reusable templates.

### Routing solution:

The routers of Angular JS 1.x were designed only for handling simple test cases. But as the usage of the framework grew, more and more functionalities have been added on. The core of Angular 2 has been redesigned to handle all these functionalities with relative ease and more efficiency. Some of the additional features are:

* Simple JSON-based Route Config
* Optional Convention over Configuration
* Static, Parameterized and Splat Route Patterns
* URL Resolver
* Query String Support
* Use Push State or Hashchange
* Navigation Model (For Generating a Navigation UI)
* Document Title Updates
* 404 Route Handling
* Location Service
* History Manipulation

Some of the features of the new router that has created a buzz in the industry are:

### Child router

This feature enables the encapsulation of each subset into a separate component by providing its own router. This allows each subset to become a small application.

### Design

All the logic is built using a pipeline architecture which allows the developers to add new logics and delete default ones. It also allows the developers to make a server request for a user or raise data for a controller, while still in the pipeline.

### Logging

[Diary.js][2] is a very useful tool in Angular 2 that allows you to analyse where the time is consumed in your application thus facilitating the process of bottleneck identification.

### Scope

Angular 2 has decided to drop $scope in favour of ES6

## Conclusion

The Angular 2 has already reached its release candidate stage and should be available for general use quite soon. There has been a lot of speculation about its features and all of it will be put to rest once we have the final product. This overview is aimed at helping you be prepared for what to expect from the upgraded framework.

Was this useful? Is there any feature that we missed out? Feel free to share your comments.

P.S. If you're looking to [hire AngularJS developers][3], drop us a line!

[1]: https://github.com/angular/react-native-renderer
[2]: https://github.com/angular/diary.js/tree/master
[3]: /hire-angularjs-development-company/