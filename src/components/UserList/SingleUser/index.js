import React from 'react';


const SingleUser = ({ user }) => (
    <div className="user">
        <div className="picture">
            <img src={ user.picture.large } alt="Joy Noel"/>
        </div>
        <div className="info">
            <div className="name">
                <span>Mrs </span>
                <span>Joy </span>
                <span>Noel </span>
            </div>
            <div className="email">
                <span>joy.noel@example.com</span>
            </div>
            <div className="phone">
                <span>(576)-670-5855</span>
            </div>
        </div>
    </div>
)
    

export default SingleUser;
