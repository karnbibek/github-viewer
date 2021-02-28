import React, { useState } from 'react';

const Searchbar = ({ submitHandler }) => {
    const [term, setTerm] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (term) {
            submitHandler(term);
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 1000);
        }
    }

    return (
        <form className="search" onSubmit={onSubmit}>
            {/* <div className="search__main"> */}
            <div className="search__input-err">
                <input className="search__input" onChange={(e) => setTerm(e.target.value)} type="text" placeholder="Enter username" name="username" />
                {error ? <div className="search__error">Please enter a valid text!!</div> : null}
                </div>
                <button action="submit" className="search__button">Search</button>
            {/* </div> */}
        </form>
    );
}

export default Searchbar;