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
            <div className={styles.buildSaber}>
                <select
                    onChange={() => {
                        setToggle(!toggle);
                    }}
                    ref={bladeColor}
                    id="pet-select"
                >
                    <option value="green">Choose your color!</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="cyan">Cyan</option>
                    <option value="goldenrod">Gold</option>
                    <option value="purple">Purple</option>
                </select>
                <select
                    onChange={() => {
                        setToggle(!toggle);
                    }}
                    ref={ignitionColor}
                    id="pet-select"
                >
                    <option value="red">Ignition Switch!</option>
                    <option value="gray">Gray</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="cyan">Cyan</option>
                    <option value="goldenrod">Gold</option>
                    <option value="purple">Purple</option>
                </select>
                <select
                    onChange={() => {
                        setToggle(!toggle);
                    }}
                    ref={crownColor}
                    id="pet-select"
                >
                    <option value="black">Choose your Crown!</option>
                    <option value="gray">Gray</option>
                    <option value="blue">Blue</option>
                    <option value="darkred">Red</option>
                    <option value="cyan">Cyan</option>
                    <option value="goldenrod">Gold</option>
                    <option value="purple">Purple</option>
                </select>
                <select
                    onChange={() => {
                        setToggle(!toggle);
                    }}
                    ref={hiltColor}
                    id="pet-select"
                >
                    <option value="gray">Choose your Hilt!</option>
                    <option value="brown">Brown</option>
                    <option value="blue">Blue</option>
                    <option value="darkred">Red</option>
                    <option value="cyan">Cyan</option>
                    <option value="goldenrod">Gold</option>
                    <option value="yellow">Yellow</option>
                </select>
                <select
                    onChange={() => {
                        setToggle(!toggle);
                    }}
                    ref={pommelColor}
                    id="pet-select"
                >
                    <option value="black">Choose your Pommel!</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="darkred">Red</option>
                    <option value="cyan">Cyan</option>
                    <option value="goldenrod">Gold</option>
                    <option value="purple">Purple</option>
                </select>
            </div>
        </footer>
    );
}
