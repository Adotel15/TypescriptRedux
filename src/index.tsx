import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from "react-redux"
import { postReducer } from './redux/reducerPost';
import { Post, PostAction, DispatchType } from './types'
import { legacy_createStore as createStore , Store } from "redux"


const store: Store<Post[], PostAction> & {dispatch: DispatchType} = createStore(postReducer)


const root = ReactDOM.createRoot(  document.getElementById('root') as HTMLElement );

root.render(
    <Provider store = {store}>
      <App />
    </Provider>
);

