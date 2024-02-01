import { Link } from "react-router-dom";
import "./header.scss";
import {
  Badge,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ dark, setDark, selectLan, setSelectLan }: any) => {
  const [lan, setLan] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLan(event.target.value as string);
    setSelectLan(event.target.value);
  };

  // console.log(lan);

  function notificationsLabel(count: number) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  }

  const darkMode = () => {
    setDark(!dark);
  };

  return (
    <header style={dark ? { background: "#2A2B3F" } : {}}>
      <div className="container">
        <nav className="flex-class">
          <div className="nav-logo flex-class">
            <img
              src="./gerb.png"
              alt="Error"
              onClick={() => {
                location.reload();
              }}
              style={dark ? { display: "none" } : {}}
            />
            <ul className="flex-class">
              <li>
                <Link to="/" style={dark ? { color: "#fff" } : {}}>
                  {selectLan == "Uzbek" ? "Boshqaruv paneli" : ""}
                  {selectLan == "English" ? "Dashboard" : ""}
                  {selectLan == "Russia" ? "Панель приборов" : ""}
                </Link>
              </li>
              <li>
                <Link to="/tables" style={dark ? { color: "#fff" } : {}}>
                  {selectLan == "Uzbek" ? "Jadvallar" : ""}
                  {selectLan == "English" ? "Tables" : ""}
                  {selectLan == "Russia" ? "Таблицы" : ""}
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-btns flex-class">
            <FormControl
              fullWidth
              className="w13"
              sx={
                dark
                  ? {
                      backgroundColor: "#2B2C40",
                      borderColor: "text.primary !important",
                    }
                  : {}
              }
            >
              <InputLabel
                id="demo-simple-select-label"
                className="menuItmes"
                sx={dark ? { color: "#fff !important" } : {}}
              >
                Uzbek
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lan}
                label="Lan"
                sx={dark ? { backgroundColor: "#2B2C40" } : {}}
                onChange={handleChange}
              >
                <MenuItem
                  value={"Uzbek"}
                  className="menuItmes"
                  style={{ marginTop: "3rem" }}
                  sx={dark ? { color: "#000", marginTop: "3.5rem" } : {}}
                >
                  Uzbek
                </MenuItem>
                <MenuItem
                  value={"Russia"}
                  className="menuItmes"
                  sx={dark ? { color: "#000" } : {}}
                >
                  Russia
                </MenuItem>
                <MenuItem
                  value={"English"}
                  className="menuItmes"
                  sx={dark ? { color: "#000" } : {}}
                >
                  English
                </MenuItem>
              </Select>
            </FormControl>
            <label className="ui-switch">
              <input type="checkbox" />
              <div className="slider" onClick={darkMode}>
                <div className="circle"></div>
              </div>
            </label>

            <IconButton aria-label={notificationsLabel(100)}>
              <Badge badgeContent={100} color={dark ? "primary" : "success"}>
                <NotificationsIcon
                  style={dark ? { fill: "#fff" } : {}}
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    fill: "#4169E1",
                    cursor: "pointer",
                  }}
                />
              </Badge>
            </IconButton>
            {/* <PersonIcon
              style={dark ? { fill: "#fff" } : {}}
              sx={{
                width: "3rem",
                height: "3rem",
                fill: "#4169E1",
                cursor: "pointer",
              }}
            /> */}
            <img src="./person.png" alt="Eror" className="personImg" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
