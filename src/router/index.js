import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';

import BrowseStatusView from './BrowseStatus/view';
import AboutView from './About/view';

const styles = {
  main: {
    width: '85%',
    margin: '0 auto',
  }
}

const Router = (state, actions) => (
  <main style={styles.main}>
    <Route path="/" render={BrowseStatusView(state, actions)} />
    <Route path="/about" render={AboutView} />
  </main>
)

export default Router;