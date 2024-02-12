import "./Header.scss"
import HdrLogo from "../Image/CofeLogo.svg"
import Langs from "../Localization/Lokalization"


function Header({lang, setLangs}) {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a className="header__link" href="#link">
                        <img src={HdrLogo} alt="HeaderLogo"/>
                    </a>

                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a className="nav__link" href="#link">
                                    {Langs[lang].hdr.nav.link1}
                                </a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="#link">
                                {Langs[lang].hdr.nav.link2}
                                </a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="#link">
                                {Langs[lang].hdr.nav.link3}
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <select className="header__select" value={lang} onChange={(evt) => setLangs(evt.target.value)}>
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
            </header>
        </>
    )
}

export default Header