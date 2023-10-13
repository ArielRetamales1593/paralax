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
import createContacto from "@/app/function/createContacto";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export default function FormDialog({ productos }) {
  const [nombreUsuario, setnombreUsuario] = React.useState("");
  const [emailUsuario, setEmailUsuario] = React.useState("");
  const [telUsuario, setTelUsuario] = React.useState("");
  const [comentUsuario, setComentUsuario] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const nombre = productos.nombre;
    const tipo = productos.tipo;

    const valor = productos.valor;
    const categoria = productos.categoria;

    console.log("hola ", nombre, valor, tipo);

    const data1 = {
      nombre,
      tipo,

      valor,
      categoria,

      nombreUsuario,
      emailUsuario,
      telUsuario,
      comentUsuario,
    };

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Nos comunicaremos contigo dentro de las proximas 48 hrs",
      showConfirmButton: false,
      timer: 2500,
    });

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
      <button
        className={`${styles.cotizar} ${ptSans.className}`}
        onClick={handleClickOpen}
        type="input"
      >
        COTIZAR
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        className={`${styles.cont} ${ptSans.className}`}
      >
        <DialogContent className={`${styles.modal1} ${ptSans.className}`}>
          <DialogContentText className={`${styles.titulo} ${ptSans.className}`}>
            <h2 className={`${styles.infoPro} ${ptSans.className}`}>
              {productos.nombre}
            </h2>
            <p className={`${styles.infoPro} ${ptSans.className}`}>
              {productos.tipo}
            </p>
            <p className={`${styles.infoPro} ${ptSans.className}`}>
              ${productos.valor}
            </p>
          </DialogContentText>

          <div className={`${styles.contForm} ${ptSans.className}`}>
            <form className={styles.form}>
              <label className={`${styles.textField} ${ptSans.className}`}>
                {" "}
                Nombre
              </label>
              <input
                className=""
                type="text"
                id="nombreUsuario"
                onChange={(e) => setnombreUsuario(e.target.value)}
              ></input>

              <label className={`${styles.textField} ${ptSans.className}`}>
                {" "}
                Correo Electronico
              </label>
              <input
                className=""
                type="email"
                id="emailUsuario"
                onChange={(e) => setEmailUsuario(e.target.value)}
              ></input>

              <label className={`${styles.textField} ${ptSans.className}`}>
                {" "}
                Teléfono
              </label>
              <input
                className=""
                type="tel"
                id="teUsuario                           "
                onChange={(e) => setTelUsuario(e.target.value)}
              ></input>

              <label className={`${styles.textField} ${ptSans.className}`}>
                {" "}
                Comentario
              </label>
              <textarea
                className=""
                type="text"
                id="teUsuario                           "
                onChange={(e) => setComentUsuario(e.target.value)}
              ></textarea>

              {/* <TextField
                className={`${styles.textField} ${ptSans.className}`}
                margin="dense"
                id="nombreUsuario"
                label="Nombre"
                type="text"
                fullWidth
                variant="outlined"
                onChange={(e) => setnombreUsuario(e.target.value)}
              /> */}
              {/* 
              <TextField
                className={styles.textField}
                autoFocus
                margin="dense"
                id="emailUsuario"
                label="Correo Electronico"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e) => setEmailUsuario(e.target.value)}
              /> */}
              {/* <TextField
                className={styles.textField}
                autoFocus
                margin="dense"
                id="tellUsuario"
                label="Telefono"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setTelUsuario(e.target.value)}
              /> */}

              {/* <TextField
                className={styles.textField}
                autoFocus
                margin="dense"
                id="comentUsuario"
                label="Comentario"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setComentUsuario(e.target.value)}
              /> */}

              <button
                className={`${styles.confirmar} ${ptSans.className}`}
                onClick={handleSubmit}
                type="input"
              >
                CONFIRMAR
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
