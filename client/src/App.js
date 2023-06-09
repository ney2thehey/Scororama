import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Comopnents Section
import Navbar from './components/Navbar';

//// Pages Section
import Home from './pages/Home';
import Homeex from './pages/Homeex';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Profile1 from './pages/Profile1';
import Table from './components/DataTable';
import CbG from './pages/Deuteranopia';
import CbRG from './pages/Deuteranomly_master';
import CbR from './components/DataTable';


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});


function App() {

  return (
    <>
    <ApolloProvider client={client}>
   <Router>
    <Navbar />
    <Switch>
    <Route path="/profile1" component={Profile1} />
    <Route path="/profile" component={Profile} />
    <Route path="/cbrg" component={CbRG}/>
    <Route path="/cbg" component={CbG}/>
    <Route path="/cbr" component={CbR}/>
      <Route path="/home" component={Homeex}/>
      <Route path="/faq" component={Faq} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={Homeex}/>
      <Route path="/table" component={Table}/>
      
            
   
    </Switch>
   </Router>
   </ApolloProvider>
    </>
  );
}

export default App;

{/* <Route path="/profile" element={Profile} /> */}
