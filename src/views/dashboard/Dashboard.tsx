import {Button} from 'components/Button'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { IDashboardStore} from 'stores/dashboardStore'
import styles from './dashboard.module.scss'

interface IDashboardProps {
    dashboardStore: IDashboardStore,
}

// @inject('dashboardStore')
// @observer
class DashboardComponent extends React.Component<IDashboardProps> {

    public render() {
        return (
            <div>
                <div>{JSON.stringify(styles)}</div>
                <h1>Hello chicken</h1>
                <Button onClick={this.handleClick}>click</Button>
                <div className={styles.blah}>{this.props.dashboardStore.offer.msrp}</div>
                {/* <div>{JSON.stringify(this.props)}</div> */}
            </div>
        )
    }

    private handleClick = () => {
        this.props.dashboardStore.updateMsrp(this.props.dashboardStore.offer.msrp + 100);
    }

}

// const Dashboard = DashboardComponent;

const Dashboard = inject('dashboardStore')(observer(DashboardComponent))

export { Dashboard }
