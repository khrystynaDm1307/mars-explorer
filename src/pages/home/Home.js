import ButtonComponent from "../../components/button/Button";
import './Home.scss'

function Home() {
    return <div className="container">
        <h1>MARS EXPLORER</h1>
        <h2>Want to discover Mars right now?</h2>
        <ButtonComponent variant="contained" pathname="/photos" text="Let's go" />
    </div>
}

export default Home;