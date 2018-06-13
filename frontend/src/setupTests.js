import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
global.mockStore = configureStore(middlewares);