import React, { Component } from "react";
import { Button, Grid, GridColumn, Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../css/Layout.css";

class Header extends Component {
  render() {
    return <div>
        <header className="header">
          <Grid columns="equal">
            <Grid.Row textAlign="center">
                <Grid.Column/>
              <Grid.Column>
                <Link to="/">
                    <div className = 'Logo'>
                        <a>My Insta</a>
                    </div>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <div style={{ marginTop: 10}}>
                  <Button color = 'grey'>Sign up</Button>
                  <Button color = 'grey'>Log-in</Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </header>
      </div>;
  }
}
export default Header;
