import { KeyboardArrowDownOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import "../styles/SidebarOption.css";
import {useState} from 'react';

function SidebarOption({ title, Icon, dropDown, optionList }) {

    const [DropDownIcon, setDropDownIcon] = useState(KeyboardArrowRightOutlined);
    const [list, setList] = useState(optionList);

    const showList = ()=> {
        if(DropDownIcon === KeyboardArrowRightOutlined){
            setDropDownIcon(KeyboardArrowDownOutlined);

            list.map((option, idx) => {
                return (
                    <div class="option" key={idx}>
                        <h3>{option}</h3>
                    </div>
                )
            })


        } else{
            setDropDownIcon(KeyboardArrowRightOutlined);
        }
    }

    return (
        <div className='sidebarOption'>
            <Icon className="sidebarOption__icon" />
            <h5>{title}</h5>

            {dropDown && <DropDownIcon className="sidebarOption__dropdown" onClick={showList}/>}

        </div>
    )
}

export default SidebarOption