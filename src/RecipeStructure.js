
import { Typography } from '@mui/material';
import React, {Component} from 'react';
import "./css/Recipe-struct.css";

class RecipeStructure extends Component{

    constructor()
    {
        
        super();
        this.state = {                                  //Added for the sake of future use
        }
    }


    array = () =>{                                      //Created 20 numbers and used them to map ingredients array
        let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        let filtered = array.filter(n=> (this.props.recipe["strIngredient"+n] !=="" && this.props.recipe["strIngredient"+n] !== null ))
        return filtered;                                //returned only those ingredient numbers which had ingredients listed
        
    }

    render(){
        return (
            <div className = "cardContainer">
                    <div className = "cardContent">
                        <div className = "left">    {/*Created left right classes to divide the picture and content in a way that was required */}
                            <p className = "recipe-heading"><a href = {this.props.recipe.strSource} rel="noopener noreferrer" target = "_blank">{this.props.recipe.strMeal}</a></p>
                            <img className = "pic" src = {this.props.recipe.strMealThumb} alt = {this.props.recipe.strMeal} />  {/*Used image from api data */}
                        </div>

                        <div>
                            <div className = "ingredients-container">       {/*We map through the array of numbers where strIngredients key has values and we used the same numbers to get the strMeasure values and showed them in a typography element */}
                            <Typography style={{textAlign: "center"}}><span className='ing' style = {{fontStyle: "italic"}}>Ingredients</span></Typography>
                                <div style={{padding:20}}>
                                {this.array().map(n => {
                                    return (<Typography style = {{fontSize: 14, marginBottom: 2, fontFamily: "monospace"}}key ={this.props.recipe.idMeal+n}><span>{this.props.recipe["strIngredient"+n]} - {this.props.recipe["strMeasure"+n]}</span></Typography>)}
                                )}
                                </div>
                            </div>
                        </div>

                        <div className = "recipe">          {/*We get recipe data from the api */}
                            <div className = "recipe-container">
                            <Typography style = {{textAlign: 'center'}}><span className='rec' style = {{fontStyle:"italic"}}>Recipe</span></Typography>
                            <div className='inrec'>
                                <Typography style={{fontSize:14, padding:10, fontFamily: "monospace", marginTop: 10}}>{this.props.recipe.strInstructions}</Typography>
                            </div>
                            </div>
                        </div>
                            
                                {/* <div className = "right">   
                                    <div className = "description">
                                        <Typography style={{fontSize:20}}><span style = {{fontStyle: "italic"}}>Category of Meal - {this.props.recipe.strCategory}</span></Typography>
                                        <Typography style={{fontSize:20}}><span style = {{fontStyle: "italic"}}>Area of the Meal - {this.props.recipe.strArea}</span></Typography>
                                    </div>
                                        <div>
                                        <Typography style={{textAlign: "center"}}><span style = {{fontStyle: "italic"}}>Ingredients</span></Typography>
                                        <div className = "ingredients-container">       
                                            {this.array().map(n => {
                                                return (<Typography style = {{padding:10, marginBottom:20, fontSize: 18}}key ={this.props.recipe.idMeal+n}><span>{this.props.recipe["strIngredient"+n]} - {this.props.recipe["strMeasure"+n]}</span></Typography>)
                                                }
                                            )}
                                        </div>
                                        <div className = "recipe">          
                                            <Typography style = {{textAlign: 'center'}}><span style = {{fontStyle:"italic"}}>Recipe</span></Typography>
                                            <div className = "recipe-container">
                                                <Typography style={{fontSize:15, padding:10}}>{this.props.recipe.strInstructions}</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                    </div>
            </div>

        )
    }

}

export default RecipeStructure;



