import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res, next) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("server running..!"));
