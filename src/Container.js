import React from 'react';
import './Container.css';
import StoreIcon from '@material-ui/icons/Store';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Button from './Button';
import Form from './Form.js';
import Display from "./Display";

function Container() {
    return (
        <div>
            <div className="cont_upper">
                <div className="left_icon"><StoreIcon /><h3>Inventory</h3></div>
                <div className="left_icon"><StorefrontIcon /><h3>Items</h3></div>
                <div className="left_icon"><AccountBalanceIcon /><h3>Expenses</h3></div>
            </div>
            <hr></hr><br></br>
            <Button />
            <Display />
        </div>
    )
}

export default Container
