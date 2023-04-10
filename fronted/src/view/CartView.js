import React from 'react';
import Cart from '../components/Cart';

class ProfileView extends React.Component{

    render(){
        return(
                    <>
                        <div className="home-content">
                            <Cart/>
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </>
        );
    }
}

export default ProfileView;