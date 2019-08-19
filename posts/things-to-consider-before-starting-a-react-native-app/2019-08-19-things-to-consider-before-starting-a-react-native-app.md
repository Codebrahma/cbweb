---
templateKey: 'blog-post'
title: 'Things to consider before writing your first React Native app'
date: 2019-08-19
featuredpost: false
description: >-
  What you need to know before you write your first production React Native app.
keywords:
- react native
- react native app
- need to know
- first react native app
link: /things-to-consider-before-starting-a-react-native-app
category:
- Technology
tags:
- react-native
- mobile-app-development
author: Arivanandan
---
These are things I wish I had known before I started writing my React Native app. What I'll be trying to address here is *hopefully* all the things you need to know to prevent major refactors of your application code at a later point of time when you are deep in development.

Note: This blog does not give any details on what libraries to use or what options you have. Rather it aims to be a guideline where you can start and get an idea of what you might get into and then read up on all the topics that might interest you.

## Google Play & iOS App store rules
This is something people writing their first apps usually overlook. This is super important to know before you even start on your app as some important features of your app might have to be redesigned or even scrapped.
Android: https://play.google.com/about/developer-content-policy
iOS: https://developer.apple.com/app-store/review/guidelines

## UI Design
React Native is still a maturing framework. Although you can do a lot of beautiful things, some designs that might be easy to do in Native Android and iOS apps are really hard to implement in React Native. It is good to have an idea of what kind of limitations React Native has. Having nested scrollable areas is a good example. Basically, acknowledge if it makes sense to attempt to implement a design on React Native which might take too much effort.

## Router solutions
Routing in React Native has come a long way. As opposed to how in web, pages are independent and might even be reloaded from the stack, in React Native they are simply stacked on top of each other. So navigating from one screen to another keeps the older screens in memory. Finding a good stable router before you start development of your application is vital.

## Themeing your app
At some point you might want to have a dark mode. Changing styles or adding colors at this point might be a major pain point. Having extensible base components such as View, Text, TextInput and Image might go a long way in saving time. There are plenty of ways to do this. You can check out a good method here.

## Memory Leaks
Improperly handing unmouting can seriously impact app performance. When components mount, not only do you have to cancel setTimeouts or setIntervals, but also other async operations such as network requests, espescially if it calls a class method. Timers or async operations prevents the component from being garabge cleaned and as a result your application might end up using more memory than it requires and result in a sluggish user experience.

## CPU Intensive Operations
Since the code mostly runs on JS thread, hitting 60fps might be a hassle if you have some CPU intensive operations. For instance a long list which is manipulated before displaying might drop your fps below 10. If these operations are centre-piece to the application, it makes sense to go for native modules or maybe even a full-fledged native application.

### Delegating
Imagine running a couple of setStates a second to track a drag-and-drop. It might hinder performance. However, animations can be delegated to the native thread and react native exposes props to do this easily. Also, intensive data operations are better off handled on the server side.

## Simple Navigation
Always keep navigation simple, intuitive and fairly linear. Having a spiderweb of connections only exacerbates the chances of the app having a memory leak or running into memory issues by the shear number of scenes / screens that are residing in memory.

## Open Source Libraries

### Pick active libraries
Be careful while choosing your third party applications. React Native gets a lot of updates. If one of the third party library isn't being updated, you might run into problems upgrading others too because of constraints such as the gradle version. At the very least make sure you thoroughly understand how the library works so that you will be able to fork  and update versions or fix any problems that might arise.

### Figure out what you'll need
It's best to figure out what third-party libraries you'll possibly be needing such as maybe a photo editor or something that has to do with maps. This can help you decide if you can go with Expo's tools or React Native's CLI. Libraries that work with native code might not work with Expo.

## Project structure
I suggest not sticking to a single structure and constantly evolving it as your app grows. The structure you pick out when development starts might not be cut out to meet your needs as your app grows. Depending on how far you go on modularizing your code, the granularity might beget a few folders at least such as *components*, *fragments*, *templates*, *scenes* etc. Having a clean structure at the start still helps a ton.

## Local State vs Redux
Keeping your app clean is very important. Make sure you are always using the least amount of memory you possibly can. Keeping data in your state can prove very beneficial as you needn't handle removing data from memory when the component is unmounted. If the app is data intensive and you use redux, you might need to have methods to clear the redux store to keep performance unhindered by memory usage.

## Media Resources
If your app is image or video intensive, extra effort might have to go into development to get things right. Loading images that are high resolution slows down the app immensely. This becomes especially important when you are very dependent on external sources for media that you cannot control. For instance, you cannot choose a smaller size for an image or you have to display a clean YouTube player in the app (which isn't straightforward at the moment).

## Sticking to a Design Philosophy
There are a few ways to do styles in React Native similar to web. Since you need to accomodate your view to the size of the screen, a good approach is going for screen-size based styles. This can be done multiple ways like getting your screen size and letting components take fractions of the screen size, or going for raw percentage values which are computed by the layout engine or going for flex (which also works in a couple of scenarios). You might want to use a mix of these but have a clear-cut idea of what kind of effect they have on the screen when each of them is used.

## Expect to spend some time on native
While the application development itself is going to definitely be faster, expect to spend some time on the native side with tools such as Android Studio and XCode. If you are are new to the native side this might even take a sizeable amount of the development time and when breaking changes are introduced, brace yourself.

## Expo vs React Native
Expo is a toolchain that makes it easier to start working with React Native. However if you plan on integrating native modules or using third party libraries that integrate native modules, you might want to go with the React Native CLI.

## Profiler & Other Tools
Figure out how to use the profiler. By bringing up the debug menu, you can see the fps your JS thread is running at. Watch out for fps drops and run a profiler to figure out what exactly is casuing the problem. There are also other tools in this area such as tools to check your bundle size (so that you can ship a smaller app) and tools to monitor your network requests (maybe you can wrap them into a single endpoint).

## Delivering Updates
You cannot always get your users to download updates. Tools like Codepush can push code changes on the JS side.