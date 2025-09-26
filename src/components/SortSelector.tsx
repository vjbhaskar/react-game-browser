import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface SortSelectorProps {
  selectedSort: string | null;
  onSelectedSort: (sort: string | null) => void;
}

const SortSelector = ({ selectedSort, onSelectedSort }: SortSelectorProps) => {
  const sortOrder = [
    { value: " ", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Sort by:</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={selectedSort}
        onChange={(event) => {
          const intval = event?.target.value
            ? (event?.target.value as string)
            : null;
          onSelectedSort(intval);
        }}
        autoWidth
        label="Sort by:"
      >
        {sortOrder.map((sortItem) => (
          <MenuItem value={sortItem.value}>
            <em> {sortItem.label} </em>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelector;
