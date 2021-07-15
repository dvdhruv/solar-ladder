import React, { useState } from 'react';
import './Button.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from 'react-modal';
import Form from './Form';
import { useDropzone } from "react-dropzone";
import Dropzone from './Dropzone';
import {Switch} from '@material-ui/core';
import {db} from './firebase';
import CloseIcon from '@material-ui/icons/Close';
import { ToggleOff } from '@material-ui/icons';
import firebase from "firebase";


function Button() {
    const [modalIsOpen,setModalisOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
    }

    const [itemname, setItemname] = useState("");
    const [category, setCategory] = useState("");
    const [itemcode, setItemcode] = useState("");
    const [unit, setUnit] = useState("");
    const [itemdes, setItemdes] = useState("");
    const [purchasep, setPurchasep] = useState("");
    const [gst, setGst] = useState("");
    const [itemtype, setItemtype] = useState("");


    const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("items")
      .add({
        itemname: itemname,
        category: category,
        itemcode: itemcode,
        unit:unit,
        itemdestination:itemdes,
        purchaseprice:purchasep,
        gst:gst,
        itemtype:itemtype,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        
        alert("Your entries are done 👍");
      })
      .catch((error) => {
        alert(error.message);
        
      });

    setItemname("");
    setCategory("");
    setItemcode("");
    setUnit("");
    setItemdes("");
    setPurchasep("");
    setGst("");
    setItemtype("");
    }

    return (
        <div className="middle">
            <label className="low">SHOW LOW COST</label>

            <label className="category">Category</label>
            <select name="parts" id="parts" classNmae="custom-select p-5" style={{width:"12%",padding: "10px",fontSize:"16px"}}>
                <option value="all">All</option>
                <option value="Inverter">Inverter</option>
                <option value="wire">wire</option>
                <option value="other">other</option>
            </select>

            <label style={{ fontSize:"25px"}}>+</label>
            <button disabled className="btn delete"><DeleteIcon />DELETE SELECTED</button>

            <button className="btn add" onClick={() => setModalisOpen(true)}>+ ADD TO INVENTORY</button>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalisOpen(false)}

            >
                <div>
                    
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="upper_form">
                            <b>CREATE ITEM</b>
                            <CloseIcon onClick={() => setModalisOpen(false)} />
                        </div>
                        <hr></hr><br></br>
                        <hr></hr>
                        <div className="container">
                            <div className="form_left">
                                <h4 >General Details</h4>
                                Upload Image Here
                                <Dropzone />
                                <br></br>
                                Item Type<br></br>
                                <span>
                                    <input type="radio" value="product" name="item_type" onChange={(e) => setItemtype(e.target.value)} /> Product
                                    <input type="radio" value="service" name="item_type" onChange={(e) => setItemtype(e.target.value)} /> Service
                                </span>                                
                                <label className="item_name">Item Name</label>
                                <input className="item_text" type="text" value={itemname}
                                        onChange={(e) => setItemname(e.target.value)} />

                                <label className="category_form">Category</label>
                                    <select name="parts" id="parts" classNmae="custom-select p-5" style={{width:"66%",padding: "5px",fontSize:"16px",height:"40px"}}
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="all">All</option>
                                        <option value="Inverter">Inverter</option>
                                        <option value="wire">wire</option>
                                        <option value="other">other</option>
                                    </select>
                                <span className="plus">+</span>
                                <label className="item_code">Item Code</label>
                                <input type="text" name="name" className="item_code_text"value={itemcode}
                                    onChange={(e) => setItemcode(e.target.value)} />
                                            
                                <label className="unit">Unit</label>
                                    <select name="parts" id="parts" classNmae="custom-select p-5" style={{width:"47%",padding: "5px",fontSize:"16px",height:"37px",position:"relative",top:"-118px",left:"395px" }}
                                    value={unit}
                                    onChange={(e) => setUnit(e.target.value)}
                                    >
                                        <option value="feet">feet</option>
                                        <option value="inches">inches</option>
                                        <option value="unit">unit</option>
                                        <option value="pieces">pieces</option>
                                        <option value="numbers">numbers</option>
                                        <option value="metre">metre</option>

                                    </select>

                                <label className="item_d">Item Desciption</label>
                                {/* <input type="text" name="name" className="discription" /> */}
                                <textarea className="discription" value={itemdes}
                                    onChange={(e) => setItemdes(e.target.value)}/>

                                <button type="submit" className="save">Save</button>
                                <button type="reset" className="reset">RESET</button>


                                

                            </div>
                            <div className="form_right"><h4>Pricing Details</h4>
                                <label className="purchase_price">Purchase Price</label>
                                <input type="text" name="name" className="purchase_price_text" value={purchasep}
                                    onChange={(e) => setPurchasep(e.target.value)}/>
                                
                                    <label className="tax">Inclusive of tax</label>
                                    <Switch 
                                        color="primary"
                                        size="normal"
                                        onClick={toggler}
                                    />              
                                
                                
                                    


                                <label className="gst">GST Tax Rate(%)</label>
                                    <select name="parts" id="parts" classNmae="custom-select p-5" style={{width:"47%",padding: "5px",fontSize:"16px",height:"37px",position:"relative",top:"0px",left:"0px"}}
                                        value={gst}
                                        onChange={(e) => setGst(e.target.value)}
                                    >
                                        <option value="Gst @ 5%">Gst @ 5%</option>
                                        <option value="Gst @ 7%">Gst @ 7%</option>
                                        <option value="Gst @ 10%">Gst @ 10%</option>
                                        <option value="Gst @ 15%">Gst @ 15%</option>
                                    </select>
                            
                            </div>

                        </div>
                        

                    </form>
                </div>
            </Modal>

        </div>
    )
}

export default Button
