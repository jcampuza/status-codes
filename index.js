import { h, app } from 'hyperapp';
import statusCodes from './statusCodes.json';

const informationalCodes = statusCodes.filter(statusObject => statusObject.code.endsWith('xx'));
const allStatuses = statusCodes.filter(statusObject => !statusObject.code.endsWith('xx'))

const state = {
    statuses: allStatuses,
    informational: informationalCodes,
    currentStatus: null
};

const actions = {
    getNewCode: () => state => {
        const randomIndex = Math.floor(Math.random() * state.statuses.length);
        
        return {
            currentStatus: state.statuses[randomIndex],
        };
    }
};

const view = (state, actions) => (
    <div>
        <h1>Random Status</h1>
        <button onclick={() => actions.getNewCode()}>Get Another Status</button>

        {state.currentStatus && 
            <div>
                <p>{state.currentStatus.code}</p>
                <p>{state.currentStatus.phrase}</p>
                <p>{state.currentStatus.description}</p>
            </div>
        }
    </div>
);

app(state, actions, view, document.getElementById('root'));