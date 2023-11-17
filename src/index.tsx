import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {reviewPages} from './mocks/reviewPages';
import {video} from './mocks/video';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFilmsAction, fetchPromoFilmAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        reviews={reviewPages}
        videoPlayer={video}
      />
    </Provider>
  </React.StrictMode>
);
