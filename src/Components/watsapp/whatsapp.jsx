import "./whatsapp.css"
import React from "react";
export default function Wsp() {
    return (
        <a className="btn-wsp" href="https://api.whatsapp.com/send?phone=593999545984" target={"_blank"}
        rel="noopener noreferrer" aria-label="Whatssap">
            <i className="lab la-whatsapp"></i>
        </a>
    );
}