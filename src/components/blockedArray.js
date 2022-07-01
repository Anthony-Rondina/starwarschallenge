export default function blockedArray({ blockedArr, handleUnblock }) {
    return (
        <>
            <aside>Blocked Content</aside>
            {blockedArr.map((blockedName, index) => {
                return (
                    <div key={index}>
                        <div style={{ color: "red" }}>
                            {blockedName}
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
            })}
        </>
    );
}
