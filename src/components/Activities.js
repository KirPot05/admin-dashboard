import { CallMadeOutlined, CallReceivedOutlined } from '@mui/icons-material';
import '../styles/Activities.css';
import Order from './Order';


function Activities({sidebarOpen}) {

	const Activity = (state, coinIcon ,name, time, transaction, transactionState, color) => {
		
		const redIcon = <div className='ticon redIcon'> <CallMadeOutlined/> </div>
		
		const greenIcon = <div class="ticon greenIcon"> <CallReceivedOutlined/> </div>

		return (
			<div class="activity__row" style={{
				border: `${transactionState==='Pending' ? '1px solid lightgray' : 'none'}`,
			}}>
				{state ? greenIcon : redIcon }
				<div class="coin__name">

				<img src={coinIcon} alt=""/>
				<span> {name}</span>
				</div>

				<span>{time}</span>

				<span>{transaction}</span>
				
				<button 
					class="transaction__state" 
					style={{
						color: color, 
						border: `1px solid ${color}`, 
						backgroundColor:`${transactionState === 'Pending' ? 'rgba(180, 180, 180, 0.815)': 'white'}` 
					}}>
					{transactionState}
				</button>

			</div>
		)

	}

	return (
		<div className='activities' 
			style={{
				marginRight: `${!sidebarOpen ? "4.4rem": "3rem"}`
			}}
		>
			<div class="recent__activities" 
				style={{
					flex: `${sidebarOpen ? "0.58" : "0.48"}`,
					margin: `${sidebarOpen ? "1.2rem 0.5rem 1.2rem 0" : "1.2rem 0.5rem 1.2rem 0"}`
				}}
			>
				<div class="activity__header">
					<div class="activity__headerLeft">
						<h4>Recent Trading Activities</h4>
						<p>Lorem ipsum it. Voluptates, nobis.</p>
					</div>

					<div class="activity__headerRight">
						<button id='btn1'>Monthly</button>
						<button id='btn2'>Weekly</button>
						<button id='btn3'>Today</button>
					</div>
				</div>

				<div class="activity__content">
					{Activity(true, "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022", "Bitcoin", "06:24:45 AM", "+$5,553", "Completed", "green")}

					{Activity(false, "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022", "USDT", "06:24:45 AM", "-$553", "Canceled", "red")}

					{Activity(false, "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022", "ADA", "06:24:45 AM", "+$456", "Canceled", "red")}
					
					{Activity(true, "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022", "DOGE", "06:24:45 AM", "+$897", "Completed", "green")}
					
					{Activity(false, "https://cryptologos.cc/logos/polygon-matic-logo.png?v=022", "Polygon", "06:24:45 AM", "+$5,553", "Pending", "gray")}
					
					{Activity(true, "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022", "Bitcoin", "06:24:45 AM", "+$5,553", "Completed", "green")}
				</div>
			</div>
	
			<Order Icon="https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=022" operation="Sell" name="Litecoin" sidebarOpen={sidebarOpen} color="rgb(9, 9, 126)" />
			<Order Icon="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022" operation="Buy" name="Bitcoin" sidebarOpen={sidebarOpen} color="rgb(221, 63, 6)" />

		</div>
	)
}

export default Activities