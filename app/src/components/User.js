import React, {Component} from 'react';
import classes from './user.module.css';
import axios from 'axios';

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
    Container,
    Modal,
    ModalBody,
    } from 'shards-react';


class User extends React.Component {


    state = {
        showAll: false,
        openModal: false,
        imageURL: null,
        mounted: null,
    }

    // // cleaner ES5  approach in case React batches multiple setState() calls
    // toggleAddressModal = () => {
    //     this.setState(prevState => {
    //         return {showAll: !prevState.showAll}
    //     })
    // }

    // cleaner ES6  approach in case React batches multiple setState() calls
    toggleAddressModal = () => {
        this.setState((prevState) => (
            { showAll: !prevState.showAll,
               // openModal: !prevState.openModal,            
            }))
    }


    // Runs once after the first render on client side
    componentDidMount () {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                this.setState({imageURL: res.data.message})
            })            
            .catch((err) => {
                console.log("Doggos GET error ", err)
            })    

    }


    // Update if anything in state, props, snapshot changes
    // Runs just before render, re-render
    componentDidUpdate (prevProps, prevState) {

        // MUST include prevProps
        // MUST include a conditon to check or else returns true and endless loop results 
        //          >> Error: Maximum update depth exceeded
        if (prevState.showAll !== this.state.showAll) {
             this.setState({openModal: !prevState.openModal});    

            console.log('ComponentDidUpdate FIRED !!! ')
        // Putting API call here wil re-fetch image every time Show All Info toggled  
        // as well as every second if modal left open  
            // axios.get('https://dog.ceo/api/breeds/image/random')
            //     .then(res => {
            //         this.setState({imageURL: res.data.message})
            //     })            
            //     .catch((err) => {
            //         console.log("Doggos GET error ", err)
            //     })           


        }


    }

    // Legacy method to handle SetState
    // toggleAddressModal = () => {
    //     this.setState({ showAll: !this.state.showAll,
    //                     // openModal: !this.state.openModal,
    //     })     
    // }


    componentWillUnmount () {
        this.imageURL = null;
    }    



    render() {
    

    const {openModal, imageURL} = this.state;
    let {id, name, username, email} = this.props.user;
    let {street, suite, city, zipcode} = this.props.user.address; 
    let {lat, lng} = this.props.user.address.geo;   

        return (
            
            <div className = {classes.UserContainer}>
                <Card small = {true}>
                    <CardHeader> {id}</CardHeader>
                    <CardTitle> {name}</CardTitle>
                    <CardBody>
                        <p> username: {username} </p>
                        <p> email: {email} </p>
                     
                    </CardBody>
                    <Button
                        theme = {this.state.showAll ? 'info' : 'success'}    
                        onClick = {this.toggleAddressModal}
                    >
                    {this.state.showAll ? 'Hide Extra Info' : 'Show All Info'}
                    </Button>
                
                    <Modal
                        open = {openModal}
                        toggle = {this.toggleAddressModal}
                        size = 'small'
                        fade = {true}
                        animation = {true}
                    >
                        <ModalBody style = {{ padding: '5px'}}>
                            <Card >
                                <div className = {classes.TopInfo}>
                                    <CardTitle> {name}</CardTitle>
                                    <p > username: {username} </p>
                                    <p > email: {email} </p>                            
                                </div>
                            
                                <div className = {classes.InfoContainer}>

                                    <div className = {classes.ExtraInfo}>
                                        <p className = {classes.Address}> Address</p>
                                        <div className = {classes.AddressLine}>
                                            <p className = {classes.InfoField}> {street} {suite} </p>
                                            {/* <p className = {classes.InfoField}> {suite}</p>    */}                            
                                        </div>
                                        <div className = {classes.AddressLine}>
                                            <p className = {classes.InfoField}> {city} </p>
                                            <p className = {classes.InfoField}> {zipcode} </p>
                                        </div>


                                        <p className = {classes.Geo}> Geo Location</p>
                                        <div className = {classes.AddressLine}>
                                            <p className = {classes.GeoField}>Lat: {lat} </p>
                                            <p className = {classes.GeoField}>Long: {lng}</p>                            
                                        </div>
                                    
                                    </div>

                                    <div className = {classes.ExtraInfo}>
                                        
                                        <div className = {classes.ImageContainer}>
                                            <div></div>
                                            <img 
                                                className = {classes.Image} 
                                                src = {imageURL} 
                                                width = "100%" 
                                                alt = "dog pic" 
                                            />
                                            <div></div>
                                        </div>

                                    
                                    </div> 
                                
                                </div>


                            </Card>
                        
                        </ModalBody>


                    </Modal>
                
                </Card>
            
            
            
            
            </div>

            
            
            
        )
    
    
    
    
    }



}

export default User;