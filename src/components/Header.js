import {SearchOutlined, NotificationsNone, ChatOutlined, CardGiftcardOutlined, SettingsOutlined } from '@mui/icons-material';
import "../styles/Header.css";

function Header() {

    const HeaderIcon = (Icon, number, selected) => {
        return (
            <div class="icon">

            <div className={`icon__container ${selected && 'icon--active'}`}>
                <Icon/>
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
                <img src="" alt="" />
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
                    <span>Live Training</span>
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