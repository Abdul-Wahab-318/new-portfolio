import React , {useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4';

export default function GoogleAnalytics() {
    const location = useLocation();
    
    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, [location])

    return(
        <Outlet/>
    )
}
