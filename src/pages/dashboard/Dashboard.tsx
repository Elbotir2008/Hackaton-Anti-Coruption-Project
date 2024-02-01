import { Link } from "react-router-dom";
import "./dashboard.scss";
import DashBottom from "../../components/dashBottom/DashBottom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dashboard = ({ dark, selectLan }: any) => {
  return (
    <main style={dark ? { background: "#232333", marginTop: "10rem" } : {}}>
      <div className="container">
        <div className="grid-container">
          <div className="dashboard-top flex-class">
            <div
              className="total-card"
              style={dark ? { background: "#2B2C40" } : {}}
            >
              <div className="total-title flex-class">
                <h1 style={dark ? { color: "#fff" } : {}}>
                  {selectLan == "Uzbek" ? "Anti Corruption Statistikasi" : ""}
                  {selectLan == "English" ? "Anti Corruption Staticks" : ""}
                  {selectLan == "Russia" ? "Антикоррупционная статистика" : ""}
                </h1>
                <p>2022 - 2023</p>
              </div>
              <div className="total-bottom">
                <div className="total-left">
                  <img src="./totaImg.png" alt="Eror" />
                </div>
              </div>
            </div>
            <div className="mini-cards">
              <div className="sales flex-class">
                <div
                  className="top-sales"
                  style={dark ? { background: "#2B2C40" } : {}}
                >
                  <div className="flex-class">
                    <img src="./1.png" alt="Eror" />
                    <MoreVertIcon
                      sx={{
                        width: "3rem",
                        height: "3rem",
                        color: "#84919D",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <h4 style={dark ? { color: "#fff" } : {}}>Andijon</h4>
                  <h1 style={dark ? { color: "#696CFF" } : {}}>$12,628</h1>
                  <span style={{ color: "#71DD37" }}>
                    <CallMadeIcon
                      sx={{
                        marginRight: "1rem",
                        marginBottom: "-0.2rem",
                        width: "2rem",
                        height: "2rem",
                        color: "#71DD37",
                      }}
                    />
                    72.8%
                  </span>
                </div>
                <div
                  className="bottom-sales"
                  style={dark ? { background: "#2B2C40" } : {}}
                >
                  <div className="flex-class">
                    <img src="./2.png" alt="Eror" />
                    <MoreVertIcon
                      sx={{
                        width: "3rem",
                        height: "3rem",
                        color: "#84919D",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <h4 style={dark ? { color: "#fff" } : {}}>Xorazm</h4>
                  <h1 style={dark ? { color: "#696CFF" } : {}}>$4,679</h1>
                  <span style={{ color: "#FF5235" }}>
                    <CallReceivedIcon
                      sx={{
                        marginRight: "1rem",
                        marginBottom: "-0.2rem",
                        width: "2rem",
                        height: "2rem",
                        color: "#FF5235",
                      }}
                    />
                    28.8%
                  </span>
                </div>
              </div>
              <div
                className="report-card flex-class"
                style={dark ? { background: "#2B2C40" } : {}}
              >
                <div className="report-left">
                  <h2 style={dark ? { color: "#fff" } : {}}>
                    {selectLan == "Uzbek" ? "O'rtacha daromad" : ""}
                    {selectLan == "English" ? "Average earnings" : ""}
                    {selectLan == "Russia" ? "Средний заработок" : ""}
                  </h2>
                  <h3>YEAR 2022</h3>
                  <span style={{ color: "#71DD37" }}>
                    <CallMadeIcon
                      sx={{
                        marginRight: "1rem",
                        marginBottom: "-0.2rem",
                        width: "2rem",
                        height: "2rem",
                        color: "#71DD37",
                      }}
                    />
                    72.8%
                  </span>
                  <h1 style={dark ? { color: "#fff" } : {}}>$84,686k</h1>
                </div>
                <img
                  src="./images.png"
                  style={dark ? { marginLeft: "14rem" } : {}}
                  alt="Eror"
                />
              </div>
            </div>
          </div>
          <div className="dashboard-bottom flex-class">
            <div
              className="order-card"
              style={dark ? { background: "#2B2C40" } : {}}
            >
              <div className="order-title flex-class">
                <div className="orderTitle-left">
                  <h1 style={dark ? { color: "#fff" } : {}}>
                    {selectLan == "Uzbek" ? "Barcha Qiymatlar" : ""}
                    {selectLan == "English" ? "All Values" : ""}
                    {selectLan == "Russia" ? "Все значения" : ""}
                  </h1>
                  <p style={dark ? { color: "#ccc" } : {}}>
                    {selectLan == "Uzbek" ? "42.82k Barcha Qiymatlar" : ""}
                    {selectLan == "English" ? "42.82k Total Sales" : ""}
                    {selectLan == "Russia" ? "42.82k Тотальная распродажа" : ""}
                  </p>
                </div>
                <MoreVertIcon
                  style={dark ? { color: "#fff" } : {}}
                  sx={{ fontSize: "3rem", cursor: "pointer", color: "#4D5F71" }}
                />
              </div>
              <div className="orderbetween flex-class">
                <div className="between-left">
                  <h1 style={dark ? { color: "#696CFF" } : {}}>8,258</h1>
                  <p style={dark ? { color: "#fff" } : {}}>
                    {selectLan == "Uzbek" ? "Korruptsiya a'zolari" : ""}
                    {selectLan == "English" ? "Members of corruption" : ""}
                    {selectLan == "Russia" ? "Члены коррупции" : ""}
                  </p>
                </div>
                <img src="./she.png" alt="Eror" />
              </div>
            </div>
            <div
              className="transactions-card"
              style={dark ? { background: "#2B2C40" } : {}}
            >
              <div className="transactions-title flex-class">
                <h1 style={dark ? { color: "#fff" } : {}}>
                  {selectLan == "Uzbek" ? "Viloyatlardagi Corrupsionlar" : ""}
                  {selectLan == "English" ? "Corruption in the provinces" : ""}
                  {selectLan == "Russia" ? "Коррупция в провинции" : ""}
                </h1>
                <MoreVertIcon
                  style={dark ? { color: "#fff" } : {}}
                  sx={{ fontSize: "3rem", cursor: "pointer", color: "#4D5F71" }}
                />
              </div>
              <div className="transactions-boxes">
                <div className="transactions-box flex-class">
                  <div className="box-left flex-class">
                    <img src="./a.png" alt="Error" />
                    <div className="left-texts">
                      <p style={dark ? { color: "#fff" } : {}}>Andijon</p>
                      <h2 style={dark ? { color: "#fff" } : {}}>43.2%</h2>
                    </div>
                  </div>
                  <div className="box-right">
                    <h3 style={dark ? { color: "#696CFF" } : {}}>+$82.6 USD</h3>
                  </div>
                </div>
                <div className="transactions-box flex-class">
                  <div className="box-left flex-class">
                    <img src="./b.png" alt="Error" />
                    <div className="left-texts">
                      <p style={dark ? { color: "#fff" } : {}}>Toshkent</p>
                      <h2 style={dark ? { color: "#fff" } : {}}>42.3%</h2>
                    </div>
                  </div>
                  <div className="box-right">
                    <h3 style={dark ? { color: "#696CFF" } : {}}>
                      +$270.69 USD
                    </h3>
                  </div>
                </div>
                <div className="transactions-box flex-class">
                  <div className="box-left flex-class">
                    <img src="./c.png" alt="Error" />
                    <div className="left-texts">
                      <p style={dark ? { color: "#fff" } : {}}>Xorazm</p>
                      <h2 style={dark ? { color: "#fff" } : {}}>43.1%</h2>
                    </div>
                  </div>
                  <div className="box-right">
                    <h3 style={dark ? { color: "#696CFF" } : {}}>
                      +$637.91 USD
                    </h3>
                  </div>
                </div>
                <div className="transactions-box flex-class">
                  <div className="box-left flex-class">
                    <img src="./d.png" alt="Error" />
                    <div className="left-texts">
                      <p style={dark ? { color: "#fff" } : {}}>Farg'ona</p>
                      <h2 style={dark ? { color: "#fff" } : {}}>73.1%</h2>
                    </div>
                  </div>
                  <div className="box-right">
                    <h3 style={dark ? { color: "#696CFF" } : {}}>
                      -$838.71 USD
                    </h3>
                  </div>
                </div>
                <div className="transactions-box flex-class">
                  <div className="box-left flex-class">
                    <img src="./e.png" alt="Error" />
                    <div className="left-texts">
                      <p style={dark ? { color: "#fff" } : {}}>Namangan</p>
                      <h2 style={dark ? { color: "#fff" } : {}}>13.2%</h2>
                    </div>
                  </div>
                  <div className="box-right">
                    <h3 style={dark ? { color: "#696CFF" } : {}}>
                      +$203.33 USD
                    </h3>
                  </div>
                </div>
                <div className="transactions-box flex-class">
                  <div className="box-left flex-class">
                    <img src="./f.png" alt="Error" />
                    <div className="left-texts">
                      <p style={dark ? { color: "#fff" } : {}}>Jizzax</p>
                      <h2 style={dark ? { color: "#fff" } : {}}>82.1%</h2>
                    </div>
                  </div>
                  <div className="box-right">
                    <h3 style={dark ? { color: "#696CFF" } : {}}>
                      -$92.45 USD
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="https://t.me/TechChatGPT_bot">
        <div className="fixed-button">
          <button>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>
              {selectLan == "Uzbek" ? "Murojaat" : ""}
              {selectLan == "English" ? "Appeal" : ""}
              {selectLan == "Russia" ? "Обращаться" : ""}
            </span>
          </button>
        </div>
      </Link>
      <div className="div" style={{ marginLeft: "6rem" }}>
        <DashBottom />
      </div>
    </main>
  );
};

export default Dashboard;
