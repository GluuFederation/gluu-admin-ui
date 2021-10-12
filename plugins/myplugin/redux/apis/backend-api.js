import axios from '../../../../app/redux/api/axios'

// Get todos
export const getToDos = async () => {
  return await axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        'Problems getting todo list.',
        error,
      )
      return -1
    })
}