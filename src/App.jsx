import Section1 from './components/section1/section';
import Section2 from './components/section2/section2';

const users=[
   {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60 ',
     intro: 'Hi This is Ali! who have 5 year of experince and availble for work ', 
     tag:'Satisfied '
    },
   {
    img: ' https://images.unsplash.com/photo-1578758803946-2c4f6738df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJ1aXNuZXNzJTIwbWFufGVufDB8fDB8fHww',
     intro: 'Hi! This is Hamza , Who is security officer and Got a account degree ', 
     tag:'Working'
   },
   {
    img: ' https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpc25lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D',
    intro: 'This is Ali and a Geologist with 6 year of experince in releant field',
    tag:'Underserved'
   },
   {
    img: ' https://images.unsplash.com/photo-1578758837674-93ed0ab5fbab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJ1aXNuZXNzJTIwbWFufGVufDB8fDB8fHww',
    intro: 'This is Ali and a Geologist with 6 year of experince in releant field',
    tag:'Saatisfied'
   },
   {
    img: 'https://images.unsplash.com/photo-1548412542-fe1d1181336c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGJ1aXNuZXNzJTIwbWFufGVufDB8fDB8fHww',
    intro: 'This is Ali and a Geologist with 6 year of experince in releant field',
    tag:'Underserved'
   },
   {
    img: ' https://images.unsplash.com/photo-1546572797-e8c933a75a1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJ1aXNuZXNzJTIwbWFufGVufDB8fDB8fHww',
    intro: 'This is Ali and a Geologist with 6 year of experince in releant field',
    tag:'Underserved'
   }
]

const App = ()=>{

  
  return(
    <div>
      <Section1  users = {users}/>
      <Section2/>
    </div>
 )
}

export default App;