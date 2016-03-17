import Reflux from 'reflux';
import DocumentActions from '../actions/documentAction'

var localStorageKey = "fmis-document-state";

export default Reflux.createStore({
    listenables: [DocumentActions],
    onTriggerHeader() {
        this.updateStatus('header');
        this.trigger(this.docStatus);
    },
    onTriggerError() {
        this.updateStatus('error');
        this.trigger(this.docStatus);

    }, onTriggerTotal() {
        this.updateStatus('total');
        this.trigger(this.docStatus);
    }, onTriggerSubidy() {
        this.updateStatus('subsidy');
        this.trigger(this.docStatus);
    },

    updateStatus(status) {
        const showHeader = !!this.docStatus.showHeader;
        const showError = !!this.docStatus.showError;
        const showTotal = !!this.docStatus.showTotal;
        const showSubsidy = !!this.docStatus.showSubsidy;
        _.assign(this.docStatus, { showHeader: status === 'header' ? !showHeader : false, showError: status === 'error' ? !showError : false, showTotal: status == 'total' ? !showTotal : false, showSubsidy: status === 'subsidy' ? !showSubsidy : false });
       localStorage.setItem(localStorageKey, JSON.stringify(this.docStatus));
    },

    docStatus: {
        showHeader: true,
        showError: false,
        showTotal: false,
        showSubsidy: false
    }
})