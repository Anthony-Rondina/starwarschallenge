import styles from "./lightsaber.module.css";

export default function lightsaber({ igniteToggle, setIgniteToggle }) {
    return (
        <div className={styles.outerWrapper}>
            <div className={styles.lightsaberContainter}>
                <div
                    style={{ width: igniteToggle ? "400px" : "0px" }}
                    className={styles.blade}
                >
                    <div className={styles.beam}></div>
                </div>
                <div className={styles.hiltWrapper}>
                    <div className={styles.topHilt}></div>
                    <div className={styles.handle}>
                        <div
                            onClick={() => {
                                setIgniteToggle(!igniteToggle);
                            }}
                            className={styles.igniteSwitch}
                        ></div>
                    </div>
                    <div className={styles.pommel}></div>
                </div>
            </div>
        </div>
    );
}
