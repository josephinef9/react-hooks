import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleSubmit = (event) => {
    event.preventDefault()
      if (!user.name || !user.username) return

      props.updateUser(user.id, user)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>Spirit Animal</label>
      <input type="text" name="spiritAnimal" value={user.spiritAnimal} onChange={handleInputChange}></input>
      <label>Favorite Food</label>
      <input type="text" name="favoriteFood" value={user.favoriteFood} onChange={handleInputChange}></input>
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm