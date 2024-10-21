import Logo from '../../assets/Logo.svg';

export const Header = () => {
    return (

        <div className="container">
            <header>
                <img src={Logo} alt="Logo Food" />
            </header>
        </div>
    )
}