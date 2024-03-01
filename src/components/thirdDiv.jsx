
import photo5 from "../assets/images/carrying-case.webp";
import photo6 from "../assets/images/monogram-core.webp";
import photo7 from "../assets/images/slider-module.webp";
import photo8 from "../assets/images/essentials-keys.webp";
import photo9 from "../assets/images/orbiter-module.webp";
import photo10 from "../assets/images/dial-module.webp";
import photo11 from "../assets/images/console-pack-audio.webp";
import photo12 from "../assets/images/console-pack-photo.webp";
import photo13 from "../assets/images/console-pack-video.webp";
import photo14 from "../assets/images/monogram-care.webp";

import photo5hover from "../assets/images/carrying-case-hover.webp";
import photo6hover from "../assets/images/monogram-core-hover.webp";
import photo7hover from "../assets/images/slider-module-hover.webp";
import photo8hover from "../assets/images/essential-keys-hover.webp";
import photo9hover from "../assets/images/orbiter-module-hover.webp";
import photo10hover from "../assets/images/dial-module-hover.webp";
import photo14hover from "../assets/images/monogram-care-hover.webp";

const ThirdDiv = ({isHovered, elementHovered, handleMouseEnter, handleMouseLeave, currency}) => {
  
    return (
    <div className="flex third-div">
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("fifth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "fifth") ? photo5hover : photo5} alt="photo5" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>MONOGRAM CARRYING CASE</h4><p>{currency.slice(0, 1)}59</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("sixth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "sixth") ? photo6hover : photo6} alt="photo6" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>MONOGRAM CORE</h4><p>{currency.slice(0, 1)}159</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("seventh")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "seventh") ? photo7hover : photo7} alt="photo7" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>SLIDER MODULE</h4><p>{currency.slice(0, 1)}159</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("eighth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "eighth") ? photo8hover : photo8} alt="photo8" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>ESSENTIAL KEYS MODULE</h4><p>{currency.slice(0, 1)}59</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("ninth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "ninth") ? photo9hover : photo9} alt="photo9" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>ORBITER MODULE</h4><p>{currency.slice(0, 1)}159</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("tenth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "tenth") ? photo10hover : photo10} alt="photo10" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>DIAL MODULE</h4><p>{currency.slice(0, 1)}129</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/">
                    <img src={photo11} alt="photo11" />
                </a>
                <a href="/">
                    <article className="flex"><h4>CONSOLE PACK: AUDIO</h4><p>{currency.slice(0, 1)}29</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/">
                    <img src={photo12} alt="photo12" />
                </a>
                <a href="/">
                    <article className="flex"><h4>CONSOLE PACK: PHOTO</h4><p>{currency.slice(0, 1)}39</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div >
                <a href="/">
                    <img src={photo13} alt="photo13" />
                </a>
                <a href="/">
                    <article className="flex"><h4>CONSOLE PACK: VIDEO</h4><p>{currency.slice(0, 1)}69</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("fourteenth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "fourteenth") ? photo14hover : photo14} alt="photo14" />
                </a>
                <a href="/">
                    <article className="flex"><h4>MONOGRAM CARE</h4><p>{currency.slice(0, 1)}19 - {currency.slice(0, 1)}129</p><button>SHOP NOW</button></article>
                </a>
            </div>
    </div>
    )
}

export default ThirdDiv;