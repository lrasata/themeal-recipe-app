import {IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import {SetStateAction, useEffect, useState} from "react";
import {Close, Search} from "@mui/icons-material";

interface SearchBarProps {
    handleSearch: (searchText: string) => void;
}

const DEBOUNCE_TIME = 700;

const SearchBar = ({handleSearch}: SearchBarProps) => {
    const [inputValue, setInputValue] = useState("");
    const [debouncedInputValue, setDebouncedInputValue] = useState("")

    const handleClearInput = () => {
        setInputValue("");
    }

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedInputValue(inputValue);
        }, DEBOUNCE_TIME);
        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    useEffect(() => {
        handleSearch(debouncedInputValue)
    }, [debouncedInputValue]);

    return <OutlinedInput
        value={inputValue}
        fullWidth
        autoFocus={!!inputValue}
        onChange={handleInputChange}
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
