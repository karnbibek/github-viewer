import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const Languages = ({ link }) => {
    const [language, setLanguage] = useState('');

    const fetchLang = useCallback(async () => {
        const response = await axios.get(link);
        console.log(response.data);
        setLanguage(response.data);
    }, [link]);

    useEffect(() => {
        fetchLang();
    },[fetchLang]);

    return (
        <>
            {/* {language ? } */}
        </>
    );
}

export default Languages;