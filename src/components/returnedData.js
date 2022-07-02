import styles from "./returnData.module.css"
export default function ReturnedData({
    data,
    formData,
    blockedArr,
    handleBlock,
    checkInput,
    searchType,
    loading
}) {
    if (loading) {
        return (
            <h2>Loading</h2>
        )
    } else {
        return (
            <article>
                {data.map((item, index) => {
                    for (let i = 0; i < formData.searchTerm.length; i++) {
                        if (blockedArr.includes(`${item.name}`)) {
                            return "";
                        } else if (checkInput(formData.searchTerm, item.name)) {
                            return (
                                <div className={styles.post} key={index}>

                                    <h2 className={styles.postHeader}>{item.name}</h2>
                                    <button
                                        onClick={() => {
                                            handleBlock(item.name);
                                        }}
                                    >
                                        Force Block
                                    </button>
                                </div>
                            );
                        }
                    }
                    if (!formData.searchTerm) {
                        if (blockedArr.includes(`${item.name}`)) {
                            return "";
                        } else {
                            return (
                                <div className={styles.post} key={index}>
                                    <h2 className={styles.postHeader}>{item.name}</h2>

                                    <ul>
                                        {console.log(searchType)}
                                        {searchType == "people" ? <li>Gender: {item.gender}</li> : searchType == "ships" ? <li>Cost: {item.cost_in_credits}</li> : <li>Year Length: {`${item.orbital_period} days`}</li>}
                                        {searchType == "people" ? <li>Eye Color: {item.gender}</li> : searchType == "ships" ? <li>Crew: {item.crew}</li> : <li>Type: {item.terrain}</li>}
                                        {searchType == "people" ? <li>Birth Year: {item.birth_year}</li> : searchType == "ships" ? <li>Hyperdrive Rating: {item.hyperdrive_rating}</li> : <li>Population: {item.population}</li>}
                                    </ul>
                                    <button
                                        id={styles.blockButton}
                                        onClick={() => {
                                            handleBlock(item.name);
                                        }}
                                    >
                                        Force Block
                                    </button>
                                </div>
                            );
                        }
                    }
                })}
            </article>
        );
    }
}
