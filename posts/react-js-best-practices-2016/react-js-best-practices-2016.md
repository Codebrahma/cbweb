---
templateKey: 'blog-post'
title: 'React.js Best Practices for 2016'
date: 2016-05-19
featuredpost: false
description: >-
 Comprehensive list of informal rules to be followed to make your React code optimized. Hire us if you are looking for React.js Programmers.
keywords:
- React.js programmers
- hire react js developers
- react js development company
- react development company
- react js experts
author: ARAVINDAN 
link: /react-js-best-practices-2016
category:
- Research and Articles
tags:
- React
- react js
- reactjs
- React js development company
- Reactjs Developers
---

[React][1]– The open-source JavaScript library developed by Facebook has been in the spotlight in 2015. The web development fraternity is slowly adopting this relatively new library to develop many applications. A number of  major brands such as Airbnb, free code camp, Instagram, NewYork times have chosen React to develop their websites. 2016 is a year of great potential as well as great challenges for react.js programmers choosing React. React.js Best Practices 2016 are a set of informal rules to help developers overcome the challenges in developing quality code.

## Flip side of Flux:

Flux is a language agnostic micro-architecture developed by Facebook. It does not qualify as a full-fledged framework or a library but it is an architecture that works hand in hand with flux in implementing the concept of Uni-directional Data Flow. It helps in solving some of the most common challenges in the MVC architecture. Flux is a boon to the developers which helps to manage an application state The primary components of flux are:

* Dispatcher- used to automate the event callbacks
* Actions- methods that facilitate the process of passing data to the dispatcher
* Store- Containers that contain the state of the UI

The common problem that is faced by react.js programmers is the over-use of flux. Flux provides a clean way to store your application's state but using it for managing route related states would unnecessarily create complications in your code.

Suggestion:

The use of flux managing apps global state instead of using it for local and temporary data would help avoid creating unnecessary complications in your code.

## REDUX:

The official site of [Redux][2] describes it to be a predictable state container for JavaScript apps. Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. Redux is an evolution of ideas found in Facebook's Flux but it avoids the complexities found in flux by observing how applications are built in Em language.

### Normalizr:

Normalizer is a library used to keep the state flat. The frequent nested response that we obtain from API can be difficult to manage in redux architecture. Keeping your state as flat as possible helps in querying and manipulating the data for your components.

As the complexity of the application increases,so will the complexity of the response that you obtain from APIs. In this case, Normalizr helps in handling the data by providing a simple way to extract data from the nested responses.

 

## The Immutable object:

Immutable objects are those,whose state cannot be modified once it is created. Objects of this kind have always been used in programming

For example
    
``` js
var string1= "Code Brahma-";
var string2= "The expert web developers";
var string3= string1.concat(string2);
```    

 

It is obvious from the above code snippet that the value of string3 is now " Code Brahma-The expert web developers". The newly formed concatenated string is stored string3 and the string method does not affect the original string in any way. In java script,strings and numbers are immutable by design.

The use of immutable objects reduces the complexity of the code that we develop with the help of their reference level equality checks. One of the commonly used methods for implementing immutability in your code is the [Immutable.js][3]. Immuntable.js can be used by installing it as an npm module.

A simple example for Immutable.js is as follows
    
```jsx    
var book = Immutable.Map({
author: 'John',
genre: 'romance'
price: '123'
});

var changePrice = function( book, newPrice ) {
return person.set( 'price' , newPrice );
};

var book2 = changePrice( book, '200' );

console.log( book.get('price'), book.get( 'price' ) );
//123 200
```    

First, a book is created with the author, genre and price attributes. The `changePrice` function returns a new immutable map. When the `changePrice `function is executed, book`2` is created as a return value, and book`2` is strictly different than book. The price of each book map can be accessed via the `get` method. The properties of the maps are hidden behind the `get`/`set `interface, therefore they cannot be directly accessed or modified.

The immutable.js is a fast and intelligent way of developing immutability in your code.

## Routing

Routing is quite common in all client side applications. One of the most popular and recommended library for routing in React is the [react-router][4]. A simple tip to make your routing more effective is to maintain your router's state in sync with the global state. This allows you to keep a track of the router behavior.

## Use Lazy Loading

This is one of the most important features of web development today, as controlling attrition rate is one of the major challenges faced by all developers. This feature is extremely useful in large applications where you do not have to load the complete application before rendering.

## Classes

React is quite compatible with ES2015 classes. Thus defining your react classes as a plain java script class is also recommended in React.js Best Practices 2016.
    
```jsx    
class HelloMessage extends React.Component 
  render()
  { 
    return 
    Hello {this.props.name};
  }
}
```    

Mixins are not supported by ES6. Therefore it is not possible to use React mixin mechanism in ES6.

We definitely recommend the use of higher order components over mixins.

## PropType

_Props_ are the mechanism _React_ uses to let components communicate with each other. A parent component can pass it's child(ren) named prop values, which the child can then use in its internal logic.

For example:
    
```jsx    
const personDetails = React.createClass({

  propTypes:{

    personName : React.Proptype.string.isRequired

    phoneNumber : React.proptype.number.isRequired

    birthDate: React.proptype.instanceof(date).isRequired

  }

  render()
  {
    <table><tr>

      <th>Name</th><th>Number</th><th>DOB</th>

      </tr>

      <td>{ this.props.PersonName} </td>

      <td>{this.props.PhoneNumber} </td>

      <td>{this.props.BirthDate} </td>

      </tr>
  };
  }

});
```    

using proptype can actually save hours of coding time which makes a huge impact while developing large applications.

## Higher-Order Components:

When an existing component is required to perform some additional functionalities apart from the ones they were designed for, Higher-Order Components are used. Since mixins are not supported by ES6, it is necessary to adopt a different approach.

The new approach encourages developers to compose a new component from the existing one in order to extend the functionalities of the original component. Implementing Higher order components help to keep the view as simple as possible.

## Testing

Testing the code is a very important part of the development cycle that ensures the proper quality of the developed application. There are a number of libraries in React that allows the testing of the developed component.

### Component Testing

One of the most popular testing libraries of the recent times is [Enzyme][5] by Airbnb. The shallow rendering feature of Enzyme allows the testing of both logic and rendering the output of the program. OOf course, the professional testing by selenium cannot be replaced.

### Npm

"Knowledge is the only wealth that grows when shared"

npm helps Javascript developers share their code. This allows you to take the code of other developers as well as share re-usable bits of your code. Npm has a lot of quality re-usable content that can help you save a lot of coding time.

## ES2015

BabelJs is a configurable transpiler, a compiler which translates from Javascript to Javascript unlike a compiler which translates high-level application code into lower level code or binaries. Babel started out as `6to5` and has established itself as the defacto tool for Javascript transpilation beating out tools like Traceur. Babel allows you to create code in ES6/ES2015 and still compile it in present day browsers that are not compliant with ES6.  Thus, this compiler allows the use of next generation java script today.

## Conclusion

The number of programmers who have started adopting React for developing web applications is rapidly increasing. The knowledge about the various React.js Best Practices 2016 is essential for all react developers to produce updated quality code. If you have other React tools that can be added to the list, add them in the comments below.

If you're looking to [hire ReactJS developers][6] drop us a line!

**Looking for [React JS development company ?][6]**

[1]: https://facebook.github.io/react/
[2]: http://redux.js.org/index.html
[3]: https://github.com/facebook/immutable-js
[4]: https://github.com/reactjs/react-router
[5]: https://github.com/airbnb/enzyme
[6]: /react-js-development/