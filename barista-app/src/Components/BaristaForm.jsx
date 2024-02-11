import React, { Component, useState } from "react";
import drinksJson from "./drinks.json"
const BaristaForm = () => {

    const onNewDrink = () => {
        const [inputs, setInputs] = useState({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''



        });
        getNextDrink();
        const ingredients = {
            'temperature': ['hot', 'lukewarm', 'cold'],
            'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
            'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
            'blended': ['yes', 'turbo', 'no']
        }
    };
    const onCheckAnswer = () => {
        setCheckedTemperature('');
        if (trueRecipe.temp != inputs['temperature']) {
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }
        setCheckedSyrup('');
        if (trueRecipe.temp != inputs['Syrup']) {
            setCheckedSyrup('wrong');
        }
        else {
            setCheckedSyrup("correct");
        }
        setCheckedMilk('');
        if (trueRecipe.temp != inputs['Milk']) {
            setCheckedMilk('wrong');
        }
        else {
            setCheckedMilk("correct");
        }
        setCheckedBlended('');
        if (trueRecipe.temp != inputs['Blended']) {
            setCheckedBlended('wrong');
        }
        else {
            setCheckedBlended("correct");
        }

    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        <div className="drink-container">
            <h2 className="mini-header">{currentDrink}</h2>
            <button
                type="new-drink-button"
                className="button newdrink"
                onClick={onNewDrink}
            >
                🔄
            </button>
        </div>
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>

            <form >

                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id={correct_temp}>
                        {inputs["temperature"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="temperature"
                        choices={ingredients["temperature"]}
                        currentVal={inputs["temperature"]}
                    />
                </div>
                <h3>milk</h3>
                <div className="answer-space" >
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />
                <h3>syrup</h3>
                <div className="answer-space" >
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />
                <h3>blended</h3>
                <div className="answer-space" >
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />

            </form>

            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>

            <button
                type="new-drink-button"
                className="button newdrink"
                onClick={onNewDrink}
            >
                New Drink
            </button>
        </div>
    );


};
export default BaristaForm;