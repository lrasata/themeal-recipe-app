import {Accordion, AccordionDetails, AccordionSummary, Stack, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterItemChip from "./filter-item-chip";
import {capitalizeFirstLetter} from "../util/util";
import {FilterProps} from "./types";

const Filter = ({type, filterItems = []}: FilterProps) => {

    const handleClick = (): void => {
        alert('Feature is not implemented yet.');
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`filter-content-${type}`}
                id={`filter-panel-header-${type}`}
            >
                <Typography component="span" variant="body2">{capitalizeFirstLetter(type)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
                    {
                        filterItems.map(filterItem => (
                            <FilterItemChip key={`filter-panel-header-${type}-${filterItem.name}`} name={filterItem.name} selected={filterItem.selected} onClick={handleClick} />
                        ))
                    }
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}

export default Filter;