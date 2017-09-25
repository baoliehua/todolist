const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
	return (
		<ul>
			{
				todos.map((item)=>(
					<TodoItem 
					key={item.id}
					text={item.text}
					completed={item.completed}
					onToggle={()=>onToggleTodo(item.id)}
					onRemove={()=>onRemoveTodo(item.id)}
					/>
					))
			}
		</ul>
	);
};

const selectVisibleTodos = (todos,filter) => {
	switch(filter){
		case FilterTypes.All:
		    return todos;
		case FilterTypes.COMPLETED:
		    return todos.filter(item => item.completed);
		case FilterTypes.UNCOMPLETED:
		    return todos.filter(item => !item.completed);
		default:
		    throw new Error('unsupported filter');
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		onToggleTodo:(id) =>{
			dispatch(toggleTodo(id));
		},
		onToggleTodo:(id) =>{
			dispatch(removeTodo(id));
		}
	};
};