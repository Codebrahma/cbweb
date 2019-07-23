---
templateKey: 'blog-post'
title: '5 MUST USE METEOR PACKAGES'
date: 2016-02-08
featuredpost: false
description: >-
 List of top Packages every meteor developers should know. Hire Meteor Developers who have built 10+ production level applications.
keywords:
- Meteor development company
- Hire meter developers
- Meteor developers
author: Raviraj Hegde  
link: /5-must-use-meteor-packages-for-meteor-developers
category:
- Research and Articles
tags:
- Meteor Development
---

Meteor, also known as MeteorJS, is a JavaScript application framework purpose designed to develop platform agnostic web applications. Meteor is written using Node.js and is completely open source. Native web applications are slowly gaining ground; we no longer need to load entire pages when clicking a menu or changing some settings on a page inside a browser. Here in this article, we are trying to list down the packages that every meteor developer should know.

Meteor has spiked in popularity as more and more developers are going back to the mobile web. As an application framework, Meteor is designed to simplify development of applications. To ease such development, it allows the creation and use of packages: readymade blocks of code that can be imported into your pre-existing code in a modular fashion to add new features. Here, we discuss some of the most useful and popular packages for Meteor.

1. **SIMPLESCHEMA**

This is a simple and reactive package that is used for validating schema when building web applications in Meteor. Other packages like _Collection2_ and _AutoForm_ include _SimpleSchema_ to offer a more comprehensive code base and functionality but if you want granular control over your data, this allows data manipulation at the most basic level.

2. **AUTOFORM**

This Meteor package comprises UI and other data input components. This allows you to easily create forms to accept user data as input for appropriate processing. _AutoForm_ also enables automatic reactive validation and can perform automatic insert and update events for the same. _AutoForm_ requires the _SimpleSchema_ package to run; if _Collection2_ is already installed, it can also run in cooperation with that.

3. **PROMISE**

The okgrow:promise is an API that adds a host of useful functionality to the core Meteor framework. It does so mainly by adding features related to returning Promise properties to various existing functions, thereby expanding their usefulness. _Meteor.promise_, _Meteor.wrapPromise_, _Meteor.wrapAsync_, _HTTP.getPromise_, and ReactivePromise are the additional functionality enabled by this package. This also improves existing _Meteor.subscribe_ with a new property `_readyPromise_` in returned object which resolves when the subscription is ready.

4. **COLLECTION HOOKS**

This add-on package extends the use and functionality of the _Mongo.Collection_ by adding before/ after hooks for insert, update, remove, find and findOne. These hooks are platform agnostic and work across clients, servers or a mix. Functionality is maintained even when the client initiates a collection method and it is the server that runs the hook, keeping in accordance to the collection validators (allow/deny). It is a very small but efficient utility that excels at a single job; in this case, it is exposing hooks after the specified objects. This can, in turn, be utilised for denormalization of data, implementing chain deletion procedures, sanitising and securing user input risks, etc.

5. **COLLECTION-HELPERS **

This package automatically arranges for transformations on pre-existing collections by using the transform option in the _Mongo.Collection_ in Meteor. This allows for the creation of simple models with interfaces similar to those of template helpers with extreme ease and convenience by generating user defined "_helpers_" that ease such transformations.

There are a large number of Meteor packages out there for adding a variety of functionality to your application. Admittedly, there can be no "must use" packages since the choice of packages is mostly determined by the functionality you desire.

However, from a general and overall perspective, the highlighted packages are the ones that are can be used in a wide variety of scenarios and provide functionality for a great number of applications and not only niche ones.

  