import React from "react"
import Arrow from "./Arrow";
import Slide from "./Slide";

export default class Carousel extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            disablePreviousArrow: true
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/alijawadi/carousel-json/blocks")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        blocks: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    previousSlide () {
        const { currentImageIndex } = this.state;
        const index = currentImageIndex === 0 ? currentImageIndex : currentImageIndex - 1;
        const disablePreviousArrow = index === 0;

        this.setState({
            currentImageIndex: index,
            disablePreviousArrow,
            disableNextArrow: false
        });
    }

    nextSlide () {
        const lastIndex = this.state.blocks.length - 1;
        const { currentImageIndex } = this.state;
        const index =  currentImageIndex === lastIndex ? currentImageIndex : currentImageIndex + 1;
        const disableNextArrow = index === lastIndex;

        this.setState({
            currentImageIndex: index,
            disableNextArrow,
            disablePreviousArrow: false
        });
    }

    render () {
        const {
            state:{
                blocks,
                currentImageIndex,
                disablePreviousArrow,
                disableNextArrow
            } = {}
        } = this || {};

        /**
         * if the blocks array was defined then read the specific element and display a random image.
         * select a random element based on images array length.
         */
        const exportUrl = () => {
            const images = blocks && blocks[currentImageIndex].images
            return images && images[Math.floor(Math.random() * Math.floor(images.length))]
        }

        return (
            <div className="carousel">
                <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" disabled={disablePreviousArrow} />
                <Slide url={ exportUrl() } />
                <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" disabled={disableNextArrow} />
            </div>
        );
    }
}