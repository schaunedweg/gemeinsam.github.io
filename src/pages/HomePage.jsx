import { useTranslation, Trans } from 'react-i18next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'

import Flyers from '../components/Flyers'
import PageTitle from '../components/PageTitle'

const HomePage = () => {
    const { t } = useTranslation()

    return (
        <Box sx={{ py: { xs: 2, sm: 5 } }}>
            <Stack direction="column" spacing={{ xs: 2, sm: 3 }}>
                <PageTitle />
                <Typography variant="body1" sx={{ fontFamily: 'Inconsolata' }}>
                    {t('home.invite')}
                </Typography>
                <Typography variant="h4" sx={{ fontFamily: 'Archivo Black' }}>
                    <PriorityHighIcon />
                    <PriorityHighIcon />
                    {t('home.demo')}
                    <PriorityHighIcon />
                    <PriorityHighIcon />
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: 'Archivo Black' }}>
                    {t('home.datetime')}
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins' }}>
                    {t('home.location')}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Inconsolata' }}>
                    <Trans i18nKey="home.text" />
                </Typography>
                <Flyers />
            </Stack>
        </Box>
    )
}

export default HomePage
