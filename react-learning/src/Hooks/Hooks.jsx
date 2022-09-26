import React from 'react'

export default function Hooks() {
  
  //Rules of Hooks
  /**
   * 1) Only Call Hooks (useState & useEffect) at the TOP Level
   *  - This means dont call hooks inside loops condition or nested function
   *  -Always use Hooks at the top level of your react function
   *  -By Following this rule ,you ensure hooks are called in the same order each time a component renders
   *  -This allows react to correctly preserve the state of hooks between useState/useEffect calls
   * 
   * 
   * 
   * 2) Dont Call hooks from regular JS function
   *  - Call hooks from react FC
   *  - Call hooks from custom hooks
   */
  /*
  
  We released an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules. 
  npm install eslint-plugin-react-hooks --save-dev



As we learned earlier, we can use multiple 
State or Effect Hooks in a single component:

function Form() {
   1. Use the name state variable
  const [name, setName] = useState('Mary');

   2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

   3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

   4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  
}



 🔴 We're breaking the first rule by using a Hook in a condition
  if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }


  The name !== '' condition is true on the
   first render, so we run this Hook. However, 
   on the next render the user might clear the form, 
   making the condition false. Now that we skip 
  this Hook during rendering, the order of the Hook calls becomes different:

useState('Mary')           // 1. Read the name state variable (argument is ignored)
 useEffect(persistForm)  // 🔴 This Hook was skipped!
useState('Poppins')        // 🔴 2 (but was 3). Fail to read the surname state variable
useEffect(updateTitle)     // 🔴 3 (but was 4). Fail to replace the effect



This is why Hooks must be called on the top level of our components. If we want to run an effect conditionally, we can put that condition inside our Hook:

  useEffect(function persistForm() {
    // 👍 We're not breaking the first rule anymore
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });


//because the effect is  inside the js function
function badFunction(){
    useEffect(()=>{
        console.log("test")
    })
}













  */
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
    return (
    <div>Hooks</div>
  )
}
