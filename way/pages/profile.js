import React from "react";
import NavBar from "../components/Navbar";
import styles from "../styles/Profile.module.css";
import Logo from "../img/layoutbg.jpg";
//@mui
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Image from "next/image";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <NavBar />
      <div className={styles.titleProfile}>
        <p>Mi Perfil</p>
      </div>
      <div className={styles.divTabs}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Perfil" {...a11yProps(0)} />
              <Tab label="Mis Cursos" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div>
              <p className={styles.profileTitle}>Perfil</p>
              <div>
                <p>Matias Garrido</p>
                <p>matiasgarridodev@gmail.com</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>
              <p className={styles.profileTitle}>Mis Cursos</p>
              <div className={styles.orderContainer}>
                <div>
                  <p className={styles.courseListTitle}>Curso Básico</p>
                  <p>
                    <span className={styles.dateInit}>Fecha de inicio</span> :
                    22/05/23
                  </p>
                  <p>
                    <span className={styles.dateInit}>Precio:</span> $15usd
                  </p>
                  <Button color="error">Remover</Button>
                </div>
                <Image className={styles.imageCart} src={Logo} />
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
