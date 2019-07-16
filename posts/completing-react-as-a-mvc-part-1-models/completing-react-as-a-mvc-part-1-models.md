---
templateKey: 'blog-post'
title: 'Completing React as a MVC – Part 1 – Models'
date: 2016-06-18
featuredpost: false
description: >-
 In this article, you will learn about MVC using ReactJS. React is a JavaScript library for creating user interfaces. Hire ReactJS Developers from Codebrahma
keywords:
- reactjs developers
- react js development company
- hire react developers
- hire reactjs developers
- hire reactjs development company
- react as mvc
author: ARAVINDAN 
link: /completing-react-as-a-mvc-part-1-models
tags:
- flux
- React
- React js development company
- redux
---

Building great front-end applications is an issue that has plagued the development community for some time now. React is Facebook's remedy to this problem. [React.js][1] is an open-source javascript library that provides a view for the data rendered as HTML.  This article shall give you a glimpse of the Various Architectures to use in React for building great apps.

React has enjoyed a warm reception amongst the developers. A lot of developers have started adopting a number of [Best practices in React][2] to improve their webapps. React aids the process of building front end applications by making the UI consistent and increasing the efficiency of the rendering process. It is basically the V in the MVC architecture.

## Various Architectures to use in React

Though a number of benefits are credited to React, building large applications can be quite tedious with React. It does not handle  the structure of your webapp. This is where the Flux protocol comes into picture.

### Flux

Facebook's official site describes Flux as follows:

" It is the application architecture that Facebook uses for building client-side web applications"

Flux is an architecture used to implement uni-directional workflow. Uni-directional workflow is an idea developed by Facebook to organize the web application by ensuring that the data flows in one direction throughout the application.

Flux is constituted by four major components:

* Actions
* Dispatcher
* Stores
* Controller Views

Let us look at these components in detail

### Dispatcher

Dispatcher is basically the central hub of the entire process that takes place. It plays the typical managerial role of receiving the actions and dispatching these actions and data to registered callbacks. The dispatcher has the ability to broadcast the payload to all the registered callbacks and call them back in a specific order. There is only one global dispatcher and it acts as the central hub.

#### A simple example for Dispactcher
```js
var myDispatcher = newDispatcher();
    
    
ADD PAYEE 
addPayee: function(event)
{
  myDispatcher.dispatch(
  {
    action : 'add-payee';
    payeeDetails:
    {
      accountNumber : '12345678';
      name : 'Ajay';
      iifsc code : 'kkf1234';
    }
  });
}
```   

In the above program. We are creating a new button functionality in the webapp. When the button is clicked a new action is dispatched by the view with action name and new item data.

### Store:

The store is a micro manager that manages the data, data retrieval methods and dispatcher callbacks. Essentially stores in flux is used to manage the application state of a particular domain within your application. The store is a singleton. A singleton,as you know is a design pattern that restricts the instantiation of a class to a single object. Thus you cannot declare with a 'new'. There is only one instance of a store across you application.

Some of the salient features about store is:

* A store is not a model. There are models inside a store.
* The actions dispatched do not update data. The only thing in your application that has the ability to update data is the store.
* A store represents a single domain in your application.
* In case of large applications there might be multiple domains where you might need several store for each domain. In case of small applications you will need only one store.

#### A simple example of Store
    
```jsx    
var payeeList {

  payees : []
};
myDispatcher.register(function(Details) {
  payeeList.pauees.push(details.add.payee)
});
```    

### Controller Views

These are React components that listen to the change events and retrieve the application state from the store. The retrieved data is then passed down to the child components through props.

![various architectures to use in React_Controller view][3]

### To sum up

Though you can build applications on React without the support of Flux, the use of flux makes your application much more elegant and structured. Thus we highly recommend the use of flux in your applications. But the overuse of flux also leads to some problems as we discussed in React.js Best practices of 2016. This is an adversary that developers should be weary of.

## Redux

The official documents define Redux as the "**a predictable state container for JavaScript apps". ** The flux architecture is a concept with many desirable characteristics. Redux is a high performing implementation of the important concept of flux. The most important concept being uni-directional work flow. But Redux only implements some of the concepts of Flux and not all.

Some fundamental differences in Redux and a complete implementation of Flux is:

* There is not separate dispatcher, the store listens directly for actions and uses a reducer function to return a new app state every time an action is dispatched
* The app state is immutable
* The entire application's state is held in one place

To understand the implications Redux. Let us consider the app state to be a tree with child and root nodes.  A change to be made in the child node, cannot be made directly as the state is immutable. A replica of the target child node is created in which the necessary changes are made. But a logical flaw arises in this situation. How can two different child nodes be created from the same parent node? A replica of the corresponding parent node is also created in order to resolve this issue. The newly created nodes are then connected to the other existing unchanged nodes.

###  How does it work?

The working of Redux is made astonishingly simple by the use of the Reducer function. The reducer is a derivative of the JavaScript reduce function. It accepts two inputs An action and next state.

By definition Reducers are designed to be pure functions ie the output of the function remains constant for the same input irrespective of the number of times you pass the input. The sole functionality of the reducer function is to accept the current state,perform the prescribed action and then returns the desired next state.

The  reducers do not store state or mutate state. They just pass and return the state.

To sum up Redux is an implementation of Flux that is managed to get a lot of things right thereby gathering the attention of the web development community. Inspite of being relatively new Redux has already proved effective in its functionality. Some of the most important high lights of Redux are:

* The current state of the app can be re-produced at any time
* The complex essentially boils down to a starting state and a sequence of actions
* You can auto update the view and reducer components without reloading the page

## The Culmination

Though there are number of Architectures available today that work quite well with React, the most popular ones are Flux and Redux. Here we have discussed the fundamentals of both these architectures. After reading this article you can confidently claim to have quite an insight in the Various Architectures to use in React. Now you may take the next step in your React journey. If you have any other points to be added on these architectures or any other points to be discussed on React add them in the comments section.

**Looking for [React JS development company ?][4]**

[1]: https://facebook.github.io/react/
[2]: /react-js-best-practices-2016/
[3]: ./images/Controller-views.png
[4]: /react-js-development/

  