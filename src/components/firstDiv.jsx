
import photo1 from "../assets/images/mini-console.webp";
import photo1hover from "../assets/images/mini-console-hover.webp";
import photo2 from "../assets/images/audio-console.webp";
import photo2hover from "../assets/images/audio-console-hover.webp";
import photo3 from "../assets/images/photo-console.webp";
import photo3hover from "../assets/images/photo-console-hover.webp";
import photo4 from "../assets/images/video-console.webp";
import photo4hover from "../assets/images/video-console-hover.webp";

const FirstDiv = ({isHovered, elementHovered, handleMouseEnter, handleMouseLeave, currency}) => {

    return (
            <div className="first-div">
                <div className="mini-audio flex">
                    <div>
                        <a href="/" 
                            onMouseEnter={() => handleMouseEnter("first")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={(isHovered && elementHovered === "first") ? photo1hover : photo1} alt="photo1" />
                        </a>
                        <a href="/">
                            <span>PRE-ORDER</span>
                            <article className="flex"><h4>MINI CONSOLE</h4><p>{currency.slice(0, 1)}249</p><button>SHOP NOW</button></article>
                            <p>Ideal for everyday shortcuts. Adaptable to any workflow.</p>
                        </a>   
                    </div>
                    <div>
                        <a href="/"
                            onMouseEnter={() => handleMouseEnter("second")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={(isHovered && elementHovered === "second") ? photo2hover : photo2} alt="photo2" />
                        </a>
                        <a href="/">
                            <span>PRE-ORDER</span>
                            <article className="flex"><h4>AUDIO CONSOLE</h4><p>{currency.slice(0, 1)}499</p><button>SHOP NOW</button></article>
                            <p>Ideal for music & audio. Adaptable to any workflow.</p>
                        </a>
                    </div>
                </div>

                <div className="photo-video flex">
                    <div>
                        <a href="/"
                            onMouseEnter={() => handleMouseEnter("third")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={(isHovered && elementHovered === "third") ? photo3hover : photo3} alt="photo3" />
                        </a>
                        <a href="/">
                            <span>PRE-ORDER</span>
                            <article className="flex"><h4>PHOTO CONSOLE</h4><p>{currency.slice(0, 1)}599</p><button>SHOP NOW</button></article>
                            <p>Ideal for photo & video. Adaptable to any workflow.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/"
                            onMouseEnter={() => handleMouseEnter("fourth")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={(isHovered && elementHovered === "fourth") ? photo4hover : photo4} alt="photo4" />
                        </a>
                        <a href="/">
                            <span>PRE-ORDER</span>
                            <article className="flex"><h4>VIDEO CONSOLE</h4><p>{currency.slice(0, 1)}899</p><button>SHOP NOW</button></article>
                            <p>Ideal for video & film. Adaptable to any workflow.</p>
                        </a>
                    </div>
                </div>
            </div>
    )
}
export default FirstDiv;