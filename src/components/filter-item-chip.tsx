import {FilterItemProps} from "./filter";
import {Chip} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FilterItem = ({name, selected, onClick}: FilterItemProps) => {
    return (
        <>
            {
                selected ? <Chip icon={<CheckCircleOutlineIcon/>} label={name} variant="outlined" color="success" onClick={onClick}/> :
                    <Chip icon={<AddCircleOutlineIcon/>} label={name} variant="outlined" onClick={onClick} />
            }
        </>
    )
}

export default FilterItem;