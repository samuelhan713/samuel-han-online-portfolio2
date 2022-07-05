import React from "react";
import './progressBar.css';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const progress = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    return (
        <div className="progressbar">
            <div style={progress}>
                <span className="labelstyle">{`${completed}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar;