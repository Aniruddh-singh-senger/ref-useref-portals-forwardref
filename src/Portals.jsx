import React from 'react';
import ReactDOM from 'react-dom';

const Portals = () => {
    return (

        ReactDOM.createPortal(
            <div className='App'>
                <h1>Portals</h1>
                <h3>Hello this component used in other root </h3>
                <p>please check in console thank you </p>
            </div>
            , document.getElementById('Dummy')
        )

    )
}

export default Portals;
