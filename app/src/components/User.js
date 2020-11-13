import React from 'react';
import classes from './user.module.css';


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {Alert,   
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Container
    } from 'shards-react';


const user = (props) => {

    //  console.log('User props', props);

    return (
        <React.Fragment>
        <div className = {classes.UserContainer}>
            <Card >
                <CardHeader> {props.user.id}</CardHeader>
                <CardTitle> {props.user.name}</CardTitle>
                <CardBody>
                    <p> username: {props.user.username} </p>
                    <p> email: {props.user.email} </p>
                    
                
                
                </CardBody>
            
            </Card>
        
        
        
        
        
        </div>

        
        
        </React.Fragment>
    )


}

export default user;