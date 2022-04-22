import '../styles/Trade.css';
import { CallMadeOutlined, CallReceivedOutlined, KeyboardArrowDownOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';


function Trade({token}) {


    const TradeField = (fieldType) => {
        return (
            <div class="trade__field">
                <span>{fieldType}</span>
                <input type="text" />
            </div>
        )
    }

    return (
        <div className='trade__container'>

            <div class="trade__header">
                <div class="transaction__type">
                    <h4>Quick Transfer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>


                <div class="token__type">
                    <img src={token} alt="" />
                    <span> 224,551 BTC </span>
                    <IconButton>
                        <KeyboardArrowDownOutlined />
                    </IconButton>
                </div>

            </div>


            {TradeField("Amount BTC")}
            {TradeField("Price BPL")}
            {TradeField("Fee (1%)")}
            {TradeField("Total BPL")}

            <div class="trade__footer">
                <p>Lorem ipsum dolor sit amet consectetur, ant iure harum, fuga dolor suscipit odio.</p>
                <button id='buy'><CallReceivedOutlined/> <span>Buy </span></button>
                <button id='sell'>Sell <CallMadeOutlined/></button>
            </div>


        </div>
    )
}

export default Trade