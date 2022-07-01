export default function ReturnedData({
    data,
    formData,
    blockedArr,
    handleBlock,
    checkInput
}) {
    return (
        <>
            {data.map((item, index) => {
                for (let i = 0; i < formData.searchTerm.length; i++) {
                    if (blockedArr.includes(`${item.name}`)) {
                        return "";
                    } else if (checkInput(formData.searchTerm, item.name)) {
                        return (
                            <div key={index}>
                                name: {item.name}
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
                            <div key={index}>
                                name: {item.name}
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
        </>
    );
}
