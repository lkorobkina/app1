import React, {useEffect, useState} from 'react';
import Spinner from "../Spinner/Spinner";

const WithLoadingDelay = Component => {
    return props => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [loading, setLoading] = useState(true);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setTimeout(() => setLoading(false), 2000);
        }, []);


        return loading ? <Spinner/> : <Component {...props} />;
    }
}

export default WithLoadingDelay;