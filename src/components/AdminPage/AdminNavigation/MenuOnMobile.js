import {Image, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const MenuOnMobile = ({source, icon}) => {
    return (

        <NavLink to={source} className="text-decoration-none text-white" activeclassname="active">
            <Button className="bg-transparent shadow-none border-none">
                <Image src={icon}></Image>
            </Button>
        </NavLink>
    )
}

export default MenuOnMobile;