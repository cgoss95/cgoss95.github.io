import React from "react";
import "../style/Homepage.css";

function Text(props) {
    return (
        <div>
            <p>
                Hi! I'm Cecilia. This site is currently being renovated. In the
                mean time, you can check out my recent project that I'm
                currently tweaking, the{" "}
                <a href="http://ceciliagoss.com/color-quiz">Color Quiz</a>.
            </p>
        </div>
    );
}
function CenterStyle(props) {
    return (
        <div className="middle">
            <div className="whitespace" />
            <div className="center">
                <div className="whitespace" />
                <div className="content">
                    {Text()}
                </div>
                <div className="whitespace" />
            </div>
            <div className="whitespace" />
        </div>
    );
}

function displayLinks() {}

export default class Homepage extends React.Component {
    render() {
        return <CenterStyle />;
    }
}
