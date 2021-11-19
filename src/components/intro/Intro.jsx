import "./intro.css"
import ProfileImg from "../../imgs/profile.png"
import Scroller from "./Scroller";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My Name Is</h2>
                    <h1 className="i-name">John Doe</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">First Item</div>
                            <div className="i-title-item">Second Item</div>
                            <div className="i-title-item">Third Item</div>
                            <div className="i-title-item">Fourth Item</div>
                        </div>
                    </div>

                    <p className={"i.desc"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin at rutrum augue, ut tempus metus. Phasellus mattis nunc massa,
                        blandit faucibus nulla finibus ultricies. Suspendisse nec velit at nulla
                        accumsan accumsan ut in sapien. Morbi molestie justo ac egestas imperdiet.
                    </p>
                </div>

                <Scroller></Scroller>

            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={ProfileImg} alt="" className="i-img" />
            </div>

            {/*<div className=""></div>*/}
        </div>
    )
}

export default Intro;