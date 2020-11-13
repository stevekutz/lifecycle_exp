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
    Container,
    Modal,
    ModalBody,
    } from 'shards-react';


class User extends React.Component {


    state = {
        showAll: false,
        openModal: false,
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


    // Update if anything in state, props, snapshot changes
    componentDidUpdate (prevProps, prevState) {

        // MUST include prevProps
        // MUST include a conditon to check or else returns true and endless loop results 
        //          >> Error: Maximum update depth exceeded
        if (prevState.showAll !== this.state.showAll) {
            this.setState({openModal: !prevState.openModal});    
        }
    }

    // Legacy method to handle SetState
    // toggleAddressModal = () => {
    //     this.setState({ showAll: !this.state.showAll,
    //                     // openModal: !this.state.openModal,
    //     })     
    // }



    render() {
    

    const {openModal} = this.state;
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
                     
                    </CardBody>
                    <Button
                        theme = {this.state.showAll ? 'info' : 'success'}    
                        onClick = {this.toggleAddressModal}
                    >
                    {this.state.showAll ? 'Hide Address' : 'Show Address'}
                    </Button>
                
                <Modal
                    open = {openModal}
                    toggle = {this.toggleAddressModal}
                >
                    <ModalBody>
                         <div>
                           <div className = {classes.AddressLine}>
                                <p> {street} </p>
                                <p> {suite}</p>                            
                            </div>
                            <div className = {classes.AddressLine}>
                                <p> {city} </p>
                                <p> {zipcode} </p>
                            </div>

                            <div className = {classes.AddressLine,  classes.Last}>
                           
                           </div> 

                        </div>
                    
                    </ModalBody>


                </Modal>
                
                </Card>
            
            
            
            
            </div>

            
            
            </React.Fragment>
        )
    
    
    
    
    }



}

export default User;