import Searchbar from "../searchbar/Searchbar.jsx"
import style from './nav.module.css';
export default function Nav(props) {
   return (
      <div className={style.nav}>
         <Searchbar  logout={props.logout}  onSearch={props.onSearch}/>
      </div>
   );
}