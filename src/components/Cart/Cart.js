import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;

    let totalMember = 0;
    let totalSalary = 0;
    let allName = []
    for (const member of cart) {
        member.quantity = !member.quantity ? 1 : member.quantity;
        totalSalary += parseInt(member.salary);
        totalMember = totalMember + member.quantity;
        const addedMember = member.name + ',       ';
        allName.push(addedMember);
    }
    console.log(totalSalary);
    return (

        <div className="cart">
            <h3>Member Added:{parseInt(totalMember)} </h3>
            <h4 >Total Salary:${totalSalary} </h4>

            <div className="name mx-auto">
                <h3> Added name </h3>
                <h3 className="d-flex " ><span style={{ color: 'salmon' }}>{allName}</span></h3>

            </div>
        </div>
    );
};

export default Cart;