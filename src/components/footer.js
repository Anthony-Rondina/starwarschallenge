import Lightsaber from "./lightsaber";
import React, { useState, useEffect, useRef } from "react";
import styles from "./footer.module.css"
export default function Footer({ toggle, setToggle, igniteToggle, setIgniteToggle }) {
    const bladeColor = useRef("green")
    let chosenBlade = bladeColor.current.value
    const crownColor = useRef("black")
    const hiltColor = useRef("gray")
    const ignitionColor = useRef("red")
    let chosenIgnitor = ignitionColor.current.value
    const pommelColor = useRef("black")
    let chosenCrown = crownColor.current.value
    let chosenHilt = hiltColor.current.value
    let chosenPommel = pommelColor.current.value
    return (
        <footer>
            <Lightsaber
                igniteToggle={igniteToggle}
                setIgniteToggle={setIgniteToggle}
                blade={chosenBlade}
                crown={chosenCrown}
                hilt={chosenHilt}
                pommel={chosenPommel}
                ignitor={chosenIgnitor}

            />
            <div className={styles.saberWrapper}>
                <div className={styles.buildSaber}>
                    <div className={styles.bladeSection}>
                        <span>Blade:</span>
                        <select
                            onChange={() => {
                                setToggle(!toggle);
                            }}
                            ref={bladeColor}
                            id="pet-select"
                        >

                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="cyan">Cyan</option>
                            <option value="goldenrod">Gold</option>
                            <option value="purple">Purple</option>
                        </select>
                    </div>
                    <div className={styles.ignitionSection}>
                        <span>Ignition Switch:</span>
                        <select
                            onChange={() => {
                                setToggle(!toggle);
                            }}
                            ref={ignitionColor}
                            id="pet-select"
                        >
                            <option value="red">Cortosis</option>
                            <option value="gray">Beskar</option>
                            <option value="blue">Dragon's Eye</option>
                            <option value="brown">Wroshyr tree</option>
                            <option value="goldenrod">Aurodium</option>
                            <option value="purple">Purple</option>
                        </select>
                    </div>
                    <div className={styles.crownSection}>
                        <span>Emitter:</span>
                        <select
                            onChange={() => {
                                setToggle(!toggle);
                            }}
                            ref={crownColor}
                            id="pet-select"
                        >
                            <option value="black">Numidium</option>
                            <option value="gray">Beskar</option>
                            <option value="blue">Dragon's Eye</option>
                            <option value="darkred">Cortosis</option>
                            <option value="brown">Wroshyr tree</option>
                            <option value="goldenrod">Aurodium</option>
                            <option value="green">Fiberplast</option>
                        </select>
                    </div>
                    <div className={styles.hiltSection}>
                        <span>Hilt:</span>
                        <select
                            onChange={() => {
                                setToggle(!toggle);
                            }}
                            ref={hiltColor}
                            id="pet-select"
                        >

                            <option value="gray">Beskar</option>
                            <option value="black">Numidium</option>
                            <option value="brown">Wroshyr tree</option>
                            <option value="blue">Dragon's Eye</option>
                            <option value="darkred">Cortosis</option>
                            <option value="goldenrod">Aurodium</option>
                            <option value="green">Fiberplast</option>
                        </select>
                    </div>
                    <div className={styles.pommelSection}>
                        <span>Pommel:</span>
                        <select
                            onChange={() => {
                                setToggle(!toggle);
                            }}
                            ref={pommelColor}
                            id="pet-select"
                        >
                            <option value="black">Numidium</option>
                            <option value="green">Fiberplast</option>
                            <option value="blue">Dragon's Eye</option>
                            <option value="darkred">Cortosis</option>
                            <option value="brown">Wroshyr tree</option>
                            <option value="goldenrod">Aurodium</option>
                            <option value="gray">Beskar</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}
