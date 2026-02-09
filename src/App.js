import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/lead", {
        ...form,
        token,
      });

      alert("Lead saved successfully!");

      // ✅ Reset form & logout user
      setForm({ name: "", phone: "" });
      setToken(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save lead");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Lead Registration</h2>

        {!token && (
          <div className="google-btn">
            <GoogleLogin
              onSuccess={(res) => setToken(res.credential)}
              onError={() => alert("Google login failed")}
            />
          </div>
        )}

        {token && (
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Lead"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
