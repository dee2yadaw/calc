import React, { useState } from 'react';

function App() {
  const [percentOf, setPercentOf] = useState({ percent: '', total: '', result: '' });
  const [percentIs, setPercentIs] = useState({ value: '', total: '', result: '' });
  const [percentChange, setPercentChange] = useState({ from: '500', to: '1000', result: '100' });

  const calculatePercentOf = () => {
    const result = (parseFloat(percentOf.percent) / 100) * parseFloat(percentOf.total);
    setPercentOf({ ...percentOf, result: isNaN(result) ? '' : result.toFixed(2) });
  };

  const calculatePercentIs = () => {
    const result = (parseFloat(percentIs.value) / parseFloat(percentIs.total)) * 100;
    setPercentIs({ ...percentIs, result: isNaN(result) ? '' : result.toFixed(2) });
  };

  const calculatePercentChange = () => {
    const result = ((parseFloat(percentChange.to) - parseFloat(percentChange.from)) / parseFloat(percentChange.from)) * 100;
    setPercentChange({ ...percentChange, result: isNaN(result) ? '' : result.toFixed(2) });
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <div className="bg-black text-blue-400 p-2 text-2xl font-bold">%</div>
        <h1 className="text-2xl font-bold">Percentage Calculator</h1>
      </div>
      <p>Percentage Calculator is a free online tool to calculate percentages.</p>

      <div className="bg-gray-100 p-4 rounded-md space-y-4">
        <div className="flex items-center space-x-2">
          <span>What is</span>
          <input
            value={percentOf.percent}
            onChange={(e) => setPercentOf({ ...percentOf, percent: e.target.value })}
            className="border p-1 w-20"
          />
          <span>% of</span>
          <input
            value={percentOf.total}
            onChange={(e) => setPercentOf({ ...percentOf, total: e.target.value })}
            className="border p-1 w-32"
          />
          <span>?</span>
          <button onClick={calculatePercentOf} className="bg-blue-500 text-white px-2 py-1 rounded">CALCULATE</button>
          <input value={percentOf.result} readOnly className="border p-1 w-32" />
        </div>

        <div className="flex items-center space-x-2">
          <input
            value={percentIs.value}
            onChange={(e) => setPercentIs({ ...percentIs, value: e.target.value })}
            className="border p-1 w-32"
          />
          <span>is what percent of</span>
          <input
            value={percentIs.total}
            onChange={(e) => setPercentIs({ ...percentIs, total: e.target.value })}
            className="border p-1 w-32"
          />
          <span>?</span>
          <button onClick={calculatePercentIs} className="bg-blue-500 text-white px-2 py-1 rounded">CALCULATE</button>
          <input value={percentIs.result} readOnly className="border p-1 w-20" />
          <span>%</span>
        </div>

        <div>
          <span>What is the percentage increase/decrease</span>
          <div className="flex items-center space-x-2 mt-2">
            <span>from</span>
            <input
              value={percentChange.from}
              onChange={(e) => setPercentChange({ ...percentChange, from: e.target.value })}
              className="border p-1 w-32"
            />
            <span>to</span>
            <input
              value={percentChange.to}
              onChange={(e) => setPercentChange({ ...percentChange, to: e.target.value })}
              className="border p-1 w-32"
            />
            <span>?</span>
            <button onClick={calculatePercentChange} className="bg-blue-500 text-white px-2 py-1 rounded">CALCULATE</button>
            <input value={percentChange.result} readOnly className="border p-1 w-20" />
            <span>%</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-sm text-gray-600">
          Tips: Use tab to move to the next field. Use shift+tab to move to the previous field. Press enter to calculate.
        </p>
      </div>
    </div>
  );
}

export default App;