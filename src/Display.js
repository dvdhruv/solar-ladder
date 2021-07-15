import React,{useState, useEffect} from 'react';
import {db} from './firebase';
import firebase from 'firebase';
import './Display.css';
function Display() {

    const [item,setItem]=useState([]);
    useEffect(() => {
        db.collection('items').onSnapshot(snapshot => {
            setItem(snapshot.docs.map(doc => doc.data()))
        })
    },[])

  return (
      <div>
        <table className="table">
        <tr>
            <th>Item Name</th>
                <th>Item Code</th>
                <th>Category</th>
                <th>Item type</th>
                <th>Purchase Price</th>
                <th>From Inventory</th>
        </tr>
        {
            item.map(
                (it)=>(
                    
                        <tr>
                            <td>{it.itemname}</td>
                            <td>{it.itemcode}</td>
                            <td>{it.category}</td>
                            <td>{it.itemtype}</td>
                            <td>{it.purchaseprice}</td>
                            <td>✔</td>
                        </tr>
                    
                )
            )
        }
        </table>
      </div>
  );
    
}

export default Display;
