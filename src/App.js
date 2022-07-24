import { Component } from "react";
import Appbar from "./components/common/appbar/Appbar";
import Sidebar from "./components/common/sidebar/Sidebar";
import Signin from "./pages/sign-in/Signin";

export default class App extends Component {
  render() {
    return (
        <div className="flex">
          <Sidebar /> {/* sidebar component */}
          <div className="w-full p-7 bg-gray-300 rounded-lg">
            <Appbar/>
            {this.props.section}
          </div>
          {/* pages */}
        </div>
    );
  }
}


