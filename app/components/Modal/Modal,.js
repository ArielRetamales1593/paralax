import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./Modal.module.css";
import agregarCotizacion from "@/app/function/agregarCotizacion";

export default function FormDialog({ productos }) {
  const [nombreUsuario, setnombreUsuario] = React.useState("");
  const [emailUsuario, setEmailUsuario] = React.useState("");
  const [telUsuario, setTelUsuario] = React.useState("");
  const [comentUsuario, setComentUsuario] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const nombre = productos.nombre;
    const tipo = productos.tipo;
    const material = productos.material;
    const valor = productos.valor;
    const categoria = productos.categoria;

    console.log("hola ", nombre, valor, tipo);

    const data1 = {
      nombre,
      tipo,
      material,
      valor,
      categoria,

      nombreUsuario,
      emailUsuario,
      telUsuario,
      comentUsuario,
    };
    await agregarCotizacion(data1);
    setnombreUsuario(""); // Limpiar el estado después de enviar
    setEmailUsuario("");
    setTelUsuario("");
    setComentUsuario("");
    handleClose();
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  {
    /* <div className={styles.contForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="correo">Nombre:</label>
            <input type="text" id="usuario" name="usuario" required />
            <br />

            <br />

            <label htmlFor="emailUsuario">Correo:</label>
            <input type="text" id="emailUsuario" name="emailUsuario" />
            <br />

            <label htmlFor="telUsuario">Celular:</label>
            <input type="text" id="telUsuario" name="telUsuario" />
            <br />

            <button type="submit" className={styles.boton}>
              Cotizar
            </button>
          </form>
        </div> */
  }

  return (
    <div className={styles.contBoton}>
      <Button className={styles.cotizar} onClick={handleClickOpen}>
        Cotizar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={styles.modal}>
          <DialogContentText className={styles.modal}>
            <h2>{productos.nombre}</h2>
            <p>{productos.material}</p>
          </DialogContentText>

          <div className={styles.contForm}>
            <form className={styles.form}>
              <TextField
                autoFocus
                margin="dense"
                id="nombreUsuario"
                label="Nombre"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setnombreUsuario(e.target.value)}
              />

              <TextField
                autoFocus
                margin="dense"
                id="emailUsuario"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e) => setEmailUsuario(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="tellUsuario"
                label="Telefono"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setTelUsuario(e.target.value)}
              />

              <TextField
                autoFocus
                margin="dense"
                id="comentUsuario"
                label="Comentario"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setComentUsuario(e.target.value)}
              />

              <button
                className={styles.cotizar}
                onClick={handleSubmit}
                type="input"
              >
                Confirmar
              </button>
            </form>
          </div>
        </DialogContent>
        <DialogActions className={styles.modal}>
          <Button onClick={handleClose}>cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
