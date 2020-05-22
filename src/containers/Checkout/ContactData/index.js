import React, { Component } from 'react';
import Button from '../../../components/UI/Button';
import axios from '../../../axios-order';
import styles from './ContactData.module.scss';
import Spinner from '../../../components/UI/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Martin Cserép',
                address: {
                    street: 'Test 1',
                    zipCode: '4220',
                    country: 'Hungary'
                },
                email: 'test@test.hu'
            },
            deliveryMethod: 'fast'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false })
            });
        console.log(this.props.ingredients)
    }

    render() {
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your name" />
                <input className={styles.Input} type="email" name="email" placeholder="Your email" />
                <input className={styles.Input} type="text" name="street" placeholder="Street" />
                <input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;