import React from 'react'
function Surprise( {onClose, isFocus}) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
        >
            <iframe
                src="https://goodbye-1720.now.sh/"
                frameBorder="0"
                title="Surprise!"
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
            />
            {!isFocus && (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                    }}
                />
            )}
        </div>
    );
}
export default Surprise;