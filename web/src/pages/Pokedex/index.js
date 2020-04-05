import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';
import pikachu from '../../assets/pikachu.png';

export default function Pokedex() {
    return (
        <div className="pokedex-container">
            <header>
                <img src={logo} alt="Pokemon Logo" />
            </header>

            <ul>
                <li>
                    <div className="pokemon-image">
                        <img src={pikachu} alt="Pokeon" />
                    </div>
                    <div className="pokemon-name">
                        <strong>Nome: Pikachu</strong>
                    </div>
                    <div className="pokemon-details">
                        <Link className="button" to="/details">Detalhes</Link>
                    </div>
                </li>

                <li>
                    <div className="pokemon-image">
                        <img src={pikachu} alt="Pokeon" />
                    </div>
                    <div className="pokemon-name">
                        <strong>Nome: Pikachu</strong>
                    </div>
                    <div className="pokemon-details">
                        <Link className="button" to="/details">Detalhes</Link>
                    </div>
                </li>

                <li>
                    <div className="pokemon-image">
                        <img src={pikachu} alt="Pokeon" />
                    </div>
                    <div className="pokemon-name">
                        <strong>Nome: Pikachu</strong>
                    </div>
                    <div className="pokemon-details">
                        <Link className="button" to="/details">Detalhes</Link>
                    </div>
                </li>

                <li>
                    <div className="pokemon-image">
                        <img src={pikachu} alt="Pokeon" />
                    </div>
                    <div className="pokemon-name">
                        <strong>Nome: Pikachu</strong>
                    </div>
                    <div className="pokemon-details">
                        <Link className="button" to="/details">Detalhes</Link>
                    </div>
                </li>

            </ul>
        </div>
    );
}