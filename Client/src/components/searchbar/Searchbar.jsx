import React, { useState } from "react";
import style from "./searchbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logout from "../assets/logout.png";

export default function Searchbar(props) {
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const handleChange = (event) => {
        setId(event.target.value);
    };

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            // 13 is the code for the Enter key
            props.onSearch(id);
            setId("");
        }
    };

    return (
        <div className={style.searchbarcontainer}>
            <button className={style.blueButton}>
                <div className={style.logout}>
                    <img
                        onClick={() => navigate("/home")}
                        src={logo}
                        alt="Logo"
                        className={style.logo}
                    />
                    Home
                </div>
            </button>

            <button className={style.blueButton}>
                <button className={style.innerbutton}>
                    <NavLink
                        className={style.navlink}
                        to="/about">
                        {" "}
                        About{" "}
                    </NavLink>
                </button>
            </button>

            <button className={style.goldenButton}>
                <button className={style.innerbutton}>
                    <NavLink
                        className={style.navlink}
                        to="/favorites">
                        {" "}
                        Favs{" "}
                    </NavLink>
                </button>
            </button>

            <button className={style.button}>
                <button
                    onClick={() => {
                        props.onSearch(
                            Math.floor(Math.random() * (826 - 1 + 1)) + 1
                        );
                        setId("");
                    }}
                    className={style.innerbutton}>
                    <NavLink
                        className={style.navlink}
                        to="/home">
                        {" "}
                        Random
                    </NavLink>
                </button>
            </button>

            <input
                type="search"
                placeholder="  🔍  ID Number"
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                value={id}
                className={style.searchbar}
            />

            <button className={style.button}>
                <button
                    className={style.innerbutton}
                    onClick={() => {
                        props.onSearch(id);
                        setId("");
                    }}>
                    <NavLink
                        className={style.navlink}
                        to="/home">
                        {" "}
                        Add
                    </NavLink>
                </button>
            </button>

            <button className={style.button}>
                <div className={style.logout}>
                    <img
                        onClick={props.logout}
                        src={logout}
                        alt="Logo"
                        className={style.logo}
                    />
                    LogOut
                </div>
            </button>
        </div>
    );
}
