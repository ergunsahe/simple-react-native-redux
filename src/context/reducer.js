function reducer(state, action) {
  switch (action.type) {
       
      case "ADD_USER":
        state.userName=action.payLoad.newName
        state.userSurname=action.payLoad.newSurname
        state.userAge=action.payLoad.newAge
        state.userEmail= action.payLoad.newEmail
        return {...state}

    default:
        return {...state}
  }
}

export {reducer};
