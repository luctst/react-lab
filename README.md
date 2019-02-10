# React-test
*Learn React by testing the librairies*

## Component Lifecycle:
*Every component in React has several lifecycle methods that we can use to run code at a particular times.*

They are three steps in the lifecycle of a component:
* Mounting - When a component is being created and inserted in the DOM.
* Updating - When the state of a component is changing (props, state..)
* Unmounting - When a component is being removed from the DOM.

### Mounting Methods:
* `constructor()`.
* `static getDerivedStateFromProps()`.
* `render()`.
* `componentDidMount()`.
* `componentWillMount()`.

### Updating Methods:
* `static getDerivedStateFromProps()`.
* `shouldComponentUpdate()`.
* `render()`.
* `getSnapshotBeforeUpdate()`.
* `componentDidUpdate()`.

## Unmounting Method:
* `componentWillUnmount()`.