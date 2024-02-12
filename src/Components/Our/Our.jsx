import "./Our.scss"
import OurImages from "../Image/OurImgages.png"
import Langs from "../Localization/Lokalization";

function Our({lang, setLangs}) {
    return (
        <>
            <section className="our">
                <div className="container">

                    <div className="our__bg"></div>
                     <ul className="our__list">
                        <li className="our__item">
                            <img className="our__img" src={OurImages} alt="Img" />
                            <b className="our__str">{Langs[lang].our.heading}</b>
                            <p className="our__p">
                                {Langs[lang].our.text}
                            </p>
                        </li>

                        <li className="our__item">
                            <img className="our__img" src={OurImages} alt="Img" />
                            <b className="our__str">{Langs[lang].our.heading}</b>
                            <p className="our__p">
                                {Langs[lang].our.text}
                            </p>
                        </li>

                        <li className="our__item">
                            <img className="our__img" src={OurImages} alt="Img" />
                            <b className="our__str">{Langs[lang].our.heading}</b>
                            <p className="our__p">
                                {Langs[lang].our.text}
                            </p>
                        </li>

                        <li className="our__item">
                            <img className="our__img" src={OurImages} alt="Img" />
                            <b className="our__str">{Langs[lang].our.heading}</b>
                            <p className="our__p">
                                {Langs[lang].our.text}
                            </p>
                        </li>
                     </ul>
                </div>
            </section>
        </>
    )
}

export default Our;