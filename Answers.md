1. What problem does the context API help solve?

=> Context API solves the problem of having to always pass down state from parent components down to a children component as this can become very cumbersome in large applications with many components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

=> Actions: An action is an object in redux tha contains an action type and some data that is associated to that action type. They are dispatched to reducers as arguments.

=> Reducers: Reducers are pure functions in redux which update state based on action type. They take in current state from the store and an action and return a new object which updates state.

=> store: Store is a single javascript object that contains the entire state of the application.

=> The store is known as a single source of truth because all application state is in the store and not distributed amongst components. The only way to change state is to access the redux store.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

=> Application state is state that is being managed and access centrally by any component within an application. Component state is state that is local to a particular compoment.
Application state should be used when several components are going to be using or changing a particular state. Component state should only be used when only that component will ever use or change the state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

=> Redux-thunk is a middleware package for redux. It allows us to manange asynchronous operations within redux which is synchronus. 
It intercepts the actions from the action-creators before they get to the reducers and performs some action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
=> Redux. It provides a convenient method of managing application state throughtout an application. 


