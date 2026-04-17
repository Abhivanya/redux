import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./feature/counter/counterSlice";
import { fetchUsers } from "./feature/users/usersAsyncThunk";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const { data, isLoading, errors } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (errors) return <div>{errors}</div>;

  console.log(data);
  return (
    <div>
      {count}
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByValue(5))}>
        Increment By 5
      </button>
      <div>
        {data.map((d) => (
          <div key={d.id}>{d.name}</div>
        ))}
      </div>
    </div>
  );
}
