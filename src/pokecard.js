import React, { Component } from 'react';
import './pokecard.css'

const POKE_API = 
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number
)

class Pokecard extends Component {
    render() {
        const {name, type, exp, id} = this.props
        let image = `${POKE_API}${padToThree(id)}.png`
        return (
            <div className="pokecard">
                  <div className="each-card">
                    <span>
                      <h5>{ name }</h5>
                      <img src = {image}
                        alt="pokemon"/>
                    </span>
                    <span>
                        <h6>Type: { type }</h6>
                        <p>EXP: { exp }</p>
                    </span>
                  </div> 
            </div>
        );
    }
}

export default Pokecard;