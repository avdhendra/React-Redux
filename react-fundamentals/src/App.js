
import { Suspense } from 'react';
import { useRecoilState } from 'recoil';
import './App.css';
import { userState } from './atoms/userState';
import Quote from './Quote';

import ShoppingApp from './ShoppingApp';


function App() {
const[user,setUser]=useRecoilState(userState)
const login=()=>{
  setUser({
    name:'Sarty'
  })
}
  return (
    <div className="app">
  <h1> Our demo app using recoil</h1>
  {
    user?(<h2>You are logged in as {user.name}</h2>):(<h2>U are logged out</h2>)
  }

  <button onClick={login}>Login as Sarty</button>

  <ShoppingApp/>
  <Suspense fallback={<h2>Loading...</h2>}>
  <Quote/>
  </Suspense>
    </div>
  );
}

export default App;
