import Swal from 'sweetalert2'
import { editTodo } from '../reducers/TodoSlice'
import store from '../store'
export function todoEdit(i,val){
    Swal.fire({
        title: 'Are you sure?',
        input:'text',
        inputValue:val,
        inputValidator:(val)=>{
            if(val){
                store.dispatch(editTodo({index:i,task:val}))
            }
        }
      })
}