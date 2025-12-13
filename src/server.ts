import { app } from "@/app";
import { log } from "console";

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
