import React from 'react';
import {Card} from '../Card/Card';
import './CardList.css';

export const CardList = (props) => (
    <div className="CardList">
        {props.monsters.map(m => <Card key={m.id} monster={m} />)}
    </div>
);