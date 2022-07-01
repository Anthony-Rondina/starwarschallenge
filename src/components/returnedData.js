import styles from "./returnData.module.css"
export default function ReturnedData({
    data,
    formData,
    blockedArr,
    handleBlock,
    checkInput
}) {
    return (
        <article>
            {data.map((item, index) => {
                for (let i = 0; i < formData.searchTerm.length; i++) {
                    if (blockedArr.includes(`${item.name}`)) {
                        return "";
                    } else if (checkInput(formData.searchTerm, item.name)) {
                        return (
                            <div className={styles.post} key={index}>
                                <h2>{item.name}</h2>
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
                                <h2>{item.name}</h2>
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
            })}
        </article>
    );
}
