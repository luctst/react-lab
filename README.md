# React-Lab
*If you can explain something with simple words it means that you understood it.*

## What is ReactJs ?
*ReactJs is a JavaScript librairy who allow you to building user interfaces.*

With react you can split your application in different components and easily keep your component in sync with their state. React behind the scenes performs render only when is it necessary and maximize the performances of your application.

## Component Lifecycle:
*Every component in React has several lifecycle methods that we can use to run code at a particular times. They are three steps in the lifecycle of a component:*

### Mounting:
*When a component is being created and inserted in the DOM.*
* `constructor()`.
* `static getDerivedStateFromProps()`.
* `render()`.
* `componentDidMount()`.

### Updating Methods:
*When the state of a component is changing (props, state..)*
* `static getDerivedStateFromProps()`.
* `shouldComponentUpdate()`.
* `render()`.
* `getSnapshotBeforeUpdate()`.
* `componentDidUpdate()`.

## Unmounting Method:
*When a component is being removed from the DOM.*
* `componentWillUnmount()`.

## State, props:
*In an React app you will see a lot of components, they are just javascript class or functions that optionally accepts, hold data (props, state) and return an element with this data who describe how the UI should be render.*

### State:
*The state contains data specific to THIS component that may change over time. The state is user-defined, and it should be a plain JavaScript object, but it can be a number, string etc..*

Librairy like React are here today because it is difficult to keep the state of a component in sync with him also you can easily share your state, data with other components of your app. Without this librairy it will be more difficult to execute this steps.

As we saw earlier an component has a lifecycle in this cycle different methods will be called, the function `setState` allow you to update the state of your component and so to re render your component with your new data.

the `setState` method can take two differents parameters the first one the most commun is an object, if your inital state is an object which is should be simply write your new object with your new data. The other one is a function sometime you want to update your state with a data hold in the current state to do that you have to use a function with the `prevState` and `nextState` as arguments.

### Props:
*Props (short for properties) is an object with some data who would be used to render the component. His way to work is a little bit different from state.*

Props and state are different in one important way, props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
The component who hold the props cannot change change its props instead it's his parent component who is responsible to render this props.

### When use state or props ?
*When a component needs to keep track of information between renderings the component itself can create, update, and use state.*

| | _props_ | _state_ | 
--- | --- | --- 
Can get initial value from parent Component? | Yes | Yes
Can be changed by parent Component? | Yes | No
Can set default values inside Component?* | Yes | Yes
Can change inside Component? | No | Yes
Can set initial value for child Components? | Yes | Yes
Can change in child Components? | Yes | No

> **Note** - When use props or state in a component.

## Context:
*In a typical application when you have to pass data parent to child you use the props object but when your application is becoming bigger it can be hard to manage props. Context provides a way to share data parent -> child without using props.*

## Ref:

## Hook:

# Redux:
*Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.*

## Why Redux ?

## Examples:
* **Simple counter** - Check the `test-redux` branch.
* **Todo app** - Check the `test-redux-todo` branch.