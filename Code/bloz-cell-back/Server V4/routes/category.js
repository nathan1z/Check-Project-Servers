const express = require("express");
const router = express.Router();
const {
  getItems,
  getItemByID,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/category");

/**
 * Crear un registro
 */
router.post("/", createItem);

/**
 * Listar todos los items
 */
router.get("/", getItems);

/**
 * Obtener detalle de item por ID
 */
router.get("/:idCategoria", getItemByID);

/**
 * Obtener detalle de item por nombre

router.get("/:name", getItemByName);
 */

/**
 * Actualizar un registro por ID
 */
router.put("/:idCategoria", updateItem);

/**
 * Eliminar un registro por ID
 */
router.delete("/:idCategoria", deleteItem);

module.exports = router;
