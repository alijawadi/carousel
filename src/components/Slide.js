const Slide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
    };

    return (
        <div className="image-slide" style={styles}>
            <h1 style={{display: url ? "none" : "block"}}>
                {url ? '' : "Retrieving Data..."}
            </h1>
        </div>
    );
}
export default Slide