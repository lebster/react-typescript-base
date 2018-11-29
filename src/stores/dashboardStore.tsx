import {action, decorate, observable } from 'mobx'
import { IOffer } from 'models/IOffer'

export interface IDashboardStore {
    offer: IOffer,
    updateMsrp: (msrp: number) => void,
}

export class DashboardStore {
    // @observable
    public offer: IOffer = {id: null, msrp: 0, maxMsrp: 30000};

    // @action
    public updateMsrp(msrpIn: number) {
        this.offer = {...this.offer, msrp: msrpIn};
    }
}

decorate( DashboardStore, {
    offer: observable,
    updateMsrp: action,
})

export default new DashboardStore();
