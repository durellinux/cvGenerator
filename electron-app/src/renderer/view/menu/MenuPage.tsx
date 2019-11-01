import { push } from "react-router-redux";
import { AppBar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import * as _ from 'lodash';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from '@material-ui/icons/Dashboard';
import DeviceHub from '@material-ui/icons/DeviceHub';
import Description from '@material-ui/icons/Description';
import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { DispatchProps } from "../../commons/DispatchProps";


const MENU_METADATA = [
    {
        label: 'CV Local State',
        icon: <Dashboard/>,
        link: '/cvLocalState',
    },
    {
        label: 'CV Redux',
        icon: <DeviceHub/>,
        link: '/cvRedux',
    },
];


class MenuPage extends React.Component<DispatchProps<RootState>, any> {

    private async handleItemClick(link: string) {
        const { dispatch } = this.props;
        dispatch(push(link));
    }

    render() {
        return (
          <div style={{height: "100vh", display: "flex", flexDirection: "column", alignContent: "stretch", justifyContent: "stretch", margin: "0px"}}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu"/>
                <Typography variant="h6">
                  News
                </Typography>
              </Toolbar>
            </AppBar>
            <div style={{flex: 10, display: "flex", flexDirection: "row"}}>
              <div style={{display: 'flex', flex: 1, backgroundImage: "linear-gradient(#3274B4, #1E4C7C)", flexDirection: 'column', justifyContent: 'flex-start'}}>
                <List component='nav'>
                  { _.map(MENU_METADATA, (menu: any) =>
                    <ListItem button={true} key={menu['link']} onClick={() => this.handleItemClick(menu['link'])}>
                      <ListItemIcon>
                        {menu['icon']}
                      </ListItemIcon>
                      <ListItemText primary={menu['label']} />
                    </ListItem>
                  )}
                </List>
              </div>
              <div style={{flex: 4, display: 'flex'}}>
                {this.props.children}
              </div>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state: RootState): any {
    return {};
}

export default connect<any, {}, any, RootState>(mapStateToProps)(MenuPage as any);
