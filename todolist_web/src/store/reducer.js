const defaultState = {
    inputValue : '',
    list : [1,2,3]
};
//reducer可以接受state 但是不能更改state
export default (state = defaultState , action) => {

    if(action.type === 'delete_todoitem'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index , 1);
        return newState;
    }

    if(action.type === 'change_input_value'){
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }

    if(action.type === 'add_todoitem'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    //console.log(state , action);
    return state;
}