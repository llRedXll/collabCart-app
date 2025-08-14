import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List';
import './App.css';

const App = () => {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const response = await fetch('/api/lists');
                const data = await response.json();
                setLists(data);
            } catch (error) {
                console.error('Error fetching lists:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLists();
    }, []);

    return (
        <Router>
            <div className="app">
                <h1>CollabCart</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <Switch>
                        <Route path="/" exact>
                            <h2>Your Lists</h2>
                            {lists.length > 0 ? (
                                lists.map(list => (
                                    <List key={list.id} list={list} />
                                ))
                            ) : (
                                <p>No lists available. Create a new list!</p>
                            )}
                        </Route>
                        <Route path="/list/:id" component={List} />
                    </Switch>
                )}
            </div>
        </Router>
    );
};

export default App;