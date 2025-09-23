import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
interface NavBarProps {
  toggleTheme: () => void;
  currentMode: boolean;
}
const NavBar = ({ toggleTheme, currentMode }: NavBarProps) => {
  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <div style={{ margin: "2px", width: "98%" }}>
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <SportsEsportsIcon
                sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
              />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Game Hub
              </Typography>
            </div>

            <div>
              {currentMode ? "Dark Theme" : "Light Theme"}
              <Switch
                checked={currentMode}
                onChange={() => {
                  toggleTheme();
                }}
                slotProps={{ input: { "aria-label": "controlled" } }}
              />
            </div>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default NavBar;
