import Filter, {FilterProps} from "../components/filter";
import {Box, Typography} from "@mui/material";

interface props {
    filters: FilterProps[];
}
const FiltersContainer = ({filters = []}: props) => {
    return <Box my={2}>
        {
            filters?.length > 0 && <>
                <Typography variant="subtitle2" gutterBottom>Filters</Typography>
                {
                    filters.map((filter, index) => (
                        <Filter key={`${filter.type}-${index}`} type={filter.type} filterItems={filter.filterItems} />
                    ))
                }
            </>
        }
    </Box>
}

export default FiltersContainer;