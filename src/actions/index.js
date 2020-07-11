export const ACTION_TYPE = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

let nextToDoId = 0;

const increaseNextToDoId = () => {
  nextToDoId += 1;
  return nextToDoId;
};

export const addTodo = (text) => ({
  type: ACTION_TYPE.ADD_TODO,
  id: increaseNextToDoId(),
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: ACTION_TYPE.SET_VISIBILITY_FILTER,
  filter,
});

export const toggleTodo = (id) => ({ type: ACTION_TYPE.TOGGLE_TODO, id });

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
