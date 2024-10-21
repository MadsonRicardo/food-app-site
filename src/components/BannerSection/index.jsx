import ImgFoods from '../../assets/ImgFoods.png';

export const BannerSection = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <h1 className='title lg black'>Descubra o melhor <span className='red'>aplicativo de comida</span></h1>
                    <p className='paragraphy black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.</p>
                    <a className='btn red' href="#">Saiba mais</a>
                </div>
                <img src={ImgFoods} alt="Três imagens de comidas" />
            </div>

        </section>
    )
}