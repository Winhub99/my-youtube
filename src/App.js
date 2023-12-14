import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import MainContent from './components/MainContent'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watchpage from './components/Watchpage';
import UseRefPrac from './components/concepts/UseRefPrac';
import InfinateScrollExample from './components/concepts/InfinateScrollExample';

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
      },
      {
        path:"demo",
        element:<UseRefPrac/>
      },{
        path:"scroll",
        element:<InfinateScrollExample/>
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
