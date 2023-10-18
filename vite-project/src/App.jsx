import React, { useState, useEffect } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  // Side effect untuk mengecek jika count mencapai angka 10
  useEffect(() => {
    if (count === 10) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h2> TUGAS MODUL 3 | KEL 11 </h2>
      <h1>Counter</h1>
      <p>
        Nilai Counter:
        <br />
        {count}
      </p>
      <button onClick={increment}>Tambah</button>
      {showMessage && (
        <p className="success-message">
          Anda telah mencapai angka 10!
          <br />
          Lanjutkan counter atau reload page untuk mengulang counter.
        </p>
      )}
    </div>
  );
}

export default Counter;
