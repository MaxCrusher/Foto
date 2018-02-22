import React, { Component } from "react";
import { Button, Grid, GridColumn, Menu, Segment, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MainPage extends Component{

    render(){
        return(
            <div>
                <Grid columns = {3} divided>
                    <Grid.Row >
                        <Grid.Column>
                            
                            <Image src = '123.png'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export default MainPage
