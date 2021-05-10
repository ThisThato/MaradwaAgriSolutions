import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import TransactionCreate from "./pages/TransactionCreate";
import TransactionList from "./pages/TransactionList";
import UserList from "./pages/UserList";
import InventoryList from "./pages/InventoryList";
import TransactionDetails from "./pages/TransactionDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contact} />
      <Route path="/addtransaction" component={TransactionCreate} />
      <Route exact path="/transactions" component={TransactionList} />
      <Route path="/inventory" component={InventoryList} />
      <Route path="/transactions/:id" component={TransactionDetails} />
      <Route exact path="/users" component={UserList} />
    </Router>
  );
};

export default App;
