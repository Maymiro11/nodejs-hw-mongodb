import createHttpError from "http-errors";
import {
  createContact as createContactService,
  deleteContact as deleteContactService,
  getAllContacts,
  getContactById as getContactByIdService,
  updateContact as updateContactService,
} from "../services/contacts.js";

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: "Successfully found contacts!",
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactByIdService(contactId);
    if (!contact) {
      return next(createHttpError(404, "Contact not found"));
    }

    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    const contact = await createContactService(req.body);

    res.status(201).json({
      status: 201,
      message: "Successfully created a contact!",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await updateContactService(contactId, req.body);

    if (!result) {
      return next(createHttpError(404, "Contact not found"));
    }

    res.status(200).json({
      status: 200,
      message: "Successfully updated a contact!",
      data: result.contact,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await deleteContactService(contactId);

    if (!contact) {
      return next(createHttpError(404, "Contact not found"));
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
