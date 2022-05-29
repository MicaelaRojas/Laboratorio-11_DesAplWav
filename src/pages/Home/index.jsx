import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    adress: "",
    operador: "",
    phone: "",
    gender: "",
    date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSendData = (event) => {
    //para que laweb no se revargue debemos usar preventDefault()
    event.preventDefault();
    console.log(values);
  };

  return (
    <Container>
      <form action="" method="post" onSubmit={handleSendData}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Formulario de Registro</h1>
            <h3>૮ ˶ᵔ ᵕ ᵔ˶ ა Ingrese sus datos personales, gracias ૮ ˶ᵔ ᵕ ᵔ˶ ა</h3>
          </Grid>

          {/* Grid 1 */}
          <Grid item xs={6}>
            <TextField
              label="Ingrese su correo"
              name="email"
              fullWidth
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su nombre"
              name="name"
              fullWidth
              value={values.name}
              onChange={handleInputChange}
            />
          </Grid>

           {/* Grid 2 */}
          <Grid item xs={12}>
            <TextField
              label="Ingrese su dirección"
              name="adress"
              fullWidth
              value={values.address}
              onChange={handleInputChange}
            />
          </Grid>
      

           {/* Grid 3 */}
          <Grid item xs={6}>
            <TextField
              label="Ingrese su operadora"
              name="operador"
              fullWidth
              value={values.operador}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su número de teléfono"
              name="phone"
              fullWidth
              value={values.phone}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Grid 4 */}
          <Grid item xs={6}>
            <TextField
              label="Ingrese su género"
              name="gender"
              fullWidth
              value={values.gender}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su fecha de nacimiento"
              name="date"
              fullWidth
              value={values.date}
              onChange={handleInputChange}
            />
          </Grid>

     
          {/* Enviar button */}
          <Grid item xs={12}>
            <Button type="submit" color="button" variant="contained">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Home;
