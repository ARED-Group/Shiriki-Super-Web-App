// import React from 'react';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import './App.css';
// import { I18nextProvider } from 'react-i18next';
// import './Components/i18n'; 
// import AppRoutes from './Routes/routes';

// function App() {
//   return (
//     <div className="App bg-[#002D74]">
//       <BrowserRouter> {/* Wrap Routes inside BrowserRouter */}
//         <AppRoutes /> {/* This renders the  main routes */}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './Components/i18n';
import AppRoutes from './Routes/routes';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App bg-[#002D74]">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </I18nextProvider>
  );
}

export default App;