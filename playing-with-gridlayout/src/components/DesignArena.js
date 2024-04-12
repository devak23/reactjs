import React, {useState} from "react";
import GridLayout from "react-grid-layout";
import "./DesignArena.css"
import {getCards, getLayout} from "../data/Elements";

const DesignArena = () => {
    const [layout, setLayout] = useState(getLayout())

    const handleShowLayout = () => {
        console.log(layout);
    }

    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="grid">
                <GridLayout
                    layout={layout}
                    cols={12}
                    rowHeight={30}
                    width={1200}
                    compactType={null}
                    margin={[5, 5]}
                    containerPadding={[1, 1]}
                    onLayoutChange={handleLayoutChange}
                >
                    {getCards()}

                </GridLayout>
            </div>
            <button style={{margin: "auto", height: 30}} onClick={handleShowLayout}>Show Layout</button>
        </div>
    )
}

export default DesignArena;
