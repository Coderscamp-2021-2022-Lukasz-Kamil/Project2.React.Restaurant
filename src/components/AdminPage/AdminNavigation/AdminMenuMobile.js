import {Image, Button} from 'react-bootstrap'
import {NavLink} from "react-router-dom"
import ProfileIcon from "../../../images/myProfile-icon.png"
import MenuIcon from "../../../images/menuAdmin-icon.png"
import Members from "../../../images/members-icon.png"

const Pages = props => {
    return (

        <NavLink to={props.source} className="text-decoration-none text-white" activeclassname="active">
            <Button className="bg-transparent shadow-none border-none">
                <Image src={props.icon}></Image>
            </Button>
        </NavLink>
    )
}

const AdminMenuMobile = () => {
    const adminPages =[
        {source: "/admin/home", icon: ProfileIcon},
        {source: "/admin/menu", icon: MenuIcon},
        {source: "/admin/members", icon: Members}
    ];
    return (
        adminPages.map((pages) =>(
            <Pages source={pages.source} icon={pages.icon} key={pages.icon} />
        ))    
    );
};

export default AdminMenuMobile;



 





