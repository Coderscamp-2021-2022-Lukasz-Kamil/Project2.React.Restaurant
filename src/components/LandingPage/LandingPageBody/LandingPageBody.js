import { Card } from "react-bootstrap";
import styles from  "./LandingPageBody.module.css"

const LandingPageBody = () => {
	return (
		<>
			<Card
				className='bg-transparent text-white text-center align-self-center'
				style={{ position: "absolute" }}>
				<Card.Body>
					<Card.Title className={styles["title"]}
						style={{
							lineHeight: "0.9",
							fontSize: "clamp(6rem, 16vw, 9rem)",
						}}>
						Paradiso Italiano
					</Card.Title>
					<Card.Subtitle className={styles["subtitle"]}
						style={{
							fontSize: "clamp(1rem, 5vw, 3rem)",
							marginBottom: "2rem",
						}}>
						Italian Restaurant
					</Card.Subtitle>
				</Card.Body>

				<Card.Body  className={styles["about"]}>
					<Card.Title className={styles["aboutTitle"]}>
						About
					</Card.Title>
					<Card.Text>
						With this desire was born the idea of ​​creating Paradiso Italiano,
						where you can find real Italian flavors: pizza on a delicate, thin
						crust wood-fired oven, pasta according to Italian recipes and many
						more.
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default LandingPageBody;
