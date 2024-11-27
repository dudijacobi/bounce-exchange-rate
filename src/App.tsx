import { useEffect, useState } from "react";
import { fetchUSDILSExchangeRate } from "./services/get.services";
import { DiagramSeries, getDiagramData } from "./Diagram/utils";
import Diagram from "./Diagram";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DiagramSeries[]>([]);

  useEffect(() => {
    setLoading(true);

    const promises = [];
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 2);
    let loop = new Date();

    while (loop >= twoWeeksAgo) {
      let newDate = new Date(loop.setDate(loop.getDate() - 1));
      promises.push(fetchUSDILSExchangeRate(new Date(newDate)));
      console.log(1)
      loop = new Date(newDate);
    }

    Promise.all(promises)
      .then(function (res) {
        const diagramData = getDiagramData(res);
        setData(diagramData);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Exchange Rate</h1>
        <h3 className="title">between USD and ILS</h3>
      </header>
      {loading && <p className="title">Loading... Please wait.</p>}
      {(data.length > 0 && !loading) && <Diagram data={data} />}
    </div>
  );
}

export default App;
