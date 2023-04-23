import Card from '../card/Card';
import style from './cards.module.css';

import { NavLink } from 'react-router-dom';
export default function Cards({characters, onClose}) {
   return (
      <div className={style.cards}>{
            characters.map(({id,name,species,gender,image,origin,status})=>{
                  return (
                     <div>
                        <Card
                           key={id} 
                           id={id}
                           name={name} 
                           species={species} 
                           gender={gender} 
                           image={image} 
                           origin={origin.name} 
                           status={status}
                           onClose={onClose}
                        />
                     </div>
                     
                  )
               }
            )
         }
      </div>
   );
}

