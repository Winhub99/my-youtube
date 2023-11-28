import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import MainContent from './components/MainContent'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watchpage from './components/Watchpage';

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContent/>
      },
      {
        path:"watch",
        element:<Watchpage/>
      }
    ]
  },
])

function App() {
  return (
    <Provider store={store}>
    <div >
     <Head/>
     <RouterProvider router={AppRouter}/>
    </div>
    </Provider>
  );
}

export default App;
