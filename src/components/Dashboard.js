import { EventNoteOutlined, FilterDramaOutlined, CheckCircleOutlined, CircleOutlined, KeyboardArrowDownOutlined } from '@mui/icons-material';
import '../styles/Dashboard.css';
import BalanceCard from './BalanceCard';
import Activities from './Activities';
import SendCrypto from './SendCrypto';
import Trade from './Trade';

function Dashboard({ sidebarOpen }) {

	const PriceCard = (image, price, percentage, state) => {
		return (
			<div class="price__card" style={{
				flex: `${!sidebarOpen && '0.24'}`
			}}>
				<div class="coin__image">
					<img src={image} alt="" />
				</div>

				<div class="price">
					<h2> ${price}</h2>
					<span className="percentage" style={{ color: state }}>{percentage}</span> This Week
				</div>
			</div>
		)
	}



	return (
		<div className='dashboard'
			style={{
				width: `${sidebarOpen ? '80%' : '100%'}`,
				right: `${sidebarOpen ? '0' : 'unset'}`,
				margin: `${sidebarOpen ? '5rem 0 0 0' : '5rem 1rem 1rem 2rem'}`,
				position: `${sidebarOpen ? 'absolute' : 'static'}`

			}}
		>
			<div class="dashboard__header" >
				<h3>Dashboard</h3>

				<div class="dashboard__headerOptions" 
					style={{
						marginRight: `${!sidebarOpen && '1.2rem'}`
					}}
				>
					<button class="weather">
						<div class="weather__left">
							<FilterDramaOutlined />{" "}
							<span>21&deg;</span>
						</div>

						<div class="weather__right">
							<span>Medon, IDN </span>
							<KeyboardArrowDownOutlined />
						</div>
					</button>
					<button class="filter">
						<EventNoteOutlined />
						<span>Filter Periode</span>
					</button>
				</div>

			</div>

			<div class="price__cards">
				{PriceCard("https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022", "984", "45%", "green")}
				{PriceCard("https://cryptologos.cc/logos/cardano-ada-logo.png?v=022", "22,567", "45%", "green")}
				{PriceCard("https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022", "168,331.09", "45%", "green")}
				{PriceCard("https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=022", "7,785", "45%", "green")}
			</div>

			<div class="chart__container" >
				<div class="statistics" style={{
					flex: `${!sidebarOpen && '0.24'}`
				}}>
					<h3>Current Statistic</h3>
					<div class="stat__img">
						<img src="https://www.iconpacks.net/icons/1/free-pie-chart-icon-683-thumb.png" alt="" />
					</div>

					<div class="stats">
						<div class="stat__info">
							<p className="stat__category">Income (66%)</p>
							<p className='stat__price'>$167,844.21</p>
						</div>

						<div class="stat__info">
							<p className="stat__category">Spends (50%)</p>
							<p className='stat__price' >$56,411.33</p>
						</div>

						<div class="stat__info">
							<p className="stat__category">Installment (11%)</p>
							<p className='stat__price'>$81,842.01</p>
						</div>

						<div class="stat__info">
							<p className="stat__category">Invest (23%)</p>
							<p className='stat__price'>$67,678.12</p>
						</div>
					</div>

				</div>

				<div class="market__overview"  style={{
					flex: `${!sidebarOpen && '0.727'}`
				}}>

					<div class="market__header">
						<div class="market__headerLeft">
							<h3>Market Overview</h3>
							<p>Lorem ipsum consl! Lorem, ipsum dolor.</p>
						</div>

						<div class="market__headerRight">
							<div class="coin__option checked">
								<CheckCircleOutlined />
								<span> ETH </span>
							</div>

							<div class="coin__option checked">
								<CheckCircleOutlined />
								<span> XMR </span>
							</div>

							<div class="coin__option">
								<CircleOutlined />
								<span> LTC </span>
							</div>

							<div class="coin__option">
								<CircleOutlined />
								<span> XMR </span>
							</div>


							<select>
								<option> Weekly (2020) </option>
								<option> Monthly (2020) </option>
								<option> Yearly (2020) </option>
								<option> Past 5 years </option>
							</select>

							{/* <Dropdown.Header>
								<Dropdown.Item> Weekly (2020) </Dropdown.Item>
								<Dropdown.Item> Weekly (2020) </Dropdown.Item>
								<Dropdown.Item> Weekly (2020) </Dropdown.Item>
								<Dropdown.Item> Weekly (2020) </Dropdown.Item>
							</Dropdown.Header> */}

						</div>
					</div>

					<div class="market__graph">
						<img src="https://apexcharts.com/wp-content/uploads/2018/01/dynamic-realtime-line-chart.svg" alt="" />
					</div>
				</div>
			</div>

			<div class="balanceCard__container">
				<BalanceCard sidebarOpen={sidebarOpen} bgColor="rgb(50, 145, 50)" />
				<BalanceCard sidebarOpen={sidebarOpen} bgColor="rgba(42, 0, 121, 0.767)" circle={true} />
				<BalanceCard sidebarOpen={sidebarOpen} bgColor="rgba(192, 66, 7, 0.89)" circle={true} />
			</div>

			<Activities sidebarOpen={sidebarOpen}/>

			<div class="trade__section" 
				style={{
					maxWidth: `${!sidebarOpen && '97%'}`
				}}
			
			>
				<SendCrypto />
				<Trade />
			</div>


		</div>
	)
}

export default Dashboard