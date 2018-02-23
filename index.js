import { h, app } from 'hyperapp';
import statusCodes from './statusCodes.json';

const informationalCodes = statusCodes.filter(statusObject => statusObject.code.endsWith('xx'));
const allStatuses = statusCodes.filter(statusObject => !statusObject.code.endsWith('xx')).sort((a, b) => (parseInt(a.code) - parseInt(b.code)));

const state = {
    statuses: allStatuses,
    informational: informationalCodes,
    currentStatus: null,
    codeFilter: '',
};

const actions = {
    getNewCode: () => state => {
        const randomIndex = Math.floor(Math.random() * state.statuses.length);

        return {
            currentStatus: state.statuses[randomIndex],
        };
    },

    onFilterChanged: (e) => state => {
        const value = e.target.value;
        console.log(value);
        if (!value) return { statuses: allStatuses, codeFilter: value }

        const filteredStatuses = allStatuses.filter((statusObject) => statusObject.code.startsWith(value));
        return { statuses: filteredStatuses, codeFilter: value };
    }
};

const renderStatusCodeItem = (status) => (
    <div>
        <p>{status.code}</p>
        <p>{status.phrase}</p>
        <p>{status.description}</p>
    </div>
)

const view = (state, actions) => (
    <div>
        <h1>Random Status</h1>
        <button onclick={() => actions.getNewCode()}>Get Another Status</button>
        <input autofocus type="text" value={state.codeFilter} oninput={(e) => actions.onFilterChanged(e)}/>
        
        {state.statuses.map(renderStatusCodeItem)}
    </div>
);

app(state, actions, view, document.getElementById('root'));