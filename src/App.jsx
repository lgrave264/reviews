import React from 'react';
import reviews from './util/data';
import List from './components/List';

function App(){
    return(
        <main>
            <section className='container'>
                <h3>Reviews</h3>
                <List />
            </section>
        </main>
    )
}

export default App