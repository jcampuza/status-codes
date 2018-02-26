import { h, app } from 'hyperapp';
import { location, Link } from "@hyperapp/router";
import './style/index.scss';

import statusCodes from './statusCodes.json';
import Navigation from './components/Navigation';
import Router from './router';

const informationalCodes = statusCodes.filter(statusObject => statusObject.code.endsWith('xx'));
const allStatuses = statusCodes.filter(statusObject => !statusObject.code.endsWith('xx')).sort((a, b) => (parseInt(a.code) - parseInt(b.code)));
const state = {
    location: location.state,
    statuses: allStatuses,
    informational: informationalCodes,
    currentStatus: null,
    codeFilter: '',
};

const actions = {
    location: location.actions,
    getNewCode: () => state => {
        const randomIndex = Math.floor(Math.random() * state.statuses.length);

        return {
            currentStatus: state.statuses[randomIndex],
        };
    },

    onFilterChanged: (e) => state => {
        const value = e.target.value;
        if (!value) return { statuses: allStatuses, codeFilter: value }

        const lowerCaseValue = value.toLowerCase();
        const filteredStatuses = allStatuses.filter((statusObject) => 
                statusObject.code.startsWith(lowerCaseValue) ||
                statusObject.phrase.toLowerCase().includes(lowerCaseValue)
            );
        
        return { statuses: filteredStatuses, codeFilter: value };
    }
};

const appView = (state, actions) => (
    <div>
        <Navigation />

        {Router(state, actions)}
    </div>
);

const main = app(state, actions, appView, document.body);
const unsubscribe = location.subscribe(main.location);