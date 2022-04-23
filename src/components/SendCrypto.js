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
                    {contact('https://www.whatsappimages.in/wp-content/uploads/2021/12/girl-New-Superb-Whatsapp-Dp-Profile-Images-photo.jpg', "Martha", "@martha")}
                    {contact('https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg', "Cindy", "@cindy")}
                    {contact('https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg', "Olivia", "@olivia")}
                    {contact('https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg', "David", "@david")}
                    {contact('https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg', "Sameul", "@samuel")}
                    {contact('https://i.pinimg.com/originals/dc/91/41/dc91418a47b9c9e85c3a10d13d275574.jpg', "Jono", "@jono")}
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