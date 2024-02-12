import Langs from "../Localization/Lokalization";
import "./Hero.scss"


function Hero({lang, setLangs}) {
    return (
        <>
            <main className="main">
                <section className="hero">
                    <div className="container">
                        <div className="hero__item">
                            <h1 className="hero__heading">{Langs[lang].hero.heading}</h1>
                            <p className="hero__text">
                            {Langs[lang].hero.text}
                            </p>
                            <button className="hero__btn" type="button">{Langs[lang].hero.btn}</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hero;