import React from 'react';

const Main = ({handleLogOut}) => {

    return(
        <section className="main">

        <nav>
        <button onClick={handleLogOut}>Logout</button>

        </nav>

        </section>
    );
};

export default Main;