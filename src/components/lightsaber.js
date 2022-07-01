import styles from "./lightsaber.module.css";

export default function lightsaber({ igniteToggle, setIgniteToggle, blade, crown, hilt, pommel, ignitor }) {
    let bladeColor = blade
    let crownColor = crown
    let hiltColor = hilt
    let pommelColor = pommel
    let ignitorColor = ignitor
    return (
        <div className={styles.outerWrapper}>
            <div className={styles.lightsaberContainter}>
                <div

                    style={{ width: igniteToggle ? "400px" : "0px", backgroundColor: bladeColor }}
                    className={styles.blade}
                >
                    <div className={styles.beam}></div>
                </div>
                <div className={styles.hiltWrapper}>
                    <div style={{ backgroundColor: crownColor }} className={styles.topHilt}></div>
                    <div style={{ backgroundColor: hiltColor }} className={styles.handle}>
                        <div style={{ backgroundColor: ignitorColor }}
                            onClick={() => {
                                setIgniteToggle(!igniteToggle);
                            }}
                            className={styles.igniteSwitch}
                        ></div>
                    </div>
                    <div style={{ backgroundColor: pommelColor }} className={styles.pommel}></div>
                </div>
            </div>
        </div>
    );
}
