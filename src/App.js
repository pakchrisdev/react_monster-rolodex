import React from 'react';
import {CardList} from './components/CardList/CardList';
import {SearchBox} from './components/SearchBox/SearchBox';
import './App.css';

export default class App extends React.Component{
	constructor(){
		super();
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(resp => resp.json())
			.then(data => this.setState({monsters: data}))
	}

	handleChange = (e) => {
		this.setState({searchField: e.target.value})
	}

	render(){
		const {monsters, searchField} = this.state;
		const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder="search monsters" handleChange={this.handleChange} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}