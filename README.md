## **API COUNTRIES** | Proyecto Individual para Soy Henry Bootcamp
<div style="text-align: center">
<br/>
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/d09d1d18-ad88-427b-ab66-aafb380b7a3f" width="100">
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/a5760768-974a-42d1-af94-60087001a3df" width="100">
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/b05fe861-1dfd-4fa5-be04-845b252f7e8f" width="100">
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/4acd46af-58a8-43b7-bf6b-f1f153c5bec2" width="100">
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/4b007a4f-874f-414d-948f-87af4b8f0e5e" width="100">
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/74f1d36e-eca7-4e03-9554-6f1543ef147d" width="100">
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/570ebe91-ead6-4935-b46e-79e1462abb21" width="100">
</div>


## **📌 OBJETIVOS**
-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.
<br />

## **📖 FUNCIONALIDADES**
Esta API web permite las siguente funcionalidaes:
-  Buscar países por nombre.
-  Detalle de cada país.
-  Filtros por actividad y por continentes.
-  Ordenamiento por orden alfabético y por cantidad de población.
-  Formulario para agregar actividades y vincularlos a países.
<br />


### **🖱 BASE DE DATOS**
La API funciona bajo una base de datos relacional. Utiliza Postgres como sistema de gestión.
Contiene dos modelos -Contry y Activity-, relacionadas entre sí por una tabla intermedia.

### **🖱 BACK-END**
El backend está logrado a través de **NodeJS** y **Express**, conectado a la base de datos por medio de **Sequelize**.
Al levantar el servidor se realiza una petición a la ruta principal que leer el archivo con todos los datos de países, son parseados y guardados en la base de datos.
#### **RUTAS**
#### **📍 GET | /countries**
#### **📍 GET | /countries/:idPais**
#### **📍 GET | /name?="..."**
#### **📍 POST | /activities**
#### **📍 GET | /activities**
<br />
### **🖱 FRONT-END**
El frontend fue desarrollado con **React** y **Redux**, mostrando las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:
<div>
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/deafb2d3-0da2-47b3-8fc2-7770afc9ccd6" width="500">
</div>

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:
<div>
<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/f0ce98d4-c6b6-42a7-9c40-29c22662e99e" width="500">
</div>

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un país:
<div>
	<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/5b72dc2c-358a-4b39-8756-558fb1d823c3" width="500">
</div>
<br />

**📍 FORM PAGE |** en esta vista se encontrará el formulario para crear una actividad turística.
<div>
	<img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/8d0c70df-c7fd-4904-b4d5-5c7802787af9" width="500">
</div>
<br />
---
### **🖱 TESTING**
Se realizó testing usando Jest sobre el backend, tanto para el control de las rutas como para el de los modelos de base de datos.
---

<br />
