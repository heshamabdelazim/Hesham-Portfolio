export async function fetchingData(url: String, setData) {
    console.log("start fetchingData")
    try { 
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Sorry, network problem")
        }
        const data = await res.json();
        setData(data);
    } catch (err) {
        console.error("Error fetching data:", err);
        setData(null); // Or set a default value for data
    }
}