import React, {Component} from 'react';
import pizza_margherita from '../images/pizza_margherita.jpg';
import pizza_with_italian_sausage from '../images/pizza_with_italian_sausage.jpg';
import pizza_with_ricotta_cheese from '../images/pizza_with_ricotta_cheese.jpg';
import pasta_and_bacon_in_cream from '../images/pasta_and_bacon_in_cream.jpg';
import green_beans_salad from '../images/green_beans_salad.jpg';
import pasta_tomato from '../images/pasta_tomato.jpg';

export const FoodContext = React.createContext();

class FoodContextProvider extends Component {

	state = {
		 products:[
		 	{
		 		"id": 1,
		 		"title":'pizza margherita', 
		 		"price": 200, 
		 		"image":pizza_margherita,
		 		"ingredients":['tomato','cheese','basil'] ,
		 		"count": 1
		 	},
		 	{
		 		"id": 2,
		 		"title":'pizza with italian sausage', 
		 		"price": 210, 
				"image":pizza_with_italian_sausage,
				"ingredients":['Bacon','ricotta cheese','basil'],
		 		"count": 1
		 	},
		 	{
		 		"id": 3,
		 		"title":'pizza with ricotta cheese', 
		 		"price": 220, 
		 		"image":pizza_with_ricotta_cheese,
		 		"ingredients":['mushroom','cheese','basil'],
		 		"count": 1
		 	},
		 	{
		 		"id": 4,
		 		"title":'pasta and bacon in cream', 
		 		"price": 110, 
				"image":pasta_and_bacon_in_cream,
				"ingredients":['Bacon','corn','tomato'],
		 		"count": 1
		 	},
		 	{
		 		"id": 5,
		 		"title":'pasta and sauce bolognaise', 
		 		"price": 100, 
		 		"image":pasta_tomato,
		 		"ingredients":['ground pork','tomato','onion'],
		 		"count": 1
		 	},
		 	{
		 		"id": 6,
		 		"title":'green beans salad',
		 		"price": 80,
		 		"image":green_beans_salad,
		 		"ingredients":['beans','egg','hemp seeds'],
		 		"count": 1
		 	}
		]
	};

	render(){
    return (
    	<FoodContext.Provider value={this.state}>
    	{this.props.children}
    	</FoodContext.Provider>
    	);
	}
	
}

export default FoodContextProvider;
