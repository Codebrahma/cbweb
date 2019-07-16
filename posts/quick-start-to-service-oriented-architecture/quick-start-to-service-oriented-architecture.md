---
templateKey: 'blog-post'
title: 'Quick start to Service Oriented Architecture'
date: 2013-06-18
featuredpost: false
description: >-
  Codebrahma demystifies Service Oriented Architecture for dummies.
author: Nithin Krishna 
link: /quick-start-to-service-oriented-architecture
tags:
- web application development
---

SOA, an abbreviation that is frequent in text-books, but not so much in codebases.

Lets demystify SOA.

Lets say you want to build a Flight Ticket Booking website. Basically you get the users requirements and search from expedia and other service providers.

### The monolithic way of doing this is

1. You make an AJAX call to your HTTP server,
2. HTTP server queries the API of expedia and other service providers
3. Once the API responds, your HTTP servers sends the result back to the browers (via the AJAX call)

Cons:

1. Your HTTP server is highly coupled with the way your service provides.
2. Response Time is high. The user is kept waiting throughout this process.
3. Testing and maintenace becomes very difficult with such high coupling.
4. Takes up a lot of server resources and scaling becomes a pain

### The Services Way

1. You make an AJAX call to your HTTP server, it take the request and passes it onto a Messaging Queue.
2. Your HTTP server immediately responds to the user, asking him to wait. Your HTTP server is now free of that request.
3. You implementing a Booking Service, which takes the request from the messaging queue and carry's out its responsibilty and puts its reponse back
4. We listen for this response and pass the information to the browser via a socket connection or a comet server.

Pros:

1. Responsibilities are well seperated. Your HTTP service and Booking service are no more coupled. They talk via the messaging queue
2. Testing and maintenance becomes a lot easier.
3. Very Responsive.
4. Server Resources are freed and its easier to scale.

  
Have you used SOA in your architecture. What Messaging Queue did you use?
