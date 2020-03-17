import React from "react";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import { DatePicker, message, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Carousel, Radio } from "antd";
class App extends React.Component {
  state = {
    date: null,
    dotPosition: "top"
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };

  handlePositionChange = ({ target: { value: dotPosition } }) =>
    this.setState({ dotPosition });

  render() {
    const { date, dotPosition } = this.state;
    return (
      <MuiThemeProvider>
        <Navbar />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <div style={{ width: 400, margin: "100px auto" }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
          </div>
        </div>
        <div>
          <Carousel dotPosition={dotPosition}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
        <Footer
          columns={[
            {
              icon: (
                <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
              ),
              title: "Second",
              url: "https://yuque.com",
              description: "知识创作与分享工具",
              openExternal: true
            },
            {
              icon: (
                <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
              ),
              title: "Main",
              url: "https://yuque.com",
              description: "知识创作与分享工具",
              openExternal: true
            },
            {
              icon: (
                <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
              ),
              title: "Main",
              items: [
                {
                  title: "Ant Design Pro",
                  url: "www.abelemun.com",
                  openExternal: true
                },
                {
                  title: "Ant Design Pro",
                  url: "www.abelemun.com",
                  openExternal: true
                }
              ],
              url: "https://yuque.com",
              description: "知识创作与分享工具",
              openExternal: true
            }
          ]}
          bottom="Made with ❤️ by Abel Emun"
        />
      </MuiThemeProvider>
    );
  }
}
export default App;
// function App() {
//   return (
//     <MuiThemeProvider>
//       <Navbar />
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>

//           <DatePicker />
//           <Button type="primary" style={{ marginLeft: 8 }}>
//             Primary Button
//           </Button>
//         </header>
//       </div>
//     </MuiThemeProvider>
//   );
// }

// export default App;
