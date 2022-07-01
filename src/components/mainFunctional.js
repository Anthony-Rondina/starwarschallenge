import React, { useState, useEffect, useRef } from "react";
import starwars from "../APIs/starwars";
import Footer from "./footer";
import Header from "./header";
import ReturnedData from "./returnedData";
import BlockedArray from "./blockedArray";
function MainFunctional() {
    const [data, setData] = useState([]);
    const [igniteToggle, setIgniteToggle] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [revert, setRevert] = useState(false);
    const [blockedArr, setBlockedArr] = useState([]);
    const [formData, setFormData] = useState({
        searchTerm: ""
    });
    let searchTerm = useRef();
    let searchType = useRef();
    useEffect(() => {
        if (searchType.current.value == "people") {
            starwars.getPeople().then((response) => {
                // console.log("response", response);
                setData(response);
            });
        } else if (searchType.current.value == "planets") {
            starwars.getPlanets().then((response) => {
                // console.log("response", response);
                setData(response);
            });
        } else if (searchType.current.value == "ships") {
            starwars.getStarships().then((response) => {
                // console.log("response", response);
                setData(response);
            });
        } else {
            starwars.getPeople().then((response) => {
                // console.log("response", response);
                setData(response);
            });
        }
    }, [revert]);

    useEffect(() => { }, [toggle]);

    const handleBlock = (name) => {
        blockedArr.push(name);
        // console.log("blocked");
        setToggle(!toggle);
    };
    const handleUnblock = (name) => {
        let idx = blockedArr.indexOf(name);
        blockedArr.splice(idx, 1);
        // console.log("unblocking");
        setToggle(!toggle);
    };

    const sortAccending = () => {
        data.sort(function (a, b) {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        // console.log("sorting");
        setData(data);
        setToggle(!toggle);
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const sortDeccending = () => {
        data.sort(function (a, b) {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return textA < textB ? 1 : textA > textB ? -1 : 0;
        });
        // console.log("sorting");
        setData(data);
        setToggle(!toggle);
    };
    const checkInput = (input, name) => {
        for (let i = 0; i < input.length; i++) {
            if (input[i].toUpperCase() !== name[i].toUpperCase()) {
                return false;
            }
        }
        return true;
    };

    return (
        <div className="App">
            <Header
                handleChange={handleChange}
                searchTerm={searchTerm}
                revert={revert}
                setRevert={setRevert}
                formData={formData}
                searchType={searchType}
                sortAccending={sortAccending}
                sortDeccending={sortDeccending}
            />
            <ReturnedData
                data={data}
                formData={formData}
                blockedArr={blockedArr}
                handleBlock={handleBlock}
                checkInput={checkInput}
            />
            <BlockedArray blockedArr={blockedArr} handleUnblock={handleUnblock} />
            <Footer igniteToggle={igniteToggle} setIgniteToggle={setIgniteToggle} />
        </div>
    );
}

export default MainFunctional;
