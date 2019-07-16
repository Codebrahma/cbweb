---
templateKey: 'blog-post'
title: 'Memory Management with Swift'
date: 2015-11-19
featuredpost: false
description: >-
  Learn about memory management using Apple&#039;s Swift programming language and Xcode, when building iOS apps. Contact us for iOS App Development services in bangalore.
keywords:
- iOS application development bangalore
- iOS application developers bangalore
- iOS
- Swift
- Apple
- Memory
- Management
- Xcode
- Instruments, ARC, Reference, Retain Cycles1
author: Mohonish 
link: /memory-management-with-swift
tags:
- Instruments
- iOS
- Memory management
- Swift
- XCode
---


When taking the dive into the world of mobile computing, any developer will be faced with a lot of new challenges – One of the most significant would be the challenge of managing memory.

Developing for mobile devices, having limited memory resources, one must be careful in maintaining the balance between what remains on our persistent database, and what remains loaded on live memory, all the while maintaining a silky smooth UI without compromising on app performance.

Seems like a big task. And indeed it is. But a little knowledge in memory management techniques goes a long way when starting out on a mobile application project. Trust me when I say that prevention is definitely better than cure here.

On iOS, managing memory efficiently is quite important as our apps are almost never allowed to take up a fair share of the maximum available memory. And even if your app treads closer to that limit, iOS will throw a couple of memory warnings before eventually terminating your application. App crashes are usually the #1 reason for it to be rejected on AppStore. But with the introduction of Swift, gone are the days of Objective-c where you have to get your hands dirty with memory very often.

The following guide will be divided into three sections. Although I would suggest you to read sequentially through them, feel free to skip to the next section if you think so as this article will cover most of the common aspects and terminologies of memory management.

1. Basics
2. Debugging with Instruments
3. Best Practices

Before we can work with memory, we need to be clear about the basics. Let's start with ARC.

**Automatic Reference Counting (ARC)** is a garbage collection technique used by Swift to manage the app's memory allocations. Whenever an object is created, ARC maintains a count of the number of references to that object. As long as that count is positive, the object and it's properties may be accessed by any of it's references and hence needs to remain in memory. But once the count becomes zero, it is clear that there are no active references to that object, i.e., it is not needed anymore. Hence the memory allocated for that object can be released immediately.

To read further about how ARC is different from the conventional tracing garbage collection, read [this thread][1] from Apple's mailing lists.

Now despite all it's advantages, the single biggest headache for ARC is Retain Cycles.

There are two kinds of references that can be held upon an object – Strong and Weak. A **strong reference**, in simple terms, would be the normal kind of reference that would prevent ARC to deallocate an object as long as there are strong references to it. On the other hand, a **weak reference** do NOT prevent ARC from deallocating the referenced object. When an instance is deallocated, if there were weak references to that instance that are still being held, then ARC sets their values to nil.

**Retain Cycles** occur when two objects hold strong references to each other. This prevents ARC from deallocating either of them even if they are not needed any more. Transitive relationships may also lead to retain cycles (A -> B -> C-> A) which is why they can be a pain to debug. Reference Cycles are prevented by setting the appropriate reference to weak. More on that later.

Retain cycles are a common cause for memory leaks, i.e., when there is a block of allocated memory that is no longer needed and has no references to it.

To err is human. And so in part 2, we will look into how you can debug your memory issues using the very useful Instruments Tool in Xcode.

Hope you found this article useful. Drop in a comment if you have any questions.

References:   
[developer.apple.com][2]

[1]: http://lists.apple.com/archives/objc-language/2011/Jun/msg00013.html
[2]: https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/Swift_Programming_Language/AutomaticReferenceCounting.html

  