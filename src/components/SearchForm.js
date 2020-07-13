import React,{useRef,useEffect} from "react";

export default function SearchForm({setSearchTerm}) {
  const searchValue = useRef("")
  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleChange=()=>{
    setSearchTerm(searchValue.current.value)
    console.log(searchValue.current.value)
  }
  return (
    <section className="section">
      <h2 className="section-title">Search Cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favourite cocktail</label>
          <input type="text" name="name" ref={searchValue} onChange={handleChange}/>
        </div>
      </form>
    </section>
  );
}
