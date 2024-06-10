import express from "express";
import cors from "cors";
import pino from "pino";
import pinoHttp from "pino-http";
import { getContacts, getContactById } from "./controllers/contactsController.js";

const logger = pino();
const pinoMiddleware = pinoHttp({ logger });

const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(pinoMiddleware);

  app.get("/contacts", getContacts);
  app.get("/contacts/:contactId", getContactById);

  app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer;
