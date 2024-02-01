import "./tables.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DashBottom from "../../components/dashBottom/DashBottom";
import { Link } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tables = ({ dark, selectLan }: any) => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <main className="main" style={dark ? { backgroundColor: "#232333" } : {}}>
      <div className="container">
        <TableContainer
          component={Paper}
          style={dark ? { backgroundColor: "#2B2C40" } : {}}
        >
          <div className="title">
            <h1 style={dark ? { color: "#fff" } : {}}>
              {selectLan == "Uzbek" ? "Asosiy" : ""}
              {selectLan == "English" ? "Basic" : ""}
              {selectLan == "Russia" ? "Базовый" : ""}
            </h1>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Dessert (100g serving)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Calories
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <TableContainer
          component={Paper}
          style={dark ? { backgroundColor: "#2B2C40" } : {}}
        >
          <div className="title">
            <h1 style={dark ? { color: "#fff" } : {}}>
              {selectLan == "Uzbek" ? "Mavzu" : ""}
              {selectLan == "English" ? "Theme" : ""}
              {selectLan == "Russia" ? "Предмет" : ""}
            </h1>
            <p>
              use <span> theme </span> prop to switch table to the dark theme.
            </p>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Dessert (100g serving)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Calories
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <TableContainer
          component={Paper}
          style={dark ? { backgroundColor: "#2B2C40" } : {}}
        >
          <div className="title">
            <h1 style={dark ? { color: "#fff" } : {}}>
              {selectLan == "Uzbek" ? "Zichlik" : ""}
              {selectLan == "English" ? "Density" : ""}
              {selectLan == "Russia" ? "Плотность" : ""}
            </h1>
            <p>
              You can show a dense version of the table by using the{" "}
              <span> density </span> prop.
            </p>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Dessert (100g serving)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Calories
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <TableContainer
          component={Paper}
          style={dark ? { backgroundColor: "#2B2C40" } : {}}
        >
          <div className="title">
            <h1 style={dark ? { color: "#fff" } : {}}>
              {selectLan == "Uzbek" ? "Balandligi" : ""}
              {selectLan == "English" ? "Height" : ""}
              {selectLan == "Russia" ? "Высота" : ""}
            </h1>
            <p>
              You can set the height of the table by using the{" "}
              <span> height </span> prop.
            </p>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Dessert (100g serving)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Calories
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <TableContainer
          component={Paper}
          style={dark ? { backgroundColor: "#2B2C40" } : {}}
        >
          <div className="title">
            <h1 style={dark ? { color: "#fff" } : {}}>
              {selectLan == "Uzbek" ? "Ruxsat etilgan sarlavha" : ""}
              {selectLan == "English" ? "Fixed Header" : ""}
              {selectLan == "Russia" ? "Фиксированное название" : ""}
            </h1>
            <p>
              You can fix the header of table by using the{" "}
              <span> fixed-header </span> prop.
            </p>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Dessert (100g serving)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Calories
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "1.7rem" }}
                  style={dark ? { color: "#A7A7AD" } : {}}
                >
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: "1.7rem" }}
                    style={dark ? { color: "#A7A7AD" } : {}}
                  >
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
              <span>Murojaat</span>
            </button>
          </div>
        </Link>

        <DashBottom />
      </div>
    </main>
  );
};

export default Tables;
