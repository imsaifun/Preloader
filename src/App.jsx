import React, { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? "loading..." : "hello"}</div>;
}