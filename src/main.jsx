
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider, createTheme } from '@mantine/core';
import { store,persistor } from './lib/Redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from "react-redux"

const theme = createTheme({


});

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider theme={theme} withGlobalStyles
    withNormalizeCSS>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>




  </MantineProvider>
);


// const Main = () => {


//   return (
//     <MantineProvider>
//       <App />
//     </MantineProvider>
//   )
// }


// ReactDOM.createRoot(document.getElementById('root')).render(<Main />)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
