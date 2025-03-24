import {IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import {useState} from "react";
import {Close, Search} from "@mui/icons-material";

interface SearchBarProps {
    searchText: string;
}

const SearchBar = ({searchText}: SearchBarProps) => {
    const [inputValue, setInputValue] = useState(searchText);

    const handleClearInput = () => {
        setInputValue("");
    }

    return <OutlinedInput
        value={inputValue}
        fullWidth
        autoFocus={!!inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        startAdornment={
            <InputAdornment position="start">
                    <Search />
            </InputAdornment>
        }
        {...inputValue !== '' && {
            endAdornment:
                <InputAdornment position="end">
                    <IconButton onClick={handleClearInput}>
                        <Close />
                    </IconButton>
                </InputAdornment>
            }
        }
    />


}

export default SearchBar;
