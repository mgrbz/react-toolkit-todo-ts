import React from 'react'
import { fetchUser } from '../fetures/userSlice'
import { useAppDispatch, useAppSelector } from '../store'

const User = () => {

  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const GetUser = () => {
    dispatch(fetchUser());
  }

  return (
    <React.Fragment>
      USer
      <button onClick={() => {GetUser()}}>GetUser</button>
      {
        JSON.stringify(user)
      }
    </React.Fragment>
  )
}

export default User