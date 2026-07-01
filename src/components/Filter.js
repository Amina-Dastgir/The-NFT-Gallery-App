function Filter({ setCategory }) {

return(

<select
onChange={(e)=>setCategory(e.target.value)}
>

<option value="All">
All Categories
</option>

<option value="Art">
Art
</option>

<option value="Gaming">
Gaming
</option>

<option value="Music">
Music
</option>

<option value="Collectible">
Collectible
</option>

</select>

)

}

export default Filter;