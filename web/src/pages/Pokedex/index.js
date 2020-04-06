import React from 'react';

import api from '../../services/api';
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
                    <img src={pikachu} alt="Pokeon" />
                    <strong>Pikachu</strong>
                    <button>Detalhes</button>
                </li>

                <li>
                    <img src={pikachu} alt="Pokeon" />
                    <strong>Pikachu</strong>
                    <button>Detalhes</button>
                </li>

                <li>
                    <img src={pikachu} alt="Pokeon" />
                    <strong>Pikachu</strong>
                    <button>Detalhes</button>
                </li>

                <li>
                    <img src={pikachu} alt="Pokeon" />
                    <strong>Pikachu</strong>
                    <button>Detalhes</button>
                </li>

                <li>
                    <img src={pikachu} alt="Pokeon" />
                    <strong>Pikachu</strong>
                    <button>Detalhes</button>
                </li>

                <li>
                    <img src={pikachu} alt="Pokeon" />
                    <strong>Pikachu</strong>
                    <button>Detalhes</button>
                </li>

                <li>
                    <img src={pikachu} alt="Pokeon" />
                    <strong>Pikachu</strong>
                    <button>Detalhes</button>
                </li>

                <li>
                    <img src={pikachu} alt="Pokeon" />
                    <strong>Pikachu</strong>
                    <button>Detalhes</button>
                </li>
            </ul>
        </div>
    );
}