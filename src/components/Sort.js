function Sort({ setSort }) {

return(

<select
onChange={(e)=>setSort(e.target.value)}
>

<option value="">
Sort By
</option>

<option value="low">
Price Low → High
</option>

<option value="high">
Price High → Low
</option>

<option value="name">
Name A-Z
</option>

</select>

)

}

export default Sort;