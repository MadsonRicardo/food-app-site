import { RestaurantList } from "./RestaurantList"
import IconFood from '../../assets/IconFood.svg'
import styles from "./style.module.css";

export const RestaurantSection = () => {
    return (
       <section className={`${styles.restaurantSection} section-green section-padding`}>
          <div className="container">
             <img src={IconFood} alt="Ícone Restaurante" />
             <h2 className="title white md">Restaurantes famosos</h2>
             <RestaurantList />
          </div>
       </section>
    );
 };