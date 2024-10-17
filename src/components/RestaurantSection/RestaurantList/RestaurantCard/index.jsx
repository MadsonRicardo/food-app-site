export const RestaurantCard = ({ restaurant }) => {
    return (
        <li>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3 className="title white sm">{restaurant.name}</h3>
            <p className="paragrapy black">{restaurant.description}</p>
        </li>
    )
}