import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import '../styles/SendCrypto.css';

function SendCrypto({ token }) {

    const contact = (img, name, id) => {
        return (
            <div class="contact">
                <img src={img} alt=""/>

                <div class="details">
                    <h6>{name}</h6>
                    <span>{id}</span>
                </div>
            </div>
        )
    }

    return (
        <div className='send__container'>

            <div class="send__header">
                <div class="transaction__type">
                    <h4>Quick Transfer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>


                <div class="token__type">
                    <img src={token} alt="" />
                    <span> 23,511 Ltc </span>
                    <IconButton>
                        <KeyboardArrowDownOutlined />
                    </IconButton>
                </div>

            </div>

            <div class="send__field">
                <span>Amount BTC</span>
                <input type="text" />
            </div>

            <div class="recent__contacts">
                <div class="contacts__header">
                    <h5>Recent Contacts</h5>
                    <h6>View More</h6>
                </div>
                <div class="contacts">
                    {contact('', "Martha", "@martha")}
                    {contact('', "Cindy", "@cindy")}
                    {contact('', "Olivia", "@olivia")}
                    {contact('', "David", "@david")}
                    {contact('', "Sameul", "@samuel")}
                    {contact('', "Jono", "@jono")}
                </div>
            </div>

            <div class="send__footer">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem accusantiums sunt iure harum, fuga dolor suscipit odio.</p>
                <button>Transfer Now</button>
            </div>


        </div>
    )
}

export default SendCrypto