---
templateKey: 'blog-post'
title: 'Ruby Decorators: Add behavior to objects'
date: 2014-04-28
featuredpost: false
description: >-
  Decorators allow us to add behavior to objects without affecting other objects of the same class. Codebrahma explaining ruby decorators, a key feature of ruby on rails.
author: Abhishek Sarkar
link: /ruby-decorators
category:
- Development
tags: 
- Ruby on rails development
---

Let us consider a problem in which we have a Car class. The top speed of any car is a maximum of 100kmph but by adding extra power packs to the car we can increase the speed of the car. These packs are Nitro and Boost. Nitro increases the speed of the car by 30kmph and Boost increases it by 50kmph. Also a car can add any number of these utilities to reach super high speeds.

## Solving using Inheritance
    
```ruby   
class Car
  def top_speed
    100 
  end 
end 

class CarWithNitro < Car 
  def top_speed
    super + 30 
  end 
end
  
class CarWithBoost < Car 
  def top_speed 
    super + 50 
  end 
end 
```    
    

The drawback of this pattern is * The Ruby Decoratorssubclasses are tightly coupled to the super class. Suppose if the we change the name of the method in the super class we need to make these changes to our subclasses as well. * No way of adding any packs to a car dynamically. If in a certain scenario we need a car with two nitro packs and three boost packs it's not easy with this architecture.

## Enter the decorator pattern

The decorator pattern allows you to attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

* A decorator is a wrapper object on the component class.
* Has the same interface as the component it is decorating so that it's presence is transparent to the clients
* Delegates requests to components
* Performs additional actions before or after delegating

## Applying decorator pattern to our problem step by step

* The component class that we would want to add new features to or "Decorate" is "Car"
* The decorators would be in this case "Nitro" and "Boost"

Now that we have identified what decorators we need let's write it
    
```ruby    
class Nitro
  # Wrapping the component class, Car object in this case 
  def initialize(component)
    @component = component
  end 
    
  # maintain the same public interface as component
  def top_speed 
    # after delegation modify the value 
    @component.top_speed + 30
  end
end
  
class Boost
  def initialize(component)
    @component = component
  end
    
  def top_speed
    @component.top_speed + 50
  end
end 
```    
    

Now we can start using our decorators to add new packs to a car object.
    
    
```java    
Nitro.new(Car.new).top_speed #130 

Nitro.new(Nitro.new(Car.new)).top_speed #160 

Boost.new(Nitro.new(Car.new)).top_speed #180
```    
    

That's it, our shiny new power packed cars are ready to be driven 😉
