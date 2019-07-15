---
templateKey: 'blog-post'
title: 'CB React Forms'
date: 2019-07-02
featuredpost: false
description: >-
  Create forms with an intuitive drag-n-drop interface that supports a number of form fields with built-in validations.
author: Sachin Jadhav
link: /cb-react-forms
tags:
- react 
- forms
- form builder
- drag and drop
---

![Forms with React](./images/cb-react-forms-hero.jpeg)

The most recurrent thing on web nowadays is web forms. Every time you log in, comment on a blog, tweet, you’re filling in a form. How these forms are presented speaks volumes about the organisation asking for that information. Filling forms takes time and so it is desirable that web forms ask all the relevant information in simple, interactive and easy to fill manner. We at [Codebrahma](/react-js-development) are making tools to help developers create secure and pretty forms in React. 

[**_CB React Forms_**](https://github.com/Codebrahma/cb-react-forms)  is a React library that gives users the power to create forms using an intuitive drag and drop interface. The library has two modules:

- Form Builder
- Form Generator

**_Form-Builder_**  component supports a number of form fields and some html tags. Just choose the fields you’d like to add and drag them over to your form. Go beyond a simple contact or order form, and create seamless workflows that can be used in any department of your organization. Use online surveys to collect customer opinions, create an event registration form for your next conference or find the perfect new employee with a job application form. The possibilities are endless.

**_Form-Generator_**  is a companion component to Form-Builder that lets you render the results of the created form. Form-Generator is meant to automatically generate a React form based on the JSON data submitted by the Form-Builder. A typical use case would have Form-Builder in an admin area of a site or app and Form-Generator on the front-end.


## Form Builder

**Features:**

-  _Customization_ -  enable only the fields you need, use your own icons and field names.
- Live _Preview_ mode for immediate check of your result.
- Choose the fields you’d like and drag them in your form.
- This library renders the form fields using the **_Bootstrap_** semantics. That means your forms will be beautiful by default.

**Easily collect data with these flexible field types:**

- Text Input Field
- Number Field
- Short Answer Field
- Long Answer Field
- Dropdown Field
- Radion Button Field
- Checkbox Field
- Tags Field
- Star Ratings Field
- Slider Range Field
- URL Field
- …more to come.

**Installation:**

CB React Forms is available through npm/yarn.

```
$ npm install --save cb-react-forms
```
```
$ yarn add cb-react-forms
```

Once you have the module installed include it in your project.

```
import { FormBuilder } from ‘cb-react-forms’;
```

 **Usage:**

```
import React from 'react';
import ReactDOM from 'react-dom';

import { FormBuilder } from 'cb-react-forms';

const toolbarItems = [
  {
    key: "Header",
    name: "Header Text",
    icon: "fa fa-header"
  },
  {
    key: "Paragraph",
    name: "Paragraph",
    icon: "fa fa-paragraph"
  },
  {
    key: "Dropdown",
    name: "Dropdown",
    icon: "fa fa-caret-square-o-down"
  }
];

const Example = props => (
  <FormBuilder 
    onSubmit={}  // function
    items={}     // array of toolbar items
  />
);

ReactDOM.render(<Example />, document.getElementById('root'));
```

With intuitive drag-n-drop UI create a form with Form-Builder component, use the Editor to edit each field, mark the required fields with the “Required” checkbox, check the live preview to make sure that it’s exactly what you need, then export the JSON code of the created form and apply to your application with Form-Generator component.

Select the list of available form fields from the  [docs](https://github.com/Codebrahma/cb-react-forms#list-of-toolbar-items).

**Form submission:**

You can pass a function as the onSubmit prop to your Form-Builder component to listen to when the form is submitted. It will be passed a JSON array having a list of form fields you chose.

```
const onSubmit = (formData) => console.log(formData);
```

## **Form Generator**

Form-Generator component is meant to automatically generate a React form based on the JSON data submitted by the Form-Builder component.

**Features:**

- Render forms just by importing the FormGenerator component and passing in the JSON formData as a prop.
- Basic validations support out of the box.
- View pre-filled form fields by providing the JSON responseData.
- Supports read-only mode where the form can be viewed in format where all the form fields are disabled.

**Usage:**

```
import React from "react";
import ReactDOM from "react-dom";
import { FormGenerator } from 'cb-react-forms';
 
const Example = props => (
  <FormGenerator 
    formData={}     // JSON data from 
    onSubmit={}     // function
    readOnly={}     // boolean
    responseData={} // answers data to pre-fill the form
  />
);
 
ReactDOM.render(<Example />, document.getElementById("root"));
```

Use the Form-Generator component in your app or website and provide the JSON formData as a prop to get the final form. Provide an onSubmit function that defines what is to be done with the form answers submitted by the user.
<hr/>

### Dependencies:

In order to make the forms secure and pretty, there are a few dependencies other than React.

- redux-form
- draft-js
- react-draft-wysiwyg
- react-dnd
- react-star-ratings
- react-select

### **Links:**

- [Sample Project](https://cb-react-forms.netlify.com/) running the code above.
- [Github](https://github.com/Codebrahma/cb-react-forms) —  keep an eye on this for more awesome features.
- [CodeSandbox](https://codesandbox.io/s/cb-react-forms-xzn8w)