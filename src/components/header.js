import styles from "./header.module.css";

export default function header({
    handleChange,
    searchTerm,
    revert,
    setRevert,
    formData,
    searchType,
    sortAccending,
    sortDeccending,
    blockToggle,
    setBlockToggle
}) {
    return (
        <header>
            <nav>
                <h1>Search the Galaxy!</h1>
                <div className={styles.topItem}>
                    <select
                        className={styles.topSelect}
                        onChange={() => {
                            setRevert(!revert);
                        }}
                        ref={searchType}
                        id="pet-select"
                    >
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="ships">Ships</option>
                    </select>
                    <form>
                        <input
                            onChange={handleChange}
                            name="searchTerm"
                            placeholder="Enter Name"
                            ref={searchTerm}
                            value={formData.searchTerm}
                        />
                    </form>
                </div>
                <div className={styles.sortDiv}>
                    <button
                        onClick={() => {
                            sortAccending();
                        }}
                    >
                        Sort A-Z
                    </button>
                    <button
                        onClick={() => {
                            setRevert(!revert);
                        }}
                    >
                        Revert
                    </button>
                    <button
                        onClick={() => {
                            sortDeccending();
                        }}
                    >
                        Sort Z-A
                    </button>
                </div>
                <button onClick={() => { setBlockToggle(!blockToggle) }} className={styles.blockedButton}>Blocked Content</button>
            </nav>
        </header>
    );
}
