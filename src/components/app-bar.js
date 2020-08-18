import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Minimize from '@material-ui/icons/Minimize';
import CropSquare from '@material-ui/icons/CropSquare';
import FilterNone from '@material-ui/icons/FilterNone';

import AppMenu from './app-menu';

// Captura janela principal do Electron
const { remote } = require('electron')
var window = remote.getCurrentWindow()

export default class AppBar extends React.Component{
    render(){

        const appBarStyle = {
            WebkitAppRegion: "drag",
            zIndex: 1000,
            maxHeight: 20,
            padding: 6,
            paddingTop: 10,
            paddingBottom: 10,
            height: 100,
            color: "#f5f5f5",
            backgroundColor: "#494440",
            display: "flex",
            alignItems: "center",
            userSelect: "none",
        }
        const appButton = {
            WebkitAppRegion: "no-drag"
        }
        const appH1 = {
            flexGrow: 1,
            margin: 0,
            marginLeft: 6,
            fontSize: 20
        }

        return ( 
            <div style={ appBarStyle }>                
                <h1 style={ appH1 }>Reactron</h1>
                <IconButton color="inherit" size="small" style={ appButton }
                    onClick={() => { window.close() } }>
                    <Close />
                </IconButton>
            </div> 
        )
    }
}