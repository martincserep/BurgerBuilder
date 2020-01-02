import React, { Component } from "react";

import Aux from '../../hoc/Aux/index';
import Burger from '../../components/Burger/index'
import BuildControls from "../../components/Burger/BuildControls";
import Modal from '../../components/UI/Modal/index'
import OrderSummary from '../../components/Burger/OrderSummary/index'
import axios from '../../axios-order'
import Spinner from "../../components/UI/Spinner";
import WithErrorHandler from '../../hoc/withErrorHandler/index'

const INGREDIENT_PRICES = {
    salad: 0.3,
    cheese: 0.5,
    meat: 1.5,
    bacon: .8
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://burgerbuilder-a7527.firebaseio.com/ingredients.json')
        .then( response => {
            this.setState( { ingredients: response.data } );
        } )
        .catch( error => {
            this.setState( { error: true } );
        } );
    }
 
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updadetIngredients = {
            ...this.state.ingredients
        }
        updadetIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition; 
        this.setState({totalPrice: newPrice, ingredients: updadetIngredients});
        this.updatePurchaseState(updadetIngredients);

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    purchaseContinueHandler = () => {
        // this.setState({loading: true});
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Martin Cserép',
        //         address: {
        //             street: 'Test 1',
        //             zipCode: '4220',
        //             country: 'Hungary'
        //         },
        //         email: 'test@test.hu'
        //     },
        //     deliveryMethod: 'fast'
        // }
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false})
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false})
        //     });
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: "/checkout",
            search: '?' + queryString
        });
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updadetIngredients = {
            ...this.state.ingredients
        }
        updadetIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction; 
        this.setState({totalPrice: newPrice, ingredients: updadetIngredients});
        this.updatePurchaseState(updadetIngredients);
    }
    
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        let orderSummary = null;
        let burger = <Spinner />
    
        if(this.state.ingredients) {
            burger = (
                <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                            ingredientAdded={this.addIngredientHandler}
                            ingredientRemoved={this.removeIngredientHandler}
                            disabled = {disabledInfo}
                            price={this.state.totalPrice}
                            purchasable={this.state.purchasable}
                            ordered={this.purchaseHandler}
                        />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if ( this.state.loading ) {
            orderSummary = <Spinner />;
        }
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>

        );
    }
}

export default WithErrorHandler(BurgerBuilder, axios);