import style from "./App.module.css";
import Cards from "./components/cards/Cards.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites";
import Detail from "./components/detail/Detail.jsx";
import About from "./components/about/About.jsx";
import Nav from "./components/nav/Nav.jsx";
import Error from "./components/error/Error.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:3001";
function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;
    const [characters, setCharacters] = useState([]);
    const [access, setAccess] = useState(false);
    const EMAIL = "rick@morty.app";
    const PASSWORD = "Henry.1";

    const onSearch = (id) => {
        axios(`/rickandmorty/character/${id}`).then(({ data }) => {
            if (!data.name) {
                window.alert("¡No hay personajes con este ID!");
            } else {
                setCharacters((oldChars) => [data, ...oldChars]);
            }
        });
    };

    useEffect(() => {
        !access && navigate("/");
    }, [access]);

    function login(userData) {
        const { email, password } = userData;
        const URL = "http://localhost:3001/rickandmorty/login/";
        axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
            const { access } = data;
            setAccess(data);
            access && navigate("/home");
        });
    }

    const logout = () => {
        alert("session finished");
        setAccess(false);
        navigate("/");
    };

    const onClose = (id) => {
        const filteredChars = characters.filter(
            (character) => character.id !== id
        );
        setCharacters(filteredChars);
    };

    return (
        <div className={style.App}>
            {path !== "/" && (
                <Nav
                    logout={logout}
                    onSearch={onSearch}
                />
            )}

            <Routes>
                <Route
                    path="/home"
                    element={
                        <Cards
                            characters={characters}
                            onClose={onClose}
                        />
                    }
                />

                {path !== "/" &&
                    path !== "/home" &&
                    path !== "/about" &&
                    !path.startsWith("/detail") &&
                    path !== "/favorites" && <Error />}

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/detail/:id"
                    element={<Detail characters={characters} />}
                />

                <Route
                    path="/"
                    element={<Form login={login} />}
                />

                <Route
                    path="/favorites"
                    element={<Favorites />}
                />
            </Routes>
        </div>
    );
}
export default App;
