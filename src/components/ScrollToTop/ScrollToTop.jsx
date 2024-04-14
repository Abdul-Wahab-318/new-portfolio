import React , {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
export default function ScrollToTop({ children }) {

    const { pathname } = useLocation()

    useEffect(()=>{
        window.scrollTo({
          top : '0px' ,
          left : '0px', 
          behavior : 'instant'
        })
      },[pathname])

  return (
    <React.Fragment>{children}</React.Fragment>
  )
}
