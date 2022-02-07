import {Image, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const MenuOnMobile = props => {
    return (

        <NavLink to={props.source} className="text-decoration-none text-white" activeclassname="active">
            <Button className="bg-transparent shadow-none border-none">
                <Image src={props.icon}></Image>
            </Button>
        </NavLink>
    )
}

export default MenuOnMobile;