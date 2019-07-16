---
templateKey: 'blog-post'
title: 'Rails I18n and elegant message passing to Javascript'
date: 2014-09-07
featuredpost: false
description: >-
  Internationalization is the process of abstracting all strings out of your application. Rails provides excellent support for Internationalization.
author: Nithin Krishna  
link: /rails-i18n-and-elegant-message-passing-to-javascript
tags:
- Ruby on rails development
---

Internationalization is the process of abstracting all strings out of your application. Rails provides excellent support for [Internationalization][1].

Rails' internationalization works well when views are built the Rails way. But when we are looking to build SPAs and front-end heavy applications, we often end up hard-coding error messages, response status messages (etc) in our javascript fies. Or worse, polluting javascript with Rails helpers!
    
```js    
$(document).ready(function(){
  alert("Welcome!");
  alert("<%= t('welcome_message') %>"); 
})
```
As our projects grow, such practices contribute to greater software entropy and it becomes nearly impossible to maintain code.

## 

## Keeping it neat and clean

* * *

### 1.The MessageHandler service.

Write a simple message handler service which takes in a language, parses the corresponding `language.yml` file _(from config/locales/*.yml)_ and returns it's contents as a hash.
    
```ruby    
class MessageHandler
  class << self

  @@data = {}
  
  def data_in(language)
    load! if !@@data[language]
    @@data[language][language.to_s]
  end

  def load!
    possible_languages.each do |language|
      file_path = locale_file_path(language)
      @@data[language] ||= YAML.load(File.read(file_path)
    end
  end

  def possible_languages
    [ :en, :es, :pt]
  end  

  def locale_file_path(language)
    File.join(Rails.root, 'config', 'locales', "#{language.to_s}.yml")
  end

  end
end
```

### 2.Using gon.

[Gon][2] helps you streamline data transfer to javascript. You can set data in your controller, gon will make it available in your javascript.

Use gon to set the contents of your language files to a javascript variable, in the application conroller.
    
 ```ruby  
#EN.YML
welcome_message: 'Welcome!'
```
```ruby
class ApplicationController < ActionController::Base
  before_filter :set_messages
```
```ruby
private
  def set_messages
    I18n.locale = params[:locale] || I18n.default_locale
    gon.messages = MessageHandler.data_in(I18n.locale)
  end
end
<%= include_gon(:camel_case => true, :namespace => 'app', :init => true) %>
```
```js
<script>
  console.log(app.messages); // '{ welcome_message: "Welcome!" }'
</script>
```  

### 

### 

### 3.Some Optimization

While this approach works great, when ever we add/modify our YAML files we need to restart our Rails sever for it reflect in our javascript.

Everytime our Language-YAML files are changed, `load!` has to be invoked. This can be done by using Rails' `ActiveSupport::FileUpdateChecker` service which Rails uses to reload code dynamically during runtime.
    
```ruby    
def data_in(language)
  load! if !@@data[language] or files_changed?
  @@data[language][language.to_s]
end

def files_changed?
  @@file_update_checker ||= ActiveSupport::FileUpdateChecker.new(language_file_paths)
  @@file_update_checker.updated?
end
```

### 4.Voilà

Everything just works!
    
    
``` js   
// /?locale=en
alert(app.messages.welcome_message); // 'Welcome!'

// /?locale=fr
alert(app.messages.welcome_message); // 'Accueil!'

// /?locale=tm
alert(app.messages.welcome_message); // 'வரவேற்பு!'
```

### References

[1]: http://guides.rubyonrails.org/i18n.html
[2]: https://github.com/gazay/gon
