import Lightsaber from "./lightsaber";

export default function Footer({ igniteToggle, setIgniteToggle }) {
    return (
        <footer>
            <Lightsaber
                igniteToggle={igniteToggle}
                setIgniteToggle={setIgniteToggle}
            />
        </footer>
    );
}
