// import the action
import { ADD_STUDENT, REMOVE_STUDENT } from "./actions";

// purpose of reducer:
// accept current state
// perform action
// return new state


export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload]
      }

    case REMOVE_STUDENT:
      return{
        ...state,
        students: [...state.students.filter(
          (student) => student.id != action.payload
        )]
      }
    default:
      return state;
  }
}
