import {SearchOutlined, NotificationsNone, ChatOutlined, CardGiftcardOutlined, SettingsOutlined, MenuOutlined } from '@mui/icons-material';
import "../styles/Header.css";
import { IconButton } from '@mui/material'

function Header({setSidebarOpen}) {

    const HeaderIcon = (Icon, number, selected) => {
        return (
            <div class="icon">

            <div className={`icon__container ${selected && 'icon--active'}`}>
                <Icon className="util_Icon"/>
                {!selected && <div className='number' >
                    <span>{number}</span>
                </div>}
            </div>
            </div>
        )
    }


    return (
        <div className='header'>
            <div class="header__left">
                <IconButton onClick={() => setSidebarOpen(true)}>
                    <MenuOutlined />
                </IconButton>
                <img src="http://assets.stickpng.com/images/585990234f6ae202fedf28cf.png" alt="" />
            </div>

            <div class="header__mid">
                <div class="header__search">
                    <input type="text" placeholder='Find something here' />
                    <SearchOutlined className="search__icon"/>
                </div>
            </div>

            <div class="header__right">
                <div class="header__options">
                    <span>Socials</span>
                    <span> <span className="redico"></span> Live Training</span>
                    <span>Blog</span>
                    <span>Trading News</span>
                </div>

                <div class="util__icons">
                    {HeaderIcon(NotificationsNone, 10, true)}
                    {HeaderIcon(ChatOutlined, 10)}
                    {HeaderIcon(CardGiftcardOutlined, 10)}
                    {HeaderIcon(SettingsOutlined, 10)}
                </div>
            </div>
        </div>
    )
}

export default Header