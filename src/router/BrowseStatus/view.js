import { h } from 'hyperapp';

const StatusCodeListItem = (status) => (
  <li>
      <p>{status.code}</p>
      <p>{status.phrase}</p>
      <p>{status.description}</p>
  </li>
)

const StatusCodes = ({ statuses }) => (
  <ul>
    {statuses.map(StatusCodeListItem)}
  </ul>
)

const BrowseStatusView = (state, actions) => ({ match, url }) => (
  <div>
      <h1>Random Status</h1>
      <button onclick={() => actions.getNewCode()}>Get Another Status</button>
      <input autofocus type="text" value={state.codeFilter} oninput={(e) => actions.onFilterChanged(e)}/>        
      <StatusCodes statuses={state.statuses} />
  </div>
)

export default BrowseStatusView;