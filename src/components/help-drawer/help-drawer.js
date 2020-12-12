import React from 'react';
import { makeStyles } from '@material-ui/styles';
const merge = require('deepmerge')

const defaultTheme = {
    root: {
        fontFamily: 'Roboto',
        background: '#fafafa',
        borderLeft: '1px solid #0d468b'
    },
    header: {
        background: '#0d468b',
        color: '#FFF',
        height: '50px'
    }
};

const useStyles = makeStyles((theme) => {

    theme = merge(defaultTheme, theme);

    return {
        root: {
            fontFamily: theme.root.fontFamily,
            background: theme.root.background,
            position: 'absolute',
            right: '0px',
            top: '0px',
            bottom: '0px',
            width: '300px',
            borderLeft: theme.root.borderLeft,
        },
        header: {
            background: theme.header.background,
            height: theme.header.height,
            borderLeft: theme.root.borderLeft,
            color: theme.header.color,
            display: 'flex',
            alignItems: 'center',
            padding: '0px 10px'
        },
    }
}, { name: 'hd' });

function Header() {
    const style = useStyles()
    return (
        <div className={style.header}>
            Title
        </div>
    )
}

function Wrapper({ children }) {
    const style = useStyles()
    return (
        <div className={style.root}>
            {children}
        </div>
    )
}

export default function HelpDrawer() {
    return (
        <Wrapper>
            <Header></Header>
            <div>TestDrawer</div>
        </Wrapper>
    )
}