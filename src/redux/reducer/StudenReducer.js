const initialState={
    students:[],
   

};

const StudentReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_STUDENT":
            return {
                ...state,
                students:[...state.students,action.payload]

            }
        case "DELETE_STUDENT":
            return {
                ...state,
                 students:[...state.students.filter(student=>student.id!==action.payload)]
            }
        case "UPDATE_STUDENT":
            var tempId=action.payload.id;
            console.log(tempId);
            var updateObj=action.payload;
            var tempArray=[...state.students];
            for( var i=0;i<tempArray.length;i++){
                if(tempArray[i].id===tempId){
                    tempArray[i]=updateObj
                }
            }
            return {
                ...state,
                students:[...tempArray]
            }    
        default:
            return state
    }
}

export default StudentReducer;
