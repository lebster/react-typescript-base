import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import * as React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component<{}> {

    public render() {
        return (
            <Drawer
                variant='permanent'
            >
                <Divider></Divider>
                <List>
                    <div>
                        <ListItem button>
                            <ListItemText primary='Dashboard'></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary='Settings'></ListItemText>
                        </ListItem>
                    </div>
                </List>
                <Divider></Divider>
                {/* <ul>
                <li><Link to='/'>Dashboard</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
            </ul> */}
            </Drawer>
        )
    }
}

export { Sidebar }
