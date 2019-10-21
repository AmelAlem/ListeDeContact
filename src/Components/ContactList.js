import React from 'react';
import Contacts from './Contacts';


const Contact = [
    {
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Justin",
      status: "true"
      },
    {
        avatar: "https://randomuser.me/api/portraits/men/72.jpg",
        name: "Julien",
      }, 
    {
        avatar: "https://randomuser.me/api/portraits/men/71.jpg",
        name: "Jessy",
      }, 
    {
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        name: "Yannick",
      }, 
    {
        avatar: "https://randomuser.me/api/portraits/men/78.jpg",
        name: "Albert",
        status: "true"
      }
  ];
  
  const ContactList = () => (
    <div>
      {Contact.map(item => (
  <Contacts name={item.name} avatar={item.avatar} status={item.status} />
)
      )}
    </div>
  );
  
  export default ContactList;