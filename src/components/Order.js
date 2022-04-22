import { KeyboardArrowDownOutlined, MoreVertOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import '../styles/Order.css';

function Order({ operation, Icon, name, color }) {
    return (
        <div className='order'>
            <div class="order__header">
                <h3> {operation} Order </h3>
                <IconButton>
                    <MoreVertOutlined />
                </IconButton>
            </div>

            <div class="order__coin">
                <div class="coin__details">
                    <img src={Icon} alt="" />
                    <span> {name} </span>
                </div>

                <IconButton>
                    <KeyboardArrowDownOutlined />

                </IconButton>
            </div>

            <div class="order__stats">
                <div class="stat__header">
                    <span>Price</span>
                    <span>Amount</span>
                    <span>Total</span>
                </div>

                <div class="ostats">
                    <span>82.3</span>
                    <span>0.15</span>
                    <span>$134.12</span>
                </div>

                <div class="ostats">
                    <span>82.3</span>
                    <span>0.15</span>
                    <span>$134.12</span>
                </div>

                <div class="ostats">
                    <span>82.3</span>
                    <span>0.15</span>
                    <span>$134.12</span>
                </div>

                <div class="ostats">
                    <span>82.3</span>
                    <span>0.15</span>
                    <span>$134.12</span>
                </div>

                <div class="ostats --active">
                    <span>82.3</span>
                    <span>0.15</span>
                    <span>$134.12</span>
                </div>

                <div class="ostats">
                    <span>82.3</span>
                    <span>0.15</span>
                    <span>$134.12</span>
                </div>


            </div>

        </div>
    )
}

export default Order;