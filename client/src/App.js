import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: form,
    });
    console.log(res);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          name="amount"
          value={form.amount}
          type="number"
          placeholder="Enter transaction amount"
        />
        <input
          onChange={handleInput}
          name="description"
          value={form.description}
          type="text"
          placeholder="Enter transaction details"
        />
        <input
          onChange={handleInput}
          name="date"
          value={form.date}
          type="date"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
