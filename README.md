# React-test
*Learn React by testing the librairies*

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
