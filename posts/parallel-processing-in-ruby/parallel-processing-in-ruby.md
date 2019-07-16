---
templateKey: 'blog-post'
title: 'Parallel processing in ruby'
date: 2014-08-15
featuredpost: false
description: >-
  Ruby on rails developers explaining how parallel processing works in ruby with code snippets.
author: Nithin Krishna  
link: /parallel-processing-in-ruby
tags:
- Parallel processing in ruby
- Ruby on rails development
---

**[Parallelization](http://en.wikipedia.org/wiki/Parallel_computing)** is a powerful concept. It can speedup execution n-fold. A lot of processes are inherently concurrent. Such processes have to be identified and exploited.

These days most computers run on multi-core processors. If we run existing applications on multi-core systems, there might be no visible performance difference. We need to optimize our code to enjoy the performance benefits of multi-core systems.

This [gem](https://github.com/grosser/parallel)(Parallel) helps us achieve this in ruby.

```ruby
#with and without 'Parallel'
Benchmark.bm do |x|
  x.report("with") { Parallel.map(1..50, :in_threads => 10) { sleep 1 }  }
  x.report("without") { (1..50).to_a.map { sleep 1 } }
end
case              |   user    |  system   |  total   | real
-------------------------------------------------------------------
with              |  0.000000 |  0.010000 | 0.100000 | (05.006012)
without           |  0.010000 |  0.000000 | 0.010000 | (50.055157)
```

Results are instantly visible. A 10-fold increase in performance!

## What can be parallelized?
Let’s look at some examples.

1.MapReduce Operations
```ruby
#Without parallel
orders
  .map(&:amount)
  .inject(:+)

#With parallel
Parallel.map(orders)(&:amount).inject(:+)
```
2.Multiple Uploads / API Calls

```ruby
s3 = AWS::S3.new
files = [..] #Array of files

#Without parallel
files.each{ |file| s3.buckets[bucket_name].objects[key].write(:file => file) }

#With parallel
write_file = -> (file){ s3.buckets[bucket_name].objects[key].write(:file => file) }
Parallel.each(files)(&write_file)
```

3.Sequential database queries

```ruby
#Without parallel
User.all.each_with_index do |user, index|
  user.update(:attribute => "#{index}")
end

#With parallel
update_user = -> (u,i){ u.update(:attribute => "#{i}") }
Parallel.each_with_index(User.all)(&update_user)
```
Whilst we aim at building rails-applications that scale and perform better, limited by the performance constraints that are inherent to ruby such intelligent code optimizations are key.

Refrences: [nithinkrishna.github.io](http://nithinkrishna.github.io/2014-08-15-parallel-processing-in-ruby/)

