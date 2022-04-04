import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Nav from "./Components/Nav";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Home from "./Pages/Home";
import FooterPage from "./Pages/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
function App() {
  const { Content, Footer } = Layout;

  return (
    <div className="App">
      <Router>
        <Layout hasSider={true}>
          <Nav />
          <Layout>
            <Content>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/page1" exact>
                  <Page1 />
                </Route>
                <Route path="/page2" exact>
                  <Page2 />
                </Route>
                <Route path="/page3" exact>
                  <Page3 />
                </Route>
                <Route path="/page4" exact>
                  <Page4 />
                </Route>
                <Route path="/page5" exact>
                  <Page5 />
                </Route>
                <Route path="/page6" exact>
                  <Page6 />
                </Route>
                <Route path="/page7" exact>
                  <Page7 />
                </Route>
                <Route path="/page8" exact>
                  <Page8 />
                </Route>
                <Route path="/QMSystem" exact></Route>
                <Route path="*" exact></Route>
              </Switch>
            </Content>
            {/* <Footer style={{ padding: "0px", height: "48px" }}>
              <FooterPage />
            </Footer> */}
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
