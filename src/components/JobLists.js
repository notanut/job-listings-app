const JobLists = ({company, logo, New, featured, position, role, level, postedAt, contract, location, languages, tools, handleFilter}) => {
    return (
        <div className={`list ${featured ? 'featuredlist' : ''}`}>
            <div className="list__information">
                    <img src={logo} alt={`${company} logo`} />
                    <div className="list__information__heading">
                        <div className="titles">
                            <span>{company}</span>
                            {New && <button className="new">new!</button>}
                            {featured && <button className="featured">featured</button>}                    
                        </div>

                    <h1>{position}</h1>

                        <ul className="list__information__desc">
                            <li>{postedAt}</li>
                            <li>•</li>
                            <li>{contract}</li>
                            <li>•</li>
                            <li>{location}</li>
                        </ul>
                    </div>

            </div>
            <div className="list__category">
                <button onClick={(e) => handleFilter(e)}>{role}</button>
                <button onClick={(e) => handleFilter(e)}>{level}</button>
                {languages}
                {tools}
            </div>
        </div>
    )
}

export default JobLists
