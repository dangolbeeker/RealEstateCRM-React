import redux from 'react-redux';
import actions from '/actions';
import rootReducer from '/reducers';
import thunk from 'redux-thunk';
import App from './App.tsx';
import { configureStore} from '@redux/toolkit';

type ConfiureEnhancersCallback = (
    defaultEnhancers: StoreEnhancer[]
) => StoreEnhancer[]

interface ConfigureStoreOptions<
S = any,
  A extends Action = AnyAction,
  M extends Middlewares<S> = Middlewares<S>
> {

let  reduxDevToolsExtension: Function | undefined = (window as any) .__REDUX_DEVTOOLS_EXTENSION__;
let reduxDevToolsEnhancer: Function | undefined;
if (reduxDevToolsExtension) {
    reduxDevToolsEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__();
}

let composedEnhancers: StoreEnhancer;
if (reduxDevToolsEnhancer) {
    composedEnhancers = compose(
        applyMiddleware(thunk)
    );
}

if (process.env.NODE_ENV !=== 'production') {
    axe(React, ReactDOM, 1000);
}

reducer: Reducer<S,A> | ReducerMapObject<S, A>

const Store = createStore(rootReducer({
    reducer: rootReducer,
    middleware: thunk =>
    getDefaultMiddleware()
    .prepend(

    )
})

