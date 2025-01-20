import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                key="home"
                category="general"
                setProgress={setProgress}
                pageSize={pageSize}
                country="us"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                key="business"
                setProgress={setProgress}
                category="business"
                pageSize={pageSize}
                country="us"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                key="sports"
                setProgress={setProgress}
                category="sports"
                pageSize={pageSize}
                country="us"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                key="entertainment"
                setProgress={setProgress}
                category="entertainment"
                pageSize={pageSize}
                country="us"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                key="health"
                setProgress={setProgress}
                category="health"
                pageSize={pageSize}
                country="us"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                key="science"
                setProgress={setProgress}
                category="science"
                pageSize={pageSize}
                country="us"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                key="technology"
                setProgress={setProgress}
                category="technology"
                pageSize={pageSize}
                country="us"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
