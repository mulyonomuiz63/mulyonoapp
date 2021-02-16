import React from "react";
import Call from "./pages/Call";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import IconGrid from "./pages/IconGrid";
import Image from "./pages/Image";
import Navbar from "./pages/Navbar";
import Testimonial from "./pages/Testimonial";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import Tododetail from "./containers/TodoDetail";
// import Tododetailstate from "./containers/TodoDetailstate";
// import Todolist from "./containers/TodoList";
function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route
    //       path="/"
    //       exact
    //       component={() => (
    //         <div>
    //           <Link to={`/todolist`}>Masuk Ke Todo List</Link>
    //         </div>
    //       )}
    //     />
    //     <Route path="/todolist" exact component={Todolist} />
    //     <Route path="/todolist/:id" exact component={Tododetail} />
    //     <Route path="/todo-list" exact component={Tododetailstate} />
    //   </Switch>
    // </Router>
    <div>
      <Navbar />
      <Header />
      <IconGrid />
      <Image />
      <Testimonial />
      <Call />
      <Footer />
    </div>
  );
}

export default App;
