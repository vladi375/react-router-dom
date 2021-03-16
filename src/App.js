import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Ex1 from "./components/Ex1";
import Pr1 from "./components/Pr1";
import Pr2 from "./components/Pr2";
import Ex2 from "./components/Ex2";
import Ex3 from "./components/Ex3";
import Pr3 from "./components/Pr3";
import Pr3props from "./components/Pr3-props";
import Pr4 from "./components/Pr4";
import Ex4 from "./components/Ex4";
import Ex5 from "./components/Ex5";
import Ex6 from "./components/Ex6";
import Ex7 from "./components/Ex7";
import ToDoList from "./components/TodoList";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/pr1">Задача на чекбокс</Link>
              </li>
              <li>
                <Link to="/pr2">Задача на плеер</Link>
              </li>
              <li>
                <Link to="/pr3">Задача на loader</Link>
              </li>
              <li>
                <Link to="/pr3-props">Задача на loader с пропсами</Link>
              </li>
              <li>
                <Link to="/pr4">Задача на список ингредиентов</Link>
              </li>
              <li>
                <Link to="/ex1">Задача о форматировании текста с пропсами</Link>
              </li>
              <li>
                <Link to="/ex2">Задача c шрифтом italic (на setState)</Link>
              </li>
              <li>
                <Link to="/ex3">Задача c квадратами (на передачу пропсов)</Link>
              </li>
              <li>
                <Link to="/ex4">
                  Задача на условный рендеринг с помощью тернарного оператора
                </Link>
              </li>
              <li>
                <Link to="/ex5">
                  Задача на выведение повторяющихся компонентов циклом
                </Link>
              </li>
              <li>
                <Link to="/ex6">Задача на условный рендеринг (лоадер)</Link>
              </li>
              <li>
                <Link to="/ex7">Задача на двустороннее связывание</Link>
              </li>
              <li>
                <Link to="/todo-list">Задача на todo-list</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/pr1">
              <Pr1 />
            </Route>
            <Route path="/pr2">
              <Pr2 />
            </Route>
            <Route path="/pr3">
              <Pr3 />
            </Route>
            <Route path="/pr3-props">
              <Pr3props />
            </Route>
            <Route path="/Pr4">
              <Pr4 />
            </Route>
            <Route path="/ex1">
              <Ex1 />
            </Route>
            <Route path="/ex2">
              <Ex2 />
            </Route>
            <Route path="/ex3">
              <Ex3 />
            </Route>
            <Route path="/ex4">
              <Ex4 />
            </Route>
            <Route path="/ex5">
              <Ex5 />
            </Route>
            <Route path="/ex6">
              <Ex6 />
            </Route>
            <Route path="/ex7">
              <Ex7 />
            </Route>
            <Route path="/todo-list">
              <ToDoList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
