---
templateKey: 'blog-post'
title: 'Make your React Native app lighter and faster'
date: 2019-11-14
featuredpost: false
description: >-
  Optimzations for smaller, lighter, faster, smoother react native app.
keywords:
- react native
- react native app
- optimze
- fast
- small
- smooth
link: /make-your-react-native-app-lighter-and-faster
category:
- Technology
tags:
- react-native
- mobile-app-development
author: Arivanandan
---

# Make your React Native app lighter and faster

React Native apps naturally run heavy, compared to a similar app implemented optimally on native. However, given the fast develoment time and how far smartphones have come along in terms of processor power and memory, it is one of the best options for mobile development. Let's look at some ways to make your app faster and lighter. Starting from making the app smaller, run on lesser memory to using web benchmarks like time to interact and time to first paint to make the app feel smoother.

## Assets
Fonts and images make bloat the size of your app, putting off people from downloading it. Limit your app to a single font with maybe two to four weights. If you are using something like react-native-vector-icons, limit the number of fonts you bundle by generating your own icon-set with only the icons your app uses.

Bundle the bare minimum of images required for the app to function. This likely includes splash screen images that show up when the app is opened initially. Download other assets from a cdn. These will get cached so there're no worries of causing unnecessary overhead. You could even go as far as to eagerload the images that might be required for a certian section before you navigate there.

Run a package analyzer or a bundle visualizer such as [this](https://github.com/IjzerenHein/react-native-bundle-visualizer) and figure out what libraries are taking up the most space and deal with it.

## Smaller Android APKs
On android, smaller APKs can be generated if they are separated according to their architectures. Set **enableSeparateBuildPerCPUArchitecture** to true. Also set **enableProguardInReleaseBuilds** to true for minified bundles. Watch out for libraries that cross reference class names when using Proguard, as they'll be unable to find these files if the file names are different. This can be managed from **proguard-rules** file. These should save a good 10-20% if your app is small. Be sure to upload your AAB to the Google Playstore instead of the raw APKs.

## Batch rendering
One thing to be understood is when the JS thread is busy putting content on the screen (rendering), responsiveness takes a hit, especially if it's media intensive. A good way to handle this is to batch out your renders. This can be done by introducing delays betweeen rendering of sections. It is also a good idea to delay the initial render itself by throwing a loading screen for a second if there's a bout of non-responsiveness.

## Lists
List optimizations are probably the most important if your app uses lists. There are several props of interest that can be configured for faster lists.

This [document](https://facebook.github.io/react-native/docs/optimizing-flatlist-configuration) gives a pretty comprehensive idea of what needs to be done. There're trade-offs between smoothness and responsiveness. Another thing you could do that the document doesn't mention is using **getItemLayout** so that it doesn't have to calculated on the fly for every list item. This is only useful if you have fixed dimensions for your list items.

## Memory leaks
If you find your app to be very slow, chances are there's a memory leak somewhere. This could be because of a network call response using setState or a timeout function or a setInterval function. It might not be obvious where a leak is coming from, but an easy way to narrow it down is to run a profiler, navigate in and out of a screen and if the memory usage keeps rising, it probably has something that isn't being clean up properly.

Remmeber to cancel your network calls (unless you use redux), remove subscriptions and cancel timeouts and setInterval functions when you a component unmounts.

## Images
High resoultion images can really mess up responsiveness. First of all you most probably do not need to render a super high-res image on a small screen. But if you have no control of the image source, there's no other option except to deal with it (unless you can write a back-end service that downloads the image and sends a scaled down version). The best way to deal with it is simply not rendering high-res images. You can make a headers request to figure out how big the file is and decide if you want to download it or not. Probably something else that works is to try some other implementation for displaying images such as [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) or simply scaling it down on the app with something like [react-native-image-resizer](https://github.com/bamlab/react-native-image-resizer).

## Bridge
The JS thread is slow because it's single-threaded and pretty much everything from network requests to renders is happening there. As much as possible we want to keep it light. When something gets executed on the JS thread it has to eventually land on native for it to work on the phone. A couple of things are optimized to keep the communication across the JS-Native bridge light such as StyleSheet and Animated API. If you use a plain object as for styling, it gets sent across the bridge everytime. However when it is created with StyleSheet, it is sent across the bridge and simply referenced everytime it's required. 

Similiarly do not use setState for animations on react native. It is very expensive. Using the Animated API is much much much more light weight as it sends the function across and executes it in the native thread.

## Router
Stack routers keep the previous pages in memory. This might end up taking too much memory, making the app sluggish. Keeping the stack limited is one way of handling this. Decide a maxmimum and pop out old scenes when it is reached. Make sure you have navigation available from most scenes if you are plannning to do this though.

## General react optimizations
Pretty much everything that applies to React applies here as well such as using pure components or using shouldComponentUpdate. 