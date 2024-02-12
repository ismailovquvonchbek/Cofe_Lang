import "./Maps.scss"
import MapsImg from "../Image/Shape.png"
import Langs from "../Localization/Lokalization";


function Maps({ lang, setLangs }) {
    return (
        <>
            <section className="maps">
                <div className="container">
                    <div className="maps__info">
                        <h3 className="maps__heading">{Langs[lang].why.headBig}</h3>
                        <p className="maps__text">
                            {Langs[lang].why.textBig}
                        </p>
                    </div>

                    <ul className="maps__list">
                        <li className="maps__item">
                            <img className="maps__img" src={MapsImg} alt="img" />
                            <h4 className="maps__head">
                                {Langs[lang].why.heading}
                            </h4>
                            <p className="maps__p">
                                {Langs[lang].why.text}
                            </p>
                        </li>

                        <li className="maps__item">
                            <img className="maps__img" src={MapsImg} alt="img" />
                            <h4 className="maps__head">
                                {Langs[lang].why.heading}
                            </h4>
                            <p className="maps__p">
                                {Langs[lang].why.text}
                            </p>
                        </li>

                        <li className="maps__item">
                            <img className="maps__img" src={MapsImg} alt="img" />
                            <h4 className="maps__head">
                                {Langs[lang].why.heading}
                            </h4>
                            <p className="maps__p">
                                {Langs[lang].why.text}
                            </p>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}

export default Maps;