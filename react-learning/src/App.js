
import './App.css';
import ClassComponent from './Component/ClassComponent';
import FunctionalComponent from './Component/FunctionalComponent';
import Counter from './Counter';
import ContactMe from './Form/ContactMe';
import JokeComponent from './Hooks/JokeComponent';
import Product from './Props/Product';
import PropsPassing from './Props/PropsPassing';
import TodoApp from './TodoApp';
import TodoList from './TodoList';
//Functional Component 
//functional component is not support state it only support in class component
//but now we can use hooks
function App() {
  const name="Sonny";
  const isMale=false;
  function getGreeting(user){
    if(user){
      return <h1>Hello, {user}!</h1>
    }
    return <h1> Hello ,Strager</h1>
  }
  return (
    <div className="app">
      {getGreeting()}
      <h1>Hello World {isMale?name:"Gargi"}</h1>
    <FunctionalComponent/>
    <ClassComponent/>
    <PropsPassing name="Google Home" description={"Your Ai Assistant"} price={59.99}/>
    <PropsPassing name="iPhone 12 Pro Max" description={"The Best Iphone"} price={1200}/>
    <PropsPassing name="Macbook Pro" description={"Your favourite"} price={2500}/>
    <TodoList/>
    <JokeComponent/>

    <Product title='Iphone 12' price="129.99"/>
    <Product title='Google Pixel 2' price="149.99"/>
    <Product title='Google Pixel 3' price="159.99"/>
    <TodoApp/>
    <Counter/>
    <ContactMe/>
    </div>
  );
}

export default App;
