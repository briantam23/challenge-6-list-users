import React from 'react';
import { properCase } from '../../../util';


const SingleUser = ({ user }) => {

    const { picture, email, phone } = user;
    let { title, first, last } = user.name;

    if(!title) return null;

    title = properCase(title);
    first = properCase(first);
    last = properCase(last);

    return(
        <div className="user">
            <div className="picture">
                <img src={ picture.large } alt={ first + ' ' + last }/>
            </div>
            <div className="info">
                <div className="name">
                    <span>{ title } </span>
                    <span>{ first } </span>
                    <span>{ last } </span>
                </div>
                <div className="email">
                    <span>{ email }</span>
                </div>
                <div className="phone">
                    <span>{ phone }</span>
                </div>
            </div>
        </div>
    );
};
    

export default SingleUser;
