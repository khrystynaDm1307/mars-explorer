import './Photos.scss'
import { useParams } from 'react-router';
import ButtonComponent from '../../components/button/Button';
import Sol from './components/sol/Sol';
import { Container } from '@mui/material';
import BoxComponent from '../../components/box/Box';

function Photos() {

    const { rover } = useParams()


    return <div className="containerPhotos">
        <Container maxWidth="md">
        <BoxComponent text="ROVERS"/>
            <div className="roversMenu">
                <ButtonComponent variant="contained" pathname="/photos/curiosity/" text="Curiosity" />
                <ButtonComponent variant="contained" pathname="/photos/opportunity" text="Opportunity" />
                <ButtonComponent variant="contained" pathname="/photos/spirit" text="Spirit" />
            </div>
            {rover && <>
                <BoxComponent text="SOL"/>
                <Sol></Sol>
            </>}
        </Container>
    </div>
}

export default Photos;