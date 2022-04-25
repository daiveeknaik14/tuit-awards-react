const Award = ({award, refreshawards}) => {
    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    <><h1>{award.name} : {award.coins}</h1></>
                }
            </ul>
        </div>
    );
}

export default Award;