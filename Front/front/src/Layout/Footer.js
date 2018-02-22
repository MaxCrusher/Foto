import React, { Component } from 'react';
import {Button, Image, Icon} from 'semantic-ui-react';
import "../css/Layout.css";

class Footer extends Component{

    render(){
        return(
            <div>
                <footer className = 'footer'>
                    <div className = 'footer1'>
                    <a href = 'https://vk.com'>
                        <Icon name = 'vk' size = 'huge' color = 'black'></Icon>
                    </a>
                    <a href = 'https://instagram.com'>
                        <Icon name = 'instagram' size = 'huge' color = 'black'></Icon>
                    </a>
                    <a href = 'https://youtube.com'>
                        <Icon name = 'youtube' size = 'huge' color = 'black'></Icon>
                    </a>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;