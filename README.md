# React Basic Concepts

This document explains some important React concepts such as JSX, State, Props, useState, sharing state between components, and event handling.

---

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript.

### Example:
```jsx
const element = <h1>Hello, React!</h1>;
```

### Why JSX is used:
- Makes UI code easier to read and write.
- Allows combining HTML structure with JavaScript logic.
- Helps React describe what the UI should look like.

JSX is not understood directly by browsers. Tools like **Babel** convert JSX into regular JavaScript.

---

## 2. Difference between State and Props

| Feature | State | Props |
|------|------|------|
| Definition | State is data managed inside a component | Props are data passed from parent to child components |
| Mutability | State can change | Props are read-only |
| Usage | Used to manage dynamic data | Used to pass data between components |

### Example

**Props**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**State**
```jsx
const [count, setCount] = useState(0);
```

---

## 3. What is the useState hook, and how does it work?

`useState` is a **React Hook** used to add state to functional components.

### Syntax
```jsx
const [state, setState] = useState(initialValue);
```

- `state` → current value
- `setState` → function used to update the value
- `initialValue` → starting value

### Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

When `setCount` is called, React re-renders the component with the updated value.

---

## 4. How can you share state between components in React?

State can be shared between components by **lifting state up** to their **common parent component**.

### Steps:
1. Move the state to the parent component.
2. Pass the state as props to child components.
3. Pass functions to update the state if needed.

### Example

```jsx
function Parent() {
  const [message, setMessage] = useState("Hello");

  return (
    <>
      <Child1 message={message} />
      <Child2 setMessage={setMessage} />
    </>
  );
}
```

Here:
- `Child1` receives the state.
- `Child2` can update the state.

Other methods for sharing state:
- Context API
- Redux or other state management libraries.

---

## 5. How is event handling done in React?

React handles events using **camelCase syntax** and **functions**.

### Example

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Key Points:
- Events are written in **camelCase** (`onClick`, `onChange`).
- Event handlers receive a **function**, not a string.
- React uses **Synthetic Events** for better performance and cross-browser compatibility.

---

## Conclusion

Understanding JSX, State, Props, Hooks like `useState`, state sharing, and event handling is essential for building dynamic and interactive React applications.