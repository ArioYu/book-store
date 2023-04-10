import React from 'react';
import {Layout} from 'antd'
import { Profile } from '../components/Profile';

class ProfileView extends React.Component{

    render(){
        return(
                    <>
                        <div className="home-content">
                            <Profile />
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </>
        );
    }
}

export default ProfileView;