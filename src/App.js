import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import GymList from "./Components/GymList";
import ClassList from "./Components/ClassList";
import { useSelector } from "react-redux";
import ButtonAppBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import TypeList from "./Components/TypeList";
import TypeDetail from "./Components/TypeDetail";
import SignIn from "./Components/SignIn";
import ClassDetail from "./Components/ClassDetail";
import GymForm from "./Components/GymForm";
import TypeForm from "./Components/TypeForm";
import GymDetail from "./Components/GymDetail";

function App() {
  const gyms = useSelector((state) => state.gymReducer.gym);
  const classes = useSelector((state) => state.classReducer.clas);
  const types = useSelector((state) => state.typeReducer.type);
  console.log(types);
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <Switch>
          <Route path="/gym/:gymSlug/type/new">
            <TypeForm />
          </Route>
          <Route path="/gym/new">
            <GymForm />
          </Route>
          <Route path="/gym/:gymSlug">
            <GymDetail />
          </Route>
          <Route path="/class/:classSlug">
            <ClassDetail />
          </Route>
          <Route path="/type/:typeSlug">
            <TypeDetail />
          </Route>
          <Route path="/type">
            <TypeList types={types} />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/class">
            <ClassList classes={classes} />
          </Route>
          <Route path="/gym">
            <GymList gyms={gyms} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
