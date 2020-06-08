import React, { Component } from 'react';
import Pokecard from './pokecard'
import './App.css'
  

class Pokedex extends Component {
    render() {
        const { pokecard, exp, isWinner } = this.props
        return(
            <div>
                {isWinner ? <h2 className='title'>Winner!!!!</h2> : <h2 className='title'>YOU LOSE</h2> }
                <p> total experience: {exp}</p>
                <div>
                    <div className='pokedex'>
                        {pokecard.map((p)=>
                            <Pokecard className="eachpokedex" key={p.id} name = { p.name } type ={p.type} exp ={p.base_experience} id= {p.id}/>
                        )}
                    </div>
                    {isWinner ? <p className='title'>THIS HAND WINS</p> : null}                    
                </div>
            </div>
        )
    }
}

export default Pokedex;