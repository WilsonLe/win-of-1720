import React, { useEffect } from 'react';

export default function BaiHatKhoi({ onClose, isFocus }) {

    useEffect(() => {
        return () => {

        }
    }, [])

    return (
        <div style={{height:"100%",width:"100%"}}>
            <embed src="/assets/Yearbook.pdf" width="100%" height="100%" type="application/pdf"></embed>
        </div>
    );
}