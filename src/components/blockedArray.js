import styles from "./blockedArray.module.css"
export default function blockedArray({ blockedArr, handleUnblock }) {
    return (
        <aside className={styles.blockedList}>
            <p>Blocked Content</p>
            <div className={styles.results}>
                {
                    blockedArr.map((blockedName, index) => {
                        return (
                            <div className={styles.options} key={index}>
                                <div style={{ color: "red" }}>
                                    <p>{blockedName}</p>
                                    <button
                                        onClick={() => {
                                            handleUnblock(blockedName);
                                        }}
                                    >
                                        Unblock
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </aside >
    );
}
