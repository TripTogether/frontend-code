import style from '../../pages/List/List.module.css';
function SearchBar({onClick,onChange}) {
    return (
        <div className={style.searchbar}>
         <input type="search"
          className="form-control rounded"
          onChange={onChange}
        />
        <button type="button" onClick={onClick}>
          검색
        </button>
      
        </div>
    )
}

export default SearchBar;