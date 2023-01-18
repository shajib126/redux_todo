import Swal from 'sweetalert2'
import { removeTodo } from '../reducers/TodoSlice'
import store from '../store'
export function todoDeleteAlert(i){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            
          Swal.fire(
            store.dispatch(removeTodo(i))
          )
        }
      })
}