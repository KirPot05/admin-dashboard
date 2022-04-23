import { AccountBalanceOutlined, CloseOutlined, CreditCardOutlined, CurrencyBitcoinOutlined, CurrencyExchangeOutlined, DashboardOutlined, SettingsOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import '../styles/Sidebar.css';
import SidebarOption from './SidebarOption';


function Sidebar({sidebarOpen, setSidebarOpen}) {

    return (
        sidebarOpen && (<div className='sidebar'>
            <div class="sidebar__header">
                <img src="http://assets.stickpng.com/images/585990234f6ae202fedf28cf.png" alt="" />
                <IconButton onClick={() => setSidebarOpen(false)}>
                    <CloseOutlined />
                </IconButton>
            </div>

            <div class="sidebar__profile">
                <img src="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" alt="" />
                <h3>Hello,<span> William </span></h3>
                <p>email@example.com</p>
            </div>

            <div class="sidebar__options">
                <SidebarOption title="Dashboard" Icon={DashboardOutlined} />
                <SidebarOption title="My Wallet" Icon={CreditCardOutlined} dropDown={true} optionList={["Add New", "Card List", "History"]} />
                <SidebarOption title="Transaction" Icon={CurrencyExchangeOutlined} dropDown={true} optionList={["Send", "Exchange"]} />
                <SidebarOption title="Crypto" Icon={CurrencyBitcoinOutlined} dropDown={true} optionList={["Buy", "Sell", "Wallet"]} />
                <SidebarOption title="Exchange" Icon={AccountBalanceOutlined} />
                <SidebarOption title="Settings" Icon={SettingsOutlined} />
            </div>

            <div class="sidebar__footer">
                <h5>Levis Crypto - Admin Dashboard</h5>
                <p>&copy; 2022 All Rights Reserved</p>
            </div>

        </div>)
    )
}

export default Sidebar