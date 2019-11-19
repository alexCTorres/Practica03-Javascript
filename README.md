# Practica03-Javascript

 
 	FORMATO DE INFORME DE PRÁCTICA DE LABORATORIO / TALLERES / CENTROS DE SIMULACIÓN – PARA ESTUDIANTES

CARRERA: INGENIERÍA DE SISTEMAS	<br>ASIGNATURA: HYPERMEDIAL
<br>NRO. PRÁCTICA:	3	<br>TÍTULO PRÁCTICA: Resolución de problemas sobre JavaScript
<br>OBJETIVO ALCANZADO:

•	Entender y organizar de una mejor manera los sitios de web en Internet <br>
•	Diseñar adecuadamente elementos gráficos en sitios web en Internet.<br> 
•	Crear sitios web aplicando estándares actuales. <br>

<br>
ACTIVIDADES DESARROLLADAS 
<br>
<br>
<i> 1.Crear un repositorio en GitHub con el nombre “Practica03-Javascript” </i>

Primero debemos crear una cuenta en GitHub, y procedemos a crear un repositorio para guardar los distintos archivos de la práctica.
   
   ![image](https://user-images.githubusercontent.com/49664311/69188653-f4912780-0aea-11ea-851a-b1666eef78b8.png)
   ![image](https://user-images.githubusercontent.com/49664311/69188840-46d24880-0aeb-11ea-8556-4440bf5ab382.png)


Una vez creado el repositorio para nuestros archivos, nos dará un url para configurar desde la línea de comandos de GitHub para ingresar nuestros archivos a la página.<br><br>
<i> 2.	Crear una carpeta para la solución de cada ejercicio antes mencionado.</i> <br>

Como vemos en la gráfica nos creamos dos carpetas en GitHub para cada proyecto.<br>

 ![image](https://user-images.githubusercontent.com/49664311/69189244-04f5d200-0aec-11ea-986f-e541cb72a240.png)

Como vemos constamos de una carpeta Galería para la galería de fotos, y un login para validaciones de autenticación. <br>
<br>

<i>3.	Realizar un commit y push por cada requerimiento de los puntos antes descritos. </i><br>

![image](https://user-images.githubusercontent.com/49664311/69189388-3f5f6f00-0aec-11ea-8452-f288e0e1e266.png)


<i>4.	Luego, se debe crear el archivo README del repositorio de GitHub. </i> <br>

![image](https://user-images.githubusercontent.com/49664311/69189448-61f18800-0aec-11ea-96df-8ca0e29093c0.png)


5.	VALIDACIONES DE LOS CAMPOS.<br>
 
<i> •Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos </i>

Como vemos en la grafica tenemos todos los campos que nos pide.<br>

 ![image](https://user-images.githubusercontent.com/49664311/69189731-e512de00-0aec-11ea-8dca-d6e945c93c93.png)


<i> a)	Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador. </i> <br>

![image](https://user-images.githubusercontent.com/49664311/69189838-20151180-0aed-11ea-9531-9ddfba4c52d9.png)


Como vemos primero recorremos toda el arreglo o caja de texto para saber los que el usuario pretende ingresar en este campo. <br>


![image](https://user-images.githubusercontent.com/49664311/69189869-36bb6880-0aed-11ea-81f8-a13928354f85.png)

Después validamos que no ingrese letras y sean solo números para este campo, si el campo no cuenta con estas restricciones nos darán mensajes de error según el error cometido.<br>

![image](https://user-images.githubusercontent.com/49664311/69189934-5e123580-0aed-11ea-8b11-f224ab50efda.png)

 
<i> b)	Se debe validar qué, en el campo del nombre, ingrese mínimo un nombre y que permita ingresar sólo letras. </i>

![image](https://user-images.githubusercontent.com/49664311/69189960-6cf8e800-0aed-11ea-862f-c30030907d13.png)

Primero validamos que en este campo si ingresen solo letras, no se podrán ingresar numero o otros caracteres especiales. Para ello ingresamos todas las letras del abecedario en una variable letras que luego la mandaremos a verificar en la entrada del campo de texto y no nos permitirá escribir otra cosa mas que las letras especificadas anteriormente.<br>

Después empezamos a validar que se ingrese al menos un nombre. 


![image](https://user-images.githubusercontent.com/49664311/69189998-84d06c00-0aed-11ea-9cbf-2df3e42a80c5.png)

