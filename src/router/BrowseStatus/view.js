import { h } from 'hyperapp';

const styles = {
  statusCodes: {
    borderTop: '1px solid #ccc',
    listStyle: 'none',
    padding: 0
  },
  statusCodeItem: {
    borderBottom: '1px solid #ccc',
  }
}

const StatusCodeListItem = (status) => (
  <li style={styles.statusCodeItem}>
      <p>{status.code} - {status.phrase}</p>
      <p>{status.description}</p>
  </li>
)

const StatusCodes = ({ statuses }) => (
  <ul style={styles.statusCodes}>
    {statuses.map(StatusCodeListItem)}
  </ul>
)

const BrowseStatusView = (state, actions) => ({ match, url }) => (
  <div>
      <button onclick={() => actions.getNewCode()}>Get Another Status</button>
      <input autofocus type="text" value={state.codeFilter} oninput={(e) => actions.onFilterChanged(e)}/>        
      <StatusCodes statuses={state.statuses} />
  </div>
)

export default BrowseStatusView;