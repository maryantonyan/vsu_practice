import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contact.js';
class App extends Component {
	foo(){
  return <h2>Contacts</h2>
};
render() {
	const a = [
	{name:'	Mariam',surname:'Amirkhanyan', img:'https://i.pinimg.com/originals/27/a1/35/27a1357faef0665b5ec4059d46b674cc.jpg', mail:'amirxanyan.mariam.96844519@gmail.com', tel:'+37477670029'}
	
	];
  return (
    <div className="App">
	<div className="contacts">
	{a.map(i => <Contact img={i.img} name={i.name} surname={i.surname} mail={i.mail} tel={i.tel} key={i.name} />)}
	</div>
    </div>
	
  );
}
}

export default App;