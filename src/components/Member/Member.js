import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Member.css';
const Member = (props) => {
    const { pic, name, position, age, Location, salary } = props.team;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

    return (
        <div className="member container">
            <div className="card member-container">
                <img src={pic} alt="" />
                <h4>Name: {name}</h4>
                <h4>Designation: {position}</h4>
                <h4>Age: {age} years</h4>
                <h4>Location: {Location}</h4>
                <h4>Salary:${salary}</h4>
                <button onClick={() => props.handleChange(props.team)}
                    className="btn w-50 bg-danger mx-auto my-3 text-succes">{cartIcon} Add to Cart</button>
                <div className=" font d-flex justify-content-around mb-3"> <i class="fab fa-facebook-square icon"></i> <i className="fab fa-instagram-square 3x"></i></div>

            </div>

        </div>
    );
};

export default Member;