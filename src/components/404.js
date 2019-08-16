import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const NoPageAvailable = () => {
    return (
        <div className="alert alert-danger">
            <h2>404! Page Not Found</h2>
            <p>Back --> <Link to="/">Home</Link></p>
        </div>
    )
}

export default NoPageAvailable;