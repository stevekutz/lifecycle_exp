import React from 'react';
import User from './User';
// import dataUsers from '../data/dataUsers';

import classes from './users.module.css';


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
    Container
    } from 'shards-react';



const Users = (props) => {

    // console.log(dataUsers);
    console.log(props.userData)


    return (
    
        <Container className = {classes.Container}>

        {props.userData.map((user, key) => {
            return (
                <User 
                    key = {user.id}
                    user = {user}
                    openModal = {false}
                />    
            )
        
        
        })}

        
        
        
        </Container>
        
    
    )



}

export default Users;

// 0	
//  id	1
//  name	"Leanne Graham"
//  username	"Bret"
//  email	"Sincere@april.biz"
//  address	
//      street	"Kulas Light"
//      suite	"Apt. 556"
//      city	"Gwenborough"
//      zipcode	"92998-3874"
// geo	
//  lat	"-37.3159"
//  lng	"81.1496"
// phone	"1-770-736-8031 x56442"
// website	"hildegard.org"
// company	
//  name	"Romaguera-Crona"
//  catchPhrase	"Multi-layered client-server neural-net"
//  bs	"harness real-time e-markets"