import { RestaurantList } from "./RestaurantList"
import IconFood from '../../assets/IconFood.svg'

export const RestaurantSection = () => {
    return (
        <section>
            <div className="container">
                <img src={IconFood} alt="Icone de um talher" />
                <h2 className="title md white">Restaurantes Famosos</h2>
                <RestaurantList />
            </div>
        </section>
    )
}