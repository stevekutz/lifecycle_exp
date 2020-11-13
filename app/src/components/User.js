import React, {Component} from 'react';
import classes from './user.module.css';


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {Alert,   
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Container
    } from 'shards-react';


class User extends React.Component {


    state = {
        showAddress: false,
    }

    // toggleAddress = () => {
    //     this.setState(prevState => {
    //         return {showAddress: !prevState}
    //     })
    // }

    toggleAddress = () => {
        this.setState({ showAddress: !this.state.showAddress})
    
    }



    render() {
    
    let {id, name, username, email} = this.props.user;
    let {street, suite, city, zipcode} = this.props.user.address;    

        return (
            <React.Fragment>
            <div className = {classes.UserContainer}>
                <Card >
                    <CardHeader> {id}</CardHeader>
                    <CardTitle> {name}</CardTitle>
                    <CardBody>
                        <p> username: {username} </p>
                        <p> email: {email} </p>
                        {this.state.showAddress ? (
                        <div>
                           <div className = {classes.AddressLine}>
                                <p> {street} </p>
                                <p> {suite}</p>                            
                            </div>
                            <div clasName = {classes.AddressLine}>
                                <p> {city} </p>
                                <p> {zipcode} </p>
                            </div>

                            <div className = {classes.AddressLine,  classes.Last}>
                           
                           </div> 

                        </div>
                        )
                        :
                        null }    
                    
                    
                    </CardBody>
                    <Button
                        // style = {{theme: this.state.showAddress ? 'info' : 'success'}}
                        theme = {this.state.showAddress ? 'info' : 'success'}    
                        onClick = {this.toggleAddress}
                    >
                    {this.state.showAddress ? 'Hide Address' : 'Show Address'}
                    </Button>
                
                </Card>
            
            
            
            
            
            </div>

            
            
            </React.Fragment>
        )
    
    
    
    
    }



}

export default User;