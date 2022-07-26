import React, {useEffect, useState} from 'react';
import Spinner from "../Spinner/Spinner";

const WithLoadingDelay = (Component) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);


    return class extends React.Component {
        render() {
            return (
                <div>
                    {loading ? <Spinner/> : <Component {...this.props} />}
                </div>
            );
        }
    }
}

export default WithLoadingDelay;