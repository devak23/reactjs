import GridLayout from "react-grid-layout";

const DesignArena = () => {
  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 1 },
    { i: "2", x: 1, y: 0, w: 1, h: 1 },
    { i: "3", x: 2, y: 0, w: 1, h: 1 },
    { i: "4", x: 3, y: 0, w: 1, h: 1 },
    { i: "5", x: 3, y: 0, w: 1, h: 1 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={20}
      width={1200}
      style={{ border: "1px solid black" }}
    >
      <div className="card" key="1">
        Amount
      </div>
      <div className="card" key="2">
        Bank
      </div>
      <div className="card" key="3">
        Branch
      </div>
      <div className="card" key="4">
        CCN Number
      </div>
      <div className="card" key="5">
        Logo
      </div>
    </GridLayout>
  );
};

export default DesignArena;
