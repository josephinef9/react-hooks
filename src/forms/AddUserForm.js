import React, {useState} from "react"

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '', spiritAnimal: '', favoriteFood: '' }

  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
      if (!user.name || !user.username) return

      props.addUser(user)
      setUser(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange}></input>
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange}></input>
      <label>Spirit Animal</label>
      <input type="text" name="spiritAnimal" value={user.spiritAnimal} onChange={handleInputChange}></input>
      <label>Favorite Food</label>
      <input type="text" name="favoriteFood" value={user.favoriteFood} onChange={handleInputChange}></input>
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm