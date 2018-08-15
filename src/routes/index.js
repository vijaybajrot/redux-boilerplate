import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import todoRoutes from './todos';

const AddTodoComponent = (props) => {
    return <h2>Add Todo</h2>;
};

const ListTodosComponent = (props) => {
    return <h2>List Todos</h2>;
};

const defautRoutes = [
    {
        path: '/',
        component: ListTodosComponent
    },
    {
        path: '/add',
        component: AddTodoComponent
    }
];

const allRoutes = [
    ...defautRoutes,
    ...todoRoutes
];


export default class Router extends Component {
    render() {
        return (
            <Switch>
                {
                    allRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} component={route.component} />
                    })
                }
            </Switch>
        );
    }
}