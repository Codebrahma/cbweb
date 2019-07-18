---
templateKey: 'blog-post'
title: 'Ruby rescue vs try vs ternary'
date: 2014-07-15
featuredpost: false
description: >-
  Codebrahma explaining different types of exception handling in ruby. Comparision between Ruby Rescue vs Try vs ternary.
author: Nithin Krishna 
link: /ruby-rescue-vs-try-vs-ternary
category:
- Research and Articles
tag:
- Ruby on rails development
---

All of us have faced this situation when, the current_resource object provided by devise turns out to be nil. All method invocations on current_resource on current_resource will throw an `undefined method for nil:NilClass` exception.

To handle this, we can try one of the following.
    
```ruby    
1. current_resource.name rescue nil
2. current_resource.try(:name)
3. current_resource ? current_resource.name : nil
```

But, what is the most efficient way? Let's find out.
    
```ruby    
require 'benchmark'

n = 5000000
current_resource = nil

Benchmark.bm do |x|
  x.report("rescue") do n.times { current_resource.name rescue nil } end
  x.report("try") do n.times { current_resource.try(:name) } end
  x.report("ternary") do n.times { current_resource ? current_resource.name : nil } end
end


user       system        total         real
--------------------------------------------------------------
rescue   | 16.300000   | 0.600000  | 16.900000 | (16.910213)
try      | 0.7800000   | 0.000000  | 0.7800000 | ( 0.783828)
ternary  | 0.2800000   | 0.000000  | 0.2800000 | ( 0.277966)
```

Note that **rescue** is considerably inefficient compared to the other two (almost 60 times). **The Ternary operator** seems to be the most sound option.

Refrences: [nithinkrishna.github.io][1]

[1]: http://nithinkrishna.github.io/blog/Ruby-Rescue-Vs-Try-Vs-Ternary/

  