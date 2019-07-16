---
templateKey: 'blog-post'
title: 'Implementing Upsert in Rails'
date: 2014-08-01
featuredpost: false
description: >-
  Tutorial on implementing upserts in rails. An upsert is update or insert. Upsert in database terms refers to an operation which should insert a row into a database table if it doesn’t not already exist, or update it if it does.
author: Nithin Krishna 
link: /implementing-upsert-in-rails
tags:
- Ruby on rails development
- upsert in rails
---

An upsert is ```update``` or ```insert```. Upsert in database terms refers to an operation which should insert a row into a database table if it doesn’t not already exist, or update it if it does. One can implement this function in Rails by writing ```__anActiveRecordExtension__```. This will allow you to call the upsert method on any model.

## The ActiveRecordExtension

1. Create a file ```active_record_extension```.rb in ```app/extensions```.
```ruby
module ActiveRecordExtension
  extend ActiveSupport::Concern

  #All extensions go here.

  def self.upsert(attributes)
    #Upsert implementation goes here.
  end
end

ActiveRecord::Base.send(:include, ActiveRecordExtension)
```
2. Set up an initializer ```extenstions.rb``` in ```config/initializers``` which initializes your extension.
```ruby
require "active_record_extension"
```

* * *

As I see it there are two ways to implement upsert. Lets look at both and run through some numbers.

## 1. Playing it safe
```ruby
def upsert(attributes)
  where(:primary_key => attributes['primary_key']).
  first_or_initialize.
  update(attributes)
end
```

## 2. Rescue from failure
```ruby
def upsert(attributes)
  begin
  	create(attributes)
  rescue ActiveRecord::RecordNotUnique, PG::UniqueViolation => e
    find_by_primary_key(attributes['primary_key']).
    update(attributes)
  end
end
```

So just after looking at the code, you’d notice that the first implementation makes 2 queries everytime regardless of whether the record is present or not. The second implementation makes 1 query when the record is not present, but3 queries if the record is present.

## Some numbers

Ideally an ```INSERT``` or ```UPDATE``` query takes around 100ms. However I’m stubbing the ```create```, ```update``` and ```where``` methods with ```sleep(0.00001)``` for benchmarking. Actual numbers will be 10,000 times higher.

```n = 5000```

```sql
case | user                      | system    | total     | real
------------------------------------------------------------------------------
  1  | new-record-upsert-1       | 1.020000  | 0.050000  | 1.070000 (1.232924)
  2  | new-record-upsert-2       | 0.020000  | 0.020000  | 0.040000 (0.098955)
  3  | existing-record-upsert-1  | 0.890000  | 0.060000  | 0.950000 (1.098148)
  4  | existing-record-upsert-2  | 1.100000  | 0.070000  | 1.170000 (1.384870)
  5  | random-upsert-1           | 1.010000  | 0.150000  | 1.160000 (1.311646)
  6  | random-upsert-2           | 0.560000  | 0.060000  | 0.620000 (0.764272)
```
The numbers seem to suggest that __Implementation#2__ is faster. The best case scenario is __37%__ faster while the worst case is only __18%__ slower. Even when best/worst case scenarios are randomized __Implementation#2__ wins hands down.

Gist: [upsert.rb](https://gist.github.com/nithinkrishna/549fa9d7213485cad392)

Refrences: [nithinkrishna.github.io](http://nithinkrishna.github.io/2014-08-01-upsert-implementation-in-rails/)