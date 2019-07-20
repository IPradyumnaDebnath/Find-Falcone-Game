import React from 'react';
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            404 Page Not Found
            <p>
                Go to  <Link to="/">Home</Link>
            </p>
        </div>
    )
}

export default PageNotFound;