import React, { useState,useEffect} from 'react';
import "./Nav.css";
function Nav() {
    const[show,handleShow]=useState(false);
   useEffect(() =>{
    window.addEventListener('scroll',() =>{
        if(window.scrollY>1)
        {
            handleShow(true);
        }
        else handleShow(false);
    })
   },[])
   
    return (
        <div className={`nav ${show &&'nav_blank'}`}>
            <img
            className="nav_logo"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwECB//EADMQAQABAgQBCwIGAwEAAAAAAAABAgMEBRExcRITISIyNEFRgaGxcpEUFVNhwdEzQvAG/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAwYHAgH/xAAwEQEAAQICCAMHBQAAAAAAAAAAAQIDBBEFEhMhMVGBsTJB0SI0cXKh4fAGFBVhkf/aAAwDAQACEQMRAD8A/GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ2AF9ayTDV26audvdMecf0+/wAhw/6t77x/TB+5trmNA42YziI/1nh3xlicNirlmdZimeiZ8Y8DB2acRfi3VMxExM6wy60Zayr2Fe12OXtZ5dXAW35Va/Vuezji8BbsYeq5TXXMxp0Tp5vEXqJnJMuaLxNuia6o3Rv4q8BlVwAAAAAAAAAAAAAATtITtIS1mCr6vInyiYSlfar5uq3V4bTwlYKiuN7p+Gqzoy5KP/0VjSq1iIjfqVfMfygZX3yn6ZaLMLH4nB3bcdqY1p4xszuVd8p+mUyzXrWZjk1fSeG2Wk7dccKpievn69V2i5n3K5xj5hKRcz7lc4x8ww2/HCzxnu1z5Z7KMBYtFAAAAAAAAAAAAAACdpCdpCWk01txH7JuGr5yzTVO+08UOnsxwdcFXpcrtz49MKuqM4dGw9WrXH9pjPzZ/D51XTEdWqJqp4S0CBmNnW5ZxER00a0zwn/vctVZTMc3zSWH2tFFccaKonp5+vR4i5n3K5xj5hJidYRsz7lc4x8w90eOETGe7XPlnsowFi0UAAAAAAAAAAAAAAJ2kJ2kJaWnsxwfPK5u7Rc8pfVPZjg8rjWFb5ug79WMlk+LtHOW6qJ8YR8sv89humetbqmifTb20S2GYmmcljauU37UVxwmFZbno0neHDM+5XOMfMJd+nkYmryq60ImZ9yucY+YSKPFCmxkTThrlM+UT2UYCwaMAAAAAAAAAAAAAAE7SE7SEtLT2Y4PXlPZjg9VjoVPCEHJb/IzC/Zmei5MzHGJn+F8x/OTZxk3ad6Lkz7tdRVTXRTXROtNUaxP7PeJoymKuaJ+n8Tr2q7M8aZ+k/fNxxtOtuK43pn2VuZ9yuenzC5qpiqmaZ2mNFLmUTGBuRO8TET94eLM+1CVpSnKzcnnTPZSALNz4AAAAAAAAAAAAAAJ2kJ2BpaezHB6q5zXSIimz96nzOa3fC1RHrMoOxr5Nw/lsJTGWt9JQr3+a59c/LQ5Df53Bc3M9a1PJ9PBnaquVVVVO8zMu+CxlzBV1V2opnlRpMVbJF63r0ZRxUejMdThcXtKvDOcT+fFrVVnlHJw1yfCrkz66wixn17/AGsW54VS547NYxmGm1NjkVTMTExVr48Ea3YuU1xMw2HG6XwV/DV0U175ict08vgrAE9pQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"
            alt="Netflix Logo"
            />
            <img
            className="nav_avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuuv_89dQV4F_8TqeGgd2YfxGlN3I5vllGxb3jfJu7cg&s"
            alt="avatar logo"
            />
        </div>
    );
}

Nav.propTypes = {

};

export default Nav;