const Add = (studentObj) => {
    console.log("in add action",studentObj)
    return {
        type: 'ADD_STUDENT',
        payload: studentObj,
    }
}

const Delete = (id) => {
    return {
        type: 'DELETE_STUDENT',
        payload: id,
    }
}
const Update = (studentObj) => {
    console.log("in update action",studentObj)
    return {
        type: 'UPDATE_STUDENT',
        payload: studentObj,
    }
}

export default{
    Add,
    Delete,
    Update
}