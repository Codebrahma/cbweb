---
templateKey: "blog-post"
title: "How to build a simple Compound component using ReactJS hooks"
date: 2021-05-25
featuredpost: false
description: >-
  This article explains with an example what compound components in react are . How to build a compound component with a tutorial to build accordion.
keywords:
  - reactjs
  - Compound-components
  - Hooks
  - Typescript
link: /how-to-build-react-compound-components-tutorial
category:
  - Tutorial
author: Ashwin kumar
tags:
  - react js
  - reactjs
  - typescript
  - compound components
  - build accordion component using compound components
---

**Compound Components** are an advanced and very useful pattern. They can be used to create meta components. They are slightly counter intuitive, but trust me, once you get a hang of it, you will love building components using the compound components pattern.

## What are compound components?

The compound components are a set of two or more components that work together to accomplish a specific task. The set of components will share an implicit state to communicate between them.

> Think of compound components like the select and option elements in HTML. Apart they don’t do too much, but together they allow you to create the complete experience. — Kent C. Dodds

```jsx
<select>
  <option>Option1</option>
  <option>Option2</option>
  <option>Option3</option>
  <option>Option4</option>
</select>
```

In the above example, when you click on an option in the select component, select knows which option you clicked. The select and the option share the state between them and update the selected option state on their own, we don’t need to explicitly configure them.

## Compound Components in Action

we will build an Accordion component using the compound component pattern.

The accordion component will have four components.

1. **Accordion** - The outer wrapper component of the Accordion component. This is the root component of the Accordion component.
2. **AccordionItem** - The component that allows us to define each accordion item. Each AccordionItem will have its AccordionButton and AccordionPanel components.
3. **AccordionButton** - The header for the Accordion component.On clicking the accordion button will open the corresponding accordion panel.
4. **AccordionPanel** - The panel for the accordion. This will hold the content of each accordion item.

We are going to create the above mentioned components one by one and also let's see how we can create the link between them.
Let's start with Accordion component. Accordion component will wrap the other components. It will also maintain shared state with other components. In this case the selected accordion item (active item)

```tsx
const Accordion: React.FC<{
  children: ReactNode | ReactNode[]
  className?: string
}> = ({ children, className }) => {
  const [activeItem, setActiveItem] = useState("")
  // function to update the active item
  const changeActiveItem = useCallback(
    value => {
      if (activeItem !== value) setActiveItem(value)
    },
    [setActiveItem, activeItem]
  )

  return <div className={className}>{children}</div>
}
```

We have created the root Accordion component. Now we need to pass down or share the state and the update state function with its children. To achieve this, we are going to use the **React Context**. If you are not familiar with React context, please refer [https://reactjs.org/docs/context.html](https://reactjs.org/docs/context.html).

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Now let's add context to our accordion component.

```tsx
import { createContext, useContext } from "react"

// Creating the context for the Accordion.
export const AccordionContext = createContext<{
  activeItem: string
  changeSelectedItem: (item: string) => void
}>({ activeItem: "", changeSelectedItem: () => {} })

export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error("Error in creating the context")
  }
  return context
}
```

Lets provide values to the context using the Context.Provider element. The **Provider** component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers.

```tsx
const Accordion: React.FC<{
  children: ReactNode | ReactNode[]
  className?: string
}> = ({ children, className }) => {
  const [activeItem, setActiveItem] = useState("")

  const changeActiveItem = useCallback(
    value => {
      if (activeItem !== value) setActiveItem(value)
    },
    [setActiveItem, activeItem]
  )
  return (
    <AccordionContext.Provider
      value={{ activeItem, changeSelectedItem: changeActiveItem }}
    >
      <div className={`accordion ${className}`}>{children}</div>
    </AccordionContext.Provider>
  )
}

export default Accordion
```

In the accordion, we need to share the activeItem and changeSelectedItem to all the other components, so we are passing them to the context provider which can be obtained using the the useAccordionContext custom hook (which uses the useContext hook internally). Let's build the remaining components. We are going to use the values consumed from the context and make the accordion component work as a whole.

```tsx
// AccordionItem component
export const AccordionItem: React.FC<{
  children: ReactNode[]
  label: string
  className?: string
}> = ({ children, label, className }) => {
  const childrenArray = React.Children.toArray(children)

  // label is used to distinguish between each accordion element.
  // Adding the label prop to the children of accordionItem along with other props.
  const accordionItemChildren = childrenArray.map((child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        __cb__internal__accordion_label: label
      });
    }
    return null;
  });
  return <div className={className}>{accordionItemChildren}</div>
}
```

```tsx
// AccordionButton component
export const AccordionButton: React.FC<{
  children: ReactNode;
  __cb__internal__accordion_label?: string;
  className?: string;
}> = ({ __cb__internal__accordion_label: label, children, className }) => {
  const { changeSelectedItem } = useAccordionContext();
  const accordionButtonClickHandler = useCallback(() => {
    changeSelectedItem(label || "");
  }, [changeSelectedItem, label]);

  return (
    <div
      onClick={accordionButtonClickHandler}
      className={`accordion-button ${className}`}
    >
      {children}
    </div>
  );
};
```

```tsx
// AccordionPanel component
export const AccordionPanel: React.FC<{
  children: ReactNode;
  __cb__internal__accordion_label?: string;
  className?: string;
}> = ({ children, __cb__internal__accordion_label: label, className }) => {
  const { activeItem } = useAccordionContext();

  const panelStyles = [
    "accordion-panel",
    label === activeItem ? "show-item" : "hide-item",
    className
  ].join(" ");

  return <div className={panelStyles}>{children}</div>;
};
```

We have done with creating all other components. Let's see what we have done.

- In the Accordion-item, label prop is used to differentiate between different accordion items. The label prop will be required in the accordionButton and accordionPanel components, so we are adding label prop to the accordionItem children along with the other props.
- We are using the **useAccordionContext** in the AccordionPanel and AccordionButton. That is how we get the data that is being provided from the Accordion component.
- We use changeSelectedItem in the AccordionButton component to update the active item when the button is clicked.
- We use activeItem in the AccordionPanel component whether show the content or hide the content

Now we had built the accordion component completely, let's see how we can use the Accordion component

```tsx
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "./components/accordion"

export default function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionItem label="react">
          <AccordionButton>React</AccordionButton>
          <AccordionPanel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem label="angular">
          <AccordionButton>Angular</AccordionButton>
          <AccordionPanel>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem label="javascipt">
          <AccordionButton>Javasciprt</AccordionButton>
          <AccordionPanel>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
```

Yayyy!!! We had built the accordion component using the compound components.

We can also build the same accordion component using render props method. But there are limitations to style the inner components (AccordionButton; AccordionPanel). We will have to pass props like renderAccordionButton for custom button component.

The accordion component, now looks clean. One can style every component of the Accordion using its respective component. In future, if you want to have buttonColour for the AccordionButton component, you can just add that prop to the AccordionButton itself. Not clutter the outer accordion component.

<iframe src="https://codesandbox.io/embed/interesting-wildflower-wj3iy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="interesting-wildflower-wj3iy"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
