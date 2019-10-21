import React from 'react';
import Contact from './Components/Contacts';
import ContactList from './Components/ContactList';


function App() {
  return (
<div className="contact">

    <ContactList />
    <Contact
    
    avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVeAVHoPrPXS1uqCfFGyvhUW4wvmX8sMbuY2su3yaOxLZN2J0NQ&s'
    name='sophie'
    />
    <Contact
    
    avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtpqrtfXbzRCIplQpVz6pvqGeW3J5uICyYWOg9uBWejQYKkHt&s://encrypted-tbn0.gstathttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVgH7bpNcAr25Yzj0eZ6VafC78XU3ywb5-T2xWm7Aa8gw3PVi&sic.com/images?q=tbn:ANd9GcRvVeAVHoPrPXS1uqCfFGyvhUW4wvmX8sMbuY2su3yaOxLZN2J0NQ&s'
    name='laurie'
    status
    />
     <Contact
    
    avatar='https://upload.wikimedia.org/wikipedia/commons/f/f7/Dame_Edna_%286959716988%29.jpg'
    name='nadine'
    status
    
    />

  </div>
  );
  }
export default App;


