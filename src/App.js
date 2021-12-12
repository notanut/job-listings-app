import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import JobLists from "./components/JobLists";
import datas from "./datas"


function App() {
  const [filters, setFilters] = useState([])

  const filterJobs = ({role, level, tools, languages}) => {
    let categories = [role, level]

    if (tools) {
      categories.push(...tools)
    }

    if (languages) {
      categories.push(...languages)
    }

    return filters.every(filter => categories.includes(filter))
  }

  const handleFilter = (e) => {
    const category = e.target.innerText
    if (!filters.includes(category)) setFilters([...filters, category])
    console.log(filters)
  }

  const handleDelete = (category) => {
    setFilters(filters.filter((filter) => filter !== category))
  }

  const handleClear = () => {
    setFilters([])
  }

  const filteredJobs = datas.filter(filterJobs)

  const displayButton = filters.map((filter) => (
    <Button 
    category={filter} 
    onDelete={handleDelete}
    />
  ))

  const displayJobs = filteredJobs.map((data) => (
    <JobLists 
    key={data.id}
    logo={data.logo}
    company={data.company}
    New={data.new}
    featured={data.featured}
    position={data.position}
    postedAt={data.postedAt}
    contract={data.contract}
    location={data.location}
    role={data.role}
    level={data.level}
    languages={data.languages.map((language) => (<button onClick={(e) => handleFilter(e)}>{language}</button>))}
    tools={data.tools.map((tool) => <button onClick={(e) => handleFilter(e)}>{tool}</button>)}
    handleFilter={handleFilter}
    />
  ))




  return (
    <>
      <Header />

      <main>

        {filters.length > 0 ?
        <div className="filter">
          <div className="filter__categories">
            {displayButton}
        </div>

          <button 
          className="filter__clear"
          onClick={handleClear}
          >
            Clear
          </button>
        </div> : ''
        }

        {displayJobs}
      </main>
    </>
  );
}

export default App;
