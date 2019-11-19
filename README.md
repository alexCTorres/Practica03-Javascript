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

Ahora validaremos que se ingresen al menos un nombre para ello especificamos que al menos se ingresen 3 letras en el campo ya que es un rango en donde puede haber un nombre de una persona, y si no se cumple esto el cuadro de texto se pintara de rojo.<br>

![image](https://user-images.githubusercontent.com/49664311/69190139-c3febd00-0aed-11ea-8067-fb34e51bc2c8.png)

<i> c)	Se debe validar qué, en el campo del apellido, ingrese mínimo un apellido y que permita ingresar sólo letras. </i>
<br>

![image](https://user-images.githubusercontent.com/49664311/69190191-de389b00-0aed-11ea-9779-ed7fb8240fc3.png)

Para la validación del apellido hacemos lo mismo que en el nombre, para ello ocupamos la misma función de validar letras, y en la función de validarApellido hacemos lo mismo que el nombre, ponemos de mínimo 3 letras para la validación un apellido.<br>

![image](https://user-images.githubusercontent.com/49664311/69190237-fc9e9680-0aed-11ea-9efb-48c6d50849f0.png)

<i> d)	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10. </i>


![image](https://user-images.githubusercontent.com/49664311/69190289-17710b00-0aee-11ea-8f94-d73cae56514d.png)

Para esta validación primero validamos como en el nombre en este caso especificaremos solo los números del 0 al 9, y en la función validarTelefono especificamos que sean solo 10 números.<br>

![image](https://user-images.githubusercontent.com/49664311/69190315-26f05400-0aee-11ea-8f6f-eab49b858dcf.png)

<i> e)	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy. </i>

![image](https://user-images.githubusercontent.com/49664311/69190370-46877c80-0aee-11ea-90ea-b2e28a607cff.png)

Para esta validación primero empezamos por los días diciendo que el máximo es 31 dias, los meses a 12 y anos desde 1950, después cogemos lo que tenemos en el cuadro de texto y especificamos el formato de fecha. <br>

![image](https://user-images.githubusercontent.com/49664311/69190406-556e2f00-0aee-11ea-8d7a-767e9834d938.png)

<i> f)	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”. </i> <br>


![image](https://user-images.githubusercontent.com/49664311/69190442-6f0f7680-0aee-11ea-93fd-511d4007657e.png)

Para ello primero hacemos como en el nombre especificamos los caracteres que queremos que se ingresen en este campo y luego especificamos las extensiones que deben tener.<br>

![image](https://user-images.githubusercontent.com/49664311/69190484-80f11980-0aee-11ea-886b-8fdc791e58ba.png)

<i> g)	Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $) </i><br>

![image](https://user-images.githubusercontent.com/49664311/69190535-98300700-0aee-11ea-8578-14236a7e1a4a.png)


Para ello como en todos los otros campos primero validamos los caracteres que queremos que se ingresen aquí y luego especificamos lo mínimo de caracteres que se ingresen.<br><br>

6. GALERIA DE FOTOS.<br>


<i> a)	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/) </i>

![image](https://user-images.githubusercontent.com/49664311/69190640-d4636780-0aee-11ea-8176-711a0ad5d254.png)

En la galería ponemos 10 imágenes en un directorio images, luego debemos hacer una presentacion seleccionando 5 imágenes de las 10 e ir pasando una por una.<br>

![image](https://user-images.githubusercontent.com/49664311/69190665-e218ed00-0aee-11ea-98b6-bf188f7ec199.png)

Como vemos esta agregada las 10 imágenes en el github.<br>


![image](https://user-images.githubusercontent.com/49664311/69190714-f9f07100-0aee-11ea-85d8-1d102646c3be.png)

8.	Realizar el archive README.<br>

![image](https://user-images.githubusercontent.com/49664311/69190747-0c6aaa80-0aef-11ea-9feb-e6df7a7c40ae.png)

url: https://github.com/alexCTorres/Practica03-Javascript/blob/master/README.md <br>

usuario: alexCTorres <br>

RESULTADO(S) OBTENIDO(S):<br>

•	Tener el conocimiento suficiente para que el estudiante pueda entender y organizar de una mejor manera los sitios de web y de negocios en Internet <br><br>



CONCLUSIONES:<br>

•	Los estudiantes podrán organizar sitios web basados en el lenguaje de etiquetado HTML, CSS y JavaScript <br><br>
.
RECOMENDACIONES:<br>
•	Crear un diseño antes de realizar.<br>
•	Utilizar bien los códigos y formulación html.<br>
•	Realizar con tiempo para una perfecta estructuración y visualización de este. <br>
•	Para probar la solución de la práctica en al menos tres navegadores web; Google Chrome, Firefox y Safari <br>
•	Utilizar bien los comandos javaScript<br><br>

Nombre de estudiante: Alex Cristopher Cuji Torres<br><br>


Firma de estudiante: ![image](https://user-images.githubusercontent.com/49664311/69190864-505daf80-0aef-11ea-8a79-f9afeecb50c7.png)

                                         












