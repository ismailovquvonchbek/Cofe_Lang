import Langs from "../Localization/Lokalization";
import "./Ani.scss"

function Ani({ lang, setLangs }) {
    return (
        <>
            <section className="ani">
                <div className="container">
                    <h3 className="ani__heading">{Langs[lang].ani.headBig}</h3>

                    <div className="ani__circles">
                        <span className="ani__cirl"></span>
                        <span className="ani__cirl cor1"></span>
                        <span className="ani__cirl cor2"></span>
                    </div>

                    <ul className="ani__list">
                        <li className="ani__item">
                            <h4 className="ani__hoding">01</h4>
                            <h5 className="ani__bool">{Langs[lang].ani.head1}</h5>
                            <p className="ani__text">
                                {Langs[lang].ani.text1}
                            </p>
                        </li>

                        <li className="ani__item">
                            <h4 className="ani__hoding">02</h4>
                            <h5 className="ani__bool">{Langs[lang].ani.head2}</h5>
                            <p className="ani__text">
                                {Langs[lang].ani.text2}
                            </p>
                        </li>

                        <li className="ani__item">
                            <h4 className="ani__hoding">03</h4>
                            <h5 className="ani__bool">{Langs[lang].ani.head3}</h5>
                            <p className="ani__text">
                                {Langs[lang].ani.text3}
                            </p>
                        </li>
                    </ul>

                    <button className="hero__btn" type="button">{Langs[lang].ani.btn}</button>
                </div>
            </section>
        </>
    )
}

export default Ani;