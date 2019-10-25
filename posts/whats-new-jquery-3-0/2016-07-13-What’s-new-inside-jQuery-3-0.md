---
templateKey: 'blog-post'
title: 'What’s new inside jQuery 3.0 - Slimmer and faster'
date: 2016-07-13
featuredpost: false
description: >-
  jQuery got a major update last month with the release of jQuery 3.0 and jQuery Compat 3.0. This release promises a slimmer and faster jQuery, with backward compatibility.
keywords:
- jQuery 3.0
- jQuery 3.0 features
- jquery 3.0 new features
- jquery 3.0 download
author: Balram Khichar
category:
- Development
link: /whats-new-jquery-3-0
tags:
- jQuery 3.0
---

It's been 10 years since [jQuery](http://jquery.com/) started ruling the web and it has stuck around for good reasons. After a long time jQuery got a major update last month with the release of jQuery 3.0 and jQuery Compat 3.0. This release promises a slimmer and faster jQuery, with backwards compatibility in mind. You can download the latest jQuery 3.0 from the [download page](http://jquery.com/download/). It's also worth having a look at the [upgrade guide](http://jquery.com/upgrade-guide/3.0/) and the [source code](https://code.jquery.com/jquery-3.0.0.js).

In this article, I'm going to highlight the new important changes introduced inside jQuery 3.0 and how you can use it.

 

#### 1\. jQuery 3.0 runs in Strict Mode

Today almost all browsers supported by jQuery 3 support [strict mode][5], this release have been built with this directive in mind.

![Jquery-strict](./images/eWqih.png)

Got your code running in non strict mode? No worries, You don't need to rewrite your existing jQuery code. Although jQuery 3 has been written in strict mode, it's not compulsory to run your code in strict mode. Strict & non-strict mode JavaScript can happily coexist.


#### 2\. For…of Loop

jQuery 3.0 supports the `for…of` statement, a new kind of `for` loop. This new iterator is part of the [ECMAScript 6](http://es6-features.org/). It gives a more straightforward way to loop over iterable objects, such as Arrays, Maps, and Sets. In jQuery 3.0, the `for...of` loop can replace the former `$.each(...)` syntax.
    
```js
var items = $('.random-class');

// old jQuery way
$.each(items, function(index, value) {
  // do something
});

// ES6 way
for(let item of items) {
  // do something
};
```

_Note: The `for...of` loop will only work with browsers that supports ECMAScript 6 or if you use a JavaScript compiler such as [Babel](https://babeljs.io/)._

 

#### 3\. requestAnimationFrame( ) for Animations

jQuery 3.0 uses the `requestAnimationFrame()` API for animations. It makes animations run smoother, faster and less CPU-intensive animations. This new API is only used in browsers that [support](http://caniuse.com/#feat=requestanimationframe) it. For older browsers (i.e. IE9), it uses previous API as a fallback method to display animations. If you want to learn more about **RequestAnimationFrame**, you can refer this good [blog post](https://css-tricks.com/using-requestanimationframe/).

![requestanimationframe-support](./images/requestanimationframe-support-1024x418.png)

 

 

#### 4\. escapeSelector( ) for Escaping Strings with special meaning

The new `$.escapeSelector()` method allows you to escape strings or characters that mean something else in CSS selector. This method is useful for situations where a class name or an ID contains characters that have a special meaning in CSS, such as the dot or semicolon. It's not a frequent occurring issue, but if you get into a problem like this, now you have an easy way to fix it.
    
    
//consider this is your element



//above element can't be selected like this because the selector is parsed as "an element with id 'abc' that also has a class 'def'.
```$('#abc.def')```

//with jQuery 3.0 it can be selected like this
```$( '#' + $.escapeSelector( 'abc.def' ) )```
    

 

#### 5\. Additional Protection against XSS Attacks

jQuery 3.0 added an extra security layer for protection against [Cross-Site Scripting (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)) attacks. It requires developers to specify `dataType: 'script'` in the options of `$.ajax()` and `$.get()` methods. In other words, While making a request for a script on a domain other than the one that hosts the document, you must now explicitly declare this in the options.

> _Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted web sites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it._

 

#### 6\. Removed special-case deferred methods in .ajax( )

The `jqXHR` object returned from $.ajax( ) is a `Deferred`. Previously, It had three extra methods with names matching the arguments object of `success`, `error` and `complete`. In jQuery 3.0 these methods have been removed. Now you can use the `Deferred` standard methods of `done`, `fail` and `always` or you can use the new `then` and `catch` methods.

 

#### 6\. New signature for .get( ) AND .post( )

jQuery 3.0 adds a new signature for the $.get( ) and the $.post( ) functions by adding a `settings` parameter to align them to $.ajax( ). It's an object that can possess many properties and its the same object that you can provide to $.ajax( ). The only difference when passing the same `settings` object to $.get() and $.post() as opposed to $.ajax() is that the method `property` is always ignored.
    
```
//HTTP Get
$.get([settings])

//HTTP Post
$.post([settings])
``` 

 

#### 7\. Class Manipulation Methods Support SVG

jQuery never fully supported SVG and this hasn't changed in jQuery 3.0. The jQuery methods that manipulate CSS class names, such as `.addClass()` and `.hasClass()` can now be used to manipulate SVG documents as well. This means you can find classes with jQuery in SVG and then style the classes with CSS.

 

#### 8\. Easy Show/Hide Logic

This is one important change that you should should remember. From now on, the `.show()`, `.hide()` and `.toggle()` methods will focus on inline styles rather than computed styles. The docs asserts that the most important result will be:

> _As a result, disconnected elements are no longer considered hidden unless they have inline display: none;, and therefore .toggle() will no longer differentiate them from connected elements as of jQuery 3.0._

If you want to understand the results of the new show/hide logic in more better way, you can refer this [table](https://docs.google.com/spreadsheets/d/1UaISjcS3UMxVJ7eSBIXtK-jqF8Grl67w640peCqlkoc/edit) created by jQuery team or read this interesting [Github discussion](https://github.com/jquery/jquery/issues/2854) about it.

 

#### 9\. Decimal values by .width ( ) and .height ( )

jQuery used to return round values with `width()`, `height()` and all the other related methods. jQuery 3.0 fixes that and you'll get more accurate result (i.e. a floating number). This is a very good improvement, as sometimes, users do require the exact values when they use these for a layout.

 

#### 10\. Deprecation of .bind() and .delegate() methods

jQuery 1.7 introduced the `.on()` method for attaching event handlers. jQuery 3.0 deprecated `.bind()`, `.unbind()`, `.delegate()` and `.undelegate()` methods and these methods might be removed completely in future releases. You can use `on()` and `off()` methods for all your projects, so you don't have to worry about future releases.

 

#### Conclusion

Many people consider that jQuery is dead and doesn't have a place in modern web. However, its development continues and statistics of its adoption (78.5% in the top million) contradict these claims.

![jquery-usage](./images/Screen-Shot-2016-07-12-at-7.37.08-PM.png)

In this article, I've walked you through the major changes in jQuery 3.0. As you might have noticed, this version is unlikely to break any of your existing projects. Keep using jQuery and "Write Less, Do More". 🙂