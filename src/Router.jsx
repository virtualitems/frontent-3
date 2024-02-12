import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/**
 * @description 
 * @param {Object} props
 * @returns {JSX.Element}
 */
function Router(props) {

  const routes = props.routes;

  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.component}
              />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}


export default Router;
