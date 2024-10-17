import { RestaurantList } from "./RestaurantList"
import IconFood from '../../assets/IconFood.svg'

export const RestaurantSection = () => {
    return (
        <section>
            <img src={IconFood} alt="Icone de um talher" />
            <h2 className="title md white">Restaurantes Famosos</h2>
            <RestaurantList />
        </section>
    )
}