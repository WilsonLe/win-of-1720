import React, { useEffect } from 'react';

export default function BaiHatKhoi({ onClose, isFocus }) {

    useEffect(() => {
        return () => {
            console.log("aaa")
        }
    }, [])

    return (
        <div style={{ background: "white", height: "100%", width: "auto" }}>
            <iframe title="#CBGRD" width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/879606343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div style={{"fontSize":"10px","color":"#cccccc","lineBreak":"anywhere","wordBreak":"normal","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","fontFamily":"Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","fontWeight":"100"}}><a href="https://soundcloud.com/hai-kh-ng-m-t-b-y" title="17: /một • bảy • hai • không/" target="_blank" style={{"color":"#cccccc","textDecoration":"none"}}>17: /một • bảy • hai • không/</a> · <a href="https://soundcloud.com/hai-kh-ng-m-t-b-y/c-bao-gi-r-i-i" title="Có Bao Giờ Rời Đi?" target="_blank" style={{"color":"#cccccc","textDecoration":"none"}}>Có Bao Giờ Rời Đi?</a></div>
        </div>
    );
}
