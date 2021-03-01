import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import github from '../api/github';

const DetailsPage = () => {

    const [results, setResults] = useState('');
    const [repositories, setRepositories] = useState('');

    const renderResults = async (term) => {
        if (term) {
            const response = await github.get(`/${term}`);
            const repo = await github.get(`/${term}/repos`);
            setResults(response.data);
            setRepositories(repo.data);
        }
        else {
            return null;
        }
    };

    useEffect(() => {
        renderResults();
    }, [])

    return (
        <>
            <Searchbar submitHandler={renderResults} />
            {results ?
                <div className="content">
                    <div className="content__left">
                        <div className="content__left-image">
                            <img src={results.avatar_url} className="content__left-image-1" alt="git avatar" />
                        </div>
                        <div className="content__left-name">
                            <a href={results.html_url} className="content__left-name-1">{results.name}</a>
                            <div className="content__left-name-2">{results.login}</div>
                        </div>
                        <div className="content__left-bio">
                            {results.bio}
                        </div>
                        <div className="content__left-following">
                            Following: {results.following}
                        </div>
                        <div className="content__left-followers">
                            Followers: {results.followers}
                        </div>
                    </div>
                    {repositories ?
                        <div className="content__right">
                            <div className="content__right-title">Repositories</div>
                            {repositories.map((repository) =>
                                <div className="content__right-item" key={repository.id}>
                                    <a href={repository.html_url} className="content__right-item-name">{repository.name}</a>
                                    <div className="content__right-item-details">
                                        {repository.language ? <>Main language: {repository.language}</> : null}
                                    </div>
                                </div>)
                            }
                        </div>
                        : <h2>No repositories to show!!</h2>}
                </div>
                : null}
        </>
    );
}

export default DetailsPage;