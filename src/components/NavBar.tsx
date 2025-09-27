import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import SearchInput from "./SearchInput";
interface NavBarProps {
  toggleTheme: () => void;
  currentMode: boolean;
  onSearchSubmit: (str: string) => void;
}
const NavBar = ({ toggleTheme, currentMode, onSearchSubmit }: NavBarProps) => {
  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <div style={{ margin: "2px", width: "100%" }}>
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", width: "10%" }}>
              <SportsEsportsIcon
                sx={{ display: { xs: "flex", md: "flex" }, margin: 0.7 }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "none", md: "block", lg: "block" },
                }}
              >
                Game Hub
              </Typography>
            </div>
            <div style={{ display: "flex", width: "65%" }}>
              <SearchInput onSearchSubmit={onSearchSubmit} />
            </div>

            <div
              style={{
                display: "flex",
                width: "15%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {currentMode ? (
                <Typography
                  className="switch-text"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                >
                  Dark Theme
                </Typography>
              ) : (
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                >
                  Light Theme
                </Typography>
              )}
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
