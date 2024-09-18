import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import MenuIcon from '@mui/icons-material/Menu'

import { locales } from '../constants'

const drawerWidth = 240

const CustomButton = ({ text, onClick, sx }) => {
    return (
        <Button
            color="inherit"
            size="small"
            onClick={onClick}
            sx={{ ...sx, minWidth: '36px' }}
        >
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                {text}
            </Typography>
        </Button>
    )
}

const DrawerAppBar = (props) => {
    const navigate = useNavigate()
    const { i18n, t } = useTranslation()
    const { window } = props

    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const navItems = [
        {
            name: t('home.nav'),
            onClick: () => navigate('/'),
        },
        {
            name: t('legal.nav'),
            onClick: () => navigate('/legal-aid'),
        },
        {
            name: t('consensus.nav'),
            onClick: () => navigate('/demo-consensus'),
        },
        {
            name: t('blocks.nav'),
            onClick: () => navigate('/demo-blocks'),
        },
    ]

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map(({ name, onClick }) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton
                            onClick={onClick}
                            sx={{ textAlign: 'center' }}
                        >
                            <ListItemText>
                                <Typography
                                    variant="body1"
                                    sx={{ fontFamily: 'Poppins' }}
                                >
                                    {name}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open menu"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 1, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(({ name, onClick }) => (
                            <CustomButton
                                key={name}
                                text={name}
                                onClick={onClick}
                                sx={{ pr: 2 }}
                            />
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        {locales.map(({ locale, text }) => (
                            <CustomButton
                                key={locale}
                                text={locale}
                                onClick={() => i18n.changeLanguage(locale)}
                            />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default DrawerAppBar
