import React from "react";
import photos from "../data/photos";

function displayPhotographs() {
    let arr = [];
    let element;
    for (var index = 0; index < photos.length; index++) {
        element = (
            <div>
                <img src={photos[index].image} />
                <br />{photos[index].description}
            </div>
        );
        arr.push(element);
    }
    return arr;
}

export default class Photography extends React.Component {
    render() {
        return <div className="photography">{displayPhotographs()}</div>;
    }
}
