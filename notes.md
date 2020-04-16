At the end of this module, you should be able to:

    explain what Redux is and the problem it solves

        Problem solved: Have all state in one location (not tied to individual componenets)
        Problem solved: Child components can pass up props to parent components
    
    create a Redux Store and connect it to a React application
       
        import { createStore } from 'redux';

        const store = createStore(titleRecucer);

        Store: giant JS Object that stores all of the state
            store.dispatch - will use
            store.subscribe - will not use
            store.getState - will use
            store.replaceReducer - will not use

        When we call createStore redux, under the hood, is going to dispatch an action to set up our store with the initial state object that the reducer has access to.
        Every time that redux calls createStore, its going to invoke a reducer and pass in a random action. Action is random because it wants the reducer action to fall down to the default and return your state object 

         redux under the hood: titleReducer(undefined, {type: "@@redux/INITs.r.a.n.d.o.m"}). 

            reducerhook: just pass in your arguments (state, action) into reducer
            redux: Need to set up default parameter(state = initialState, action). whenever the parameter is undefined, it will fall back to whatever you set as the default in reducer

    use the connect() function to "connect" React components to the Redux store

        import { connect } from "react-redux";

        Ex: export default connect(() => {return { title: state.title, editing: state.editing }},{})(Title);

            - passes props to your current component (Title) from the store
            - inside connect (under the hood), connect will call (store.getstate &?) the anonymous function, and will pass an object called "state" to this function, this "state" is our state object from the redux store. So we can take our state.title and add it to our props as props.title

    write Actions and Action Creators to describe state changes

        Action Creator: function that returns an action object

        export default connect(
         mapStateToProps,
        { toggleEditing } 
        )(Title);

        the object that is passed into connect takes in any action creators (toggleEditing) that need to be called in this component.
        connect will wrap the action creator inside dispatch and will add an enhanced action creator to props. You dont ever call the action creators directly inside the components because then it wont get wraped inside dispatch function (see under the hood), instead pass it to connect() and call it where need be from props. (props.toggleEditing)

            under the hood of connect: 
                 dispatch(toggleEditing()) ==> dispatch({ type:'TOGGLE_EDITING })  (toggleEditing gets evaluated before dispatch sends it)

        for any action creators that return actions that have payloads, that payload will come from the parameters.

            export const updateTitle = newTitle => {return {type: `UPDATE_TITLE`, payload: newTitle }
        
    write Reducers to respond to actions and update statee









    Other Notes:
    
    

    Dustins Redux Workflow:
        - work on a component
        - connect that component if needed
        - when an event needs to update state
            - create an action creator and an action
            - import the action creator and pass it into connect 
        -build a case in the reducer for that action