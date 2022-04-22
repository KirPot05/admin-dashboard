import "../styles/BalanceCard.css";

function BalanceCard({ bgColor, balance, circle, direction }) {
    return (
        <div className='balance__card' style={{ backgroundColor: bgColor }}>

            {circle && <span className="bgCircle"></span>}
            <div class="card__content">

                <div class="card__header">
                    <div class="balance__info">
                        <p className='balance'>Main Balance</p>
                        <h3>${balance}</h3>
                    </div>
                    <div class="circles">
                        <span class="circle"></span>
                        <span class="circle" id="cir2"></span>

                    </div>

                </div>

                <div class="card__details">
                    <div class="valid_date">
                        <h6>Valid THRU</h6>
                        <h4>08/21</h4>
                    </div>

                    <div class="card_holder">
                        <h6>Card Holder</h6>
                        <h4>William Fancyson</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard