import { KeyboardArrowDownOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import "../styles/SidebarOption.css";
import {useState} from 'react';

function SidebarOption({ title, Icon, dropDown, optionList }) {

    const [DropDownIcon, setDropDownIcon] = useState(KeyboardArrowRightOutlined);
    const [isdropDown, setIsDropDown] = useState(false);

    const showList = () => {

        if(!dropDown) return;

        if (DropDownIcon === KeyboardArrowRightOutlined) {
            setDropDownIcon(KeyboardArrowDownOutlined);

        } else {
            setDropDownIcon(KeyboardArrowRightOutlined);
        }

        setIsDropDown(!isdropDown);
    }


    const subNav = () => {
        return (
            <div className="subnav__item" style={{transitionDuration: "0.3s"}}>
                {optionList.map((option, idx) => {
                    return <span key={idx} > {option} </span>
                })}
            </div>
        )
    }

    return (
        <div className='sidebarOption' onClick={showList}>
            <div class="sidebarOption__header">
                <Icon className="sidebarOption__icon" />
                <h5>{title}</h5>
                {dropDown && <DropDownIcon className="sidebarOption__dropdown" />}
            </div>
            {/* {dropDown && <DropDownIcon className="sidebarOption__dropdown" onClick={showList}/>} */}
            <div class="subnav">
                {isdropDown && subNav()}
            </div>

        </div>
    )
}

export default SidebarOption