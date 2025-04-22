const ImageDisplay = () => (
    <div>
        <p>Public:</p>
        <img src="./public/Images/cat.jpg" width="200" />

        <p>Src:</p>
        <img src="./src/Images/wallpaper.png" width="200" />
    </div>
);

ReactDOM.render(<ImageDisplay />, document.getElementById("main_div"));
