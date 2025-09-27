import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../utilities/types";

interface PlatformPros {
  selectedPlatform: Platform["id"] | null;
  onSelectedPlatform: (platformId: Platform["id"] | null) => void;
}

const PlatFormList = ({
  selectedPlatform,
  onSelectedPlatform,
}: PlatformPros) => {
  const { data } = usePlatforms();

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Platform
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedPlatform}
          onChange={(event) => {
            const intval = event?.target.value
              ? (event?.target.value as number)
              : null;
            onSelectedPlatform(intval);
          }}
          autoWidth
          label="Platform"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map((platform) => (
            <MenuItem key={platform.id} value={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default PlatFormList;
