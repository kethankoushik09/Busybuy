import { useItem } from "../components/UserContext"
export function Filters(){
    const {filters,activeFilters,SetActiveFilters,onUpdated} = useItem();
    // function handleFilter(val) {
    //     var temp_data;
    //     if (!activeFilters.includes(val)) {
    //         temp_data = [...activeFilters, val] // Using spread to ensure immutability
    //     } else {
    //         temp_data = activeFilters.filter(item => item !== val); // Removes the item
    //     }
    //     SetActiveFilters(temp_data);
    //     onUpdated()

    // }
    function handleFilter(val) {
        const temp_data = activeFilters.includes(val)
            ? activeFilters.filter(item => item !== val)  
            : [...activeFilters, val];  
        SetActiveFilters(temp_data);  
    }
    return(
        <>
            <h3>{filters.id}</h3>
            <div className="category-section">
                {filters.Options.map((item,idx)=>(
                    <div>
                        <input type="checkbox" name={item.name} id={item.value} 
                        onChange={()=>handleFilter(item.value)}/>
                        <label for={item.value}>{item.label}</label>
                    </div>

                ))}
            </div>
        </>
    )
}