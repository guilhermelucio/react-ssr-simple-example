import React from 'react';

export const Home = () => {
    return (
        <div>
            I'm the home component!!! <br />
            <button onClick={() => console.log('clicked')}>Click me</button>
        </div>
    )
};

export default {
    component: Home
};