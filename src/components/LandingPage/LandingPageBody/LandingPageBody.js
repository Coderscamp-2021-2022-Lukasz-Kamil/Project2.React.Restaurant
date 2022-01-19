import { Card } from "react-bootstrap";

const LandingPageBody = () => {
    return (
        <>

        <Card
        className='bg-transparent text-white text-center'
        style={{ position: "absolute", top: "260px" }}>
        <Card.Body>
            <Card.Title
                style={{
                    fontFamily: "Italianno",
                    lineHeight: "0.9",
                    fontSize: "clamp(6rem, 16vw, 9rem)"
                }}>
                Paradiso Italiano
            </Card.Title>
            <Card.Subtitle style={{ fontFamily: "Rufina", fontSize: "clamp(1rem, 5vw, 3rem)" }}>
                Italian Restaurant
            </Card.Subtitle>
        </Card.Body>

        <Card.Body
            className='about'
            style={{
                maxWidth: "50rem",
                background: "rgba(0, 0, 0, 0.4)",
                textAlign: "justify",
                marginTop: "6rem",
            }}>
            <Card.Title
                style={{ fontFamily: "Montserrat", textTransform: "uppercase" }}>
                About
            </Card.Title>
            <Card.Text style={{ fontFamily: "Montserrat" }}>
                With this desire was born the idea of ​​creating Paradiso
                Italiano, where you can find real Italian flavors: pizza on a
                delicate, thin crust wood-fired oven, pasta according to Italian
                recipes and many more.
            </Card.Text>
        </Card.Body>
    </Card>
        </>
    )

}

export default LandingPageBody;