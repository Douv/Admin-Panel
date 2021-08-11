import React from 'react';
import "./topbar.css";
import {Language, NotificationsNone, Settings} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Kodprog admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">5</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div><div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://ta.azureedge.net/p/images/usuarios/l/iKLuAWdZ10jM8PA5O9CmSJJjcDeW_1Sw0.jpg/600x600cut/" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
