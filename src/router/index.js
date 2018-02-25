import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';

import BrowseStatusView from './BrowseStatus/view';
import AboutView from './About/view';

const Router = (state, actions) => (
  <div>
    <Route path="/" render={BrowseStatusView(state, actions)} />
    <Route path="/about" render={AboutView} />
  </div>
)

export default Router;