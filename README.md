# React-test
*Learn React by testing, this doc right below hold some tips to remember importants things with React, his goal is not to rewrite the official doc which is really good this is just some remember with my own words.*

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
*In an React app you will see a lot of components are just javascript class or functions that optionally accepts, hold data (props, state) and return an element with this data who describe how the UI should be render.*

### State:
*The state contains data specific to THIS component that may change over time. The state is user-defined, and it should be a plain JavaScript object, but it can be a number, string etc..*



### Props:

## Context:
*In a typical application when you have to pass data parent to child you use the props object but when your application is becoming bigger it can be hard to manage props, Context provides a way to share data parent -> child without using props.*

## Ref:

## Hook: