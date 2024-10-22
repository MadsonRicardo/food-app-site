import IconMobile from '../../assets/IconMobile.svg';
import styles from "./style.module.css"

export const AboutSection = () => {
    return (
        <section className={`${styles.aboutSection} section-padding`}>
            <div className="container">
                <div className={styles.flexBox}>
                    <div>
                        <img src={IconMobile} alt="Ícone Mobile" />
                        <h2 className="title lg black">
                            Sobre o <span className="red">aplicativo</span>
                        </h2>
                    </div>
                    <p className="paragraphy black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
                        tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet
                        erat elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies,
                        non imperdiet erat elementum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem
                        eu quam ultricies, non imperdiet erat elementum. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper.
                        Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.
                    </p>
                </div>
            </div>
        </section>
    );
};