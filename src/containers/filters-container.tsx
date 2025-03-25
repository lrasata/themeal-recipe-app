import Filter, {FilterProps} from "../components/filter";
import {Typography} from "@mui/material";

interface props {
    filters: FilterProps[];
}
const FiltersContainer = ({filters = []}: props) => {
    return <>
        {
            filters?.length > 0 && <>
                <Typography component="h4" variant="h4" gutterBottom>Filters</Typography>
                {
                    filters.map((filter) => (
                        <Filter type={filter.type} filterItems={filter.filterItems} />
                    ))
                }
            </>
        }
    </>
}

export default FiltersContainer;