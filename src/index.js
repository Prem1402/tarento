// import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { configureStore, history } from './store/configureStore'
// import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
// import App from './containers/app'


// Other Imports
import * as registerServiceWorker from './serviceWorker';
import AppContainer from './container/AppContainer'
// const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route path="/" component={AppContainer} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker.register()