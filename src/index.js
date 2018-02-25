import { h, app } from 'hyperapp';
import { location, Link } from "@hyperapp/router";
import statusCodes from './statusCodes.json';
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
        console.log(value);
        if (!value) return { statuses: allStatuses, codeFilter: value }

        const filteredStatuses = allStatuses.filter((statusObject) => statusObject.code.startsWith(value));
        return { statuses: filteredStatuses, codeFilter: value };
    }
};

const Navigation = (state) => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/browse">Browse</Link>
            </li>
            <li>
                <Link to="/guess">Guess</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
)

const view = (state, actions) => (
    <div>
        <Navigation />

        {Router(state, actions)}
    </div>
);

const main = app(state, actions, view, document.body);
const unsubscribe = location.subscribe(main.location);