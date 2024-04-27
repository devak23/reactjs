# My Notes on Redux

TO RUN THIS PROJECT:

1. npm install
2. npm start

# Topics

```
- Full redux workflow
- Create Redux Store
- Define Actions
- Define Reducers
- Dispatch Actions
- Subscribe-Unsubscribe
- Folder Structure
- Duck pattern
```

## TODO Application

```
1. Designing the store
2. List actions (what to do)
3. Create reducers (how to do)
4. Create redux store
```

### SECTION 01

We use Redux for managing the state of web application specially which have little complex structure. So in Redux we
store our applications state in a single object called "Store". So when some component needs the data of particular
thing then we get that state from the single place (Store). So imagine we have social media websites like Instagram or
Facebook and this store object look like this:

```
store = {
	users: [{...}],
	posts: [{...}],
	friends: [{...}],
	notifications: [{...}]
	chats: [{...}]
}
```

Now setting these fields is entirely up to us. How we design our store structure is on us, redux dosen't interfere
there. But remember, application has only one single redux store because that's the overall concept of using redux.

Now to update this state, we use a pure function called reducer. The reducer take the current state as argument and
returns the updated state.

```
function reducer(state) {
	// for updating the store
}
```

The reducer function doesn't make any http request for anything or don't create any kind of side effects. It takes
current state as parameter and returns the updated state. In reducer, you update the state using spread operator or
immer library.

Now how does this reducer know what tasks they have to perform? For example, in case of a to-do list application how
this reducer knows it has to add the task or remove the task? For that, we pass one more argument in our reducer
function called the action.

```
function reducer(state, action) {
	// switch (action):
	// case ADD: updateStore()
	// case REMOVE: updateStore()
}
```

With this action, you can tell reducer which task it has to perform and accordingly, our reducer behaves. So there are
only 3 main things about Redux: actions, store and reducer.

Taking the to-do application, the user "dispatches" an action to the Redux store by adding a task (for instance). The
redux store passes that action to its reducer. Reducer performs the action and then update the store values accordingly.
We can't directly call reducer, we have to use the store for calling reducer so that there is only one entry point for
this store. The benefit of this approach is that we can track all of the activity perform in our application through a
single point which will help us to easily debug our application. So basically we can say that

1. Actions tells - What to do.
2. Reducer tells - How to do.
3. Store - keeps the data in single place.

### SECTION 02

We are going to build one todo application in which we can add tasks, remove the task and mark task as completed. For
now, we're not building the UI part because we don't want to add extra complexity. Step one is designing the store or
how our store looks like. Then we will list our actions, which can perform in application and after that, we create our
reducer function to define how to perform those actions. And finally, we create our redux store.

So, let's design the store structure for this to-do application. For now, we want to add just task to this application
so we store all our tasks details in array that looks like this:

```
[
	{
		id: 1,
		task: "design a store",
		completed: false
	}
]
```

In a real world our store is an object like this:

```
{
	tasks: [{
		id: 1,
		task: "design a store",
		completed: false
	}, {
		id: 2,
		task: "define an action",
		completed: false
	}],
	employees: [{...}, {...}, {...}]
}
```

so it's easy to get data from the store so instead of an array we have object with properties. So in this situation our
store has 2 slices: tasks and employees. So when we create reducers, we have to add 2 reducers, one for each of them.
For now, we don't want that complexity. We just need array as the store in which we define our all tasks.

### SECTION 03

Let's move to the second step which is listing all actions. First action is add new task with task details and second is
to remove task. We should also be able to mark task as completed. We could also have filter tasks and search task and
export tasks etc. So our action list could be

```
ADD_TASK
REMOVE_TASK
COMPLETE_TASK
SEARCH_TASK
FILTER_TASK
EXPORT_TASK
...
```

For now, we just focus on just the first 3. So you can

```
ADD_TASK
REMOVE_TASK
COMPLETE_TASK
```

Every action is an object and the structure of this object is fixed. In every action, we will define one property which
is fixed. Let's call it the 'type'. Our first action is ADD_TASK so the action object will look like:

```
const addTaskAction = {
	type: 'ADD_TASK'
}
```

Here we are using string, but some developers use numbers like 1,2 or 3. Strings are more
descriptive and are therefore better than numbers. We can easily understand that this action will add a new task. Here
some developers use the value in all upper case. But you can also use 'tasksAdded' or anything you want to.

Again, upper case letter feels better and give you the notion of a "constant". You can use whatever you want to but
stick with that for the rest of that application. Now after that you can pass data inside this object. So for ADD_TASK,
we send the task details, and this is completely fine.

```
const addTaskAction = {
	type: 'ADD_TASK'
	task: 'This is a new Task'
}
```

The second action we have is to remove task. We will remove the particular task by using its unique ID so we pass here
just id:

```
const removeTaskAction = {
	type: 'REMOVE_TASK',
	id: 1
}
```

You can see that the addTaskAction and removeTaskAction have different structure. This is not a right approach because
our action structure is changed with different different actions. So when we define our reducer, it wont know what to
expect in the input payload. We always have to check what is the other field in the action object. Whether it is task,or
an id. Therefore, we fix our action structure throughout the project by having something called as 'payload' along
with 'type'.

```
{
	type: 'ADD_TASK',
	payload: {
		task: This is a new task
	}
}

{
	type: 'DELETE_TASK',
	payload: {
		id: 1,
	}
}
```

The 'payload' will contain all data related to that action so you don't have to watch action for anything additional
because you already know it has only 2 properties type and payload. Remember, this is commonly your structure. You can
also change this too, but this a general convention that is followed.

Let's write the reducer for our application. This takes 2 arguments. First one is initial stage and second 1 is action
object. In source folder, create a new file call reducer. For now let's create a function call reducer and first
agreement is state. The second argument is action.

```
function reducer(state=[], action) {
	
}
```

We designed a store as an array of tasks, so our initial state is an empty array. Inside this reducer, we firs identify
the action type and then we perform action according to that.

So in action object, we pass action name as type property and we will pass all data in the payload. So here we write:

```
function reducer(state=[], action) {
	if (action.type === 'ADD_TASK') {
		return [
		...state, {
			id: Date.now().toString()
			task: action.payload.task
		}]
	}	
...
```

Now let's add code for remove task as follows.

```

	if (action.type === 'REMOVE_TASK') {
		return state.filter(task => task.id !== action.payload.id)
	}	
...
```

And after all these operations we return the current state so if we call any action which is not handled here, this
reducer will return the same state. Now our code for reducer looks like this:

```
function reducer(state=[], action) {
	if (action.type === 'ADD_TASK') {
		return [
		...state, {
			id: Date.now().toString()
			task: action.payload.task
		}]
	} else if (action.type === 'REMOVE_TASK') {
		return state.filter(task => task.id !== action.payload.id)
	} else {
		return state;
	}
}
```

As you can see the more actions we add our else-if conditions kinda increase and it makes the code a bit clumsy to read.
So developers here prefer to use "switch-case" which is much more handy and readable. So we will code our reducer as
follows:

```
let count = 0;

export default function reducer(state=[], action) {
	switch(action.type) {
		case 'ADD_TASK':
			return [
			...state, {
				id: count++
				task: action.payload.task
			}]
		case 'REMOVE_TASK':
			return state.filter(task => task.id !== action.payload.id)
		default:
			return state
	}
}
```

### SECTION 04: Creating a redux store

1. To create a redux store first install the redux library using ``` npm install redux```
2. After that, we need to import the createStore method in redux package. The createStore is deprecated and
   legacy_createStore is to be used. We therefore create a file called as ```store.js``` and write the import statement:
   ``` import {legacy_createStore as createStore} from redux```
3. The redux store requires a reference of the 'rootReducer' which is a combination of all the defined reducers. In
   our case, we have just 1 reducer so we will pass the same.
4. Finally, we export the store.

```
import { legacy_createStore as createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer);

export default store
```

We can import this store in ```index.js``` and check its state by invoking a ```getState()``` on the store to see an
empty
array.

### SECTION 05: Dispatching Actions

Now that the redux store is ready, let's send some actions to it. This is done using the ```dispatch()``` function
of the store. So open the ``` index.js ``` and try to "dispatch an action" for adding a new task. Since the dispatch is
taking the action object, we need to pass it the structure that we decided for our action objects. In case of
'ADD_TASK', this is how it will look:

```
import store from './store'

store.dispatch({
  type: 'ADD_TASK',
  payload: {
    task: 'This is a new Action',
  },
});

console.log(store.getState());
```

To remove the added task:

```

store.dispatch({
  type: 'REMOVE_TASK',
  payload: {
    id: 0,
  },
});

console.log(store.getState());

```

As you can see the dispatch function parameters start looking clumsy. So we define an ``` actions.js``` which will
have all the tasks we want to define. So let's create a new file ```actions.js``` and define our actions there.

```
export const addTask = () => {
  return {
    type: 'ADD_TASK',
    payload: {
      task: 'This is a new Action',
    },
  };
};

export const removeTask = () => {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id: 0,
    },
  };
};

```

Now our dispatch actions become very clean

```
import store from './store';
import {addTask, removeTask} from "./actions";


store.dispatch(addTask());
console.log('State after adding Task = ', store.getState());

store.dispatch(removeTask());

console.log('State after removing task = ', store.getState());

```

However, the problem is our ```addTask()``` and ```removeTask()``` are pretty much static and always give the same
value. So lets make it dynamic by adding parameters so that both the functions become generic. So we now have

```
export const addTask = (taskName) => {
  return {
    type: 'ADD_TASK',
    payload: {
      task: taskName,
    },
  };
};

export const removeTask = (taskId) => {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id: taskId,
    },
  };
};

```

and therefore now, our ```index.js``` looks:

```
import store from './store';
import { addTask, removeTask } from './actions';

store.dispatch(addTask('Create Project Plan'));
console.log('State after adding Task = ', store.getState());

store.dispatch(removeTask(0));

console.log('State after removing task = ', store.getState());

```

If you notice the ```actions.js``` and ```reducer.js``` they both work because of the constant values of 'ADD_TASK' and
'REMOVE_TASK'. Since javascript is a very forgiving language, there is a potential for a typo and the actions and
reducers would just ignore your commands. In order to make sure there are no typos, lets create a constants file
which defines the static strings. Let's call this file ```actionTypes.js```

```
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

```

and then import the file in ```actions.js``` and ```reducer.js``` and replace those constants with the constant
variables.

```
import { ADD_TASK, REMOVE_TASK } from './actionTypes';

export const addTask = (taskName) => {
  return {
    type: ADD_TASK,
    payload: {
      task: taskName,
    },
  };
};

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id: taskId,
    },
  };
};

```

and

```
import {ADD_TASK, REMOVE_TASK} from "./actionTypes";

let index = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: index++,
          task: action.payload.task,
        },
      ];

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
}
```

This way, there cannot be any typo and if there is, your editor will flag it immediately.