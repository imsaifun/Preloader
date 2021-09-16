import { useEffect, useState } from "react";
const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        window.addEventListener("load", handleLoading);
        return () => window.removeEventListener("load", handleLoading);
    }, []);

    return isLoading ? "Loading" : " Content";
};

export default App;
