
import React from "react";

export class Register extends React.Component
{
    constructor(){
        super();
        this.state = {
            name:"Biscuit",
            price:1200,
            discount:20
        }
    }
    render(){

            return (
                <div>
                <h1>Register</h1>
            </div>
            )

    }
}