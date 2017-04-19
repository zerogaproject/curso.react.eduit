
export const addTodoList = (title)=>({
  type: 'ADD_TODOS_LIST',
  title: title
});

export const addTodo = (title, listId)=> ({
  type: 'ADD_TODO',
  title: title,
  todosId: listId,
  owner: 1
});
