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
1.Crear un repositorio en GitHub con el nombre “Practica03-Javascript”

Primero debemos crear una cuenta en GitHub, y procedemos a crear un repositorio para guardar los distintos archivos de la práctica.
   
   ![image](https://user-images.githubusercontent.com/49664311/69188653-f4912780-0aea-11ea-851a-b1666eef78b8.png)
   ![image](https://user-images.githubusercontent.com/49664311/69188840-46d24880-0aeb-11ea-8556-4440bf5ab382.png)


Una vez creado el repositorio para nuestros archivos, nos dará un url para configurar desde la línea de comandos de GitHub para ingresar nuestros archivos a la página.<br><br>
2.	Crear una carpeta para la solución de cada ejercicio antes mencionado.<br>

Como vemos en la gráfica nos creamos dos carpetas en GitHub para cada proyecto.<br>

 ![image](https://user-images.githubusercontent.com/49664311/69189244-04f5d200-0aec-11ea-986f-e541cb72a240.png)

Como vemos constamos de una carpeta Galería para la galería de fotos, y un login para validaciones de autenticación. <br>
<br>

3.	Realizar un commit y push por cada requerimiento de los puntos antes descritos. <br>

![image](https://user-images.githubusercontent.com/49664311/69189388-3f5f6f00-0aec-11ea-8452-f288e0e1e266.png)


4.	Luego, se debe crear el archivo README del repositorio de GitHub.  <br>

![image](https://user-images.githubusercontent.com/49664311/69189448-61f18800-0aec-11ea-96df-8ca0e29093c0.png)


5.	VALIDACIONES DE LOS CAMPOS.
 
•	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos 

Como vemos en la grafica tenemos todos los campos que nos pide.

 


a)	Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador. 






















Como vemos primero recorremos toda el arreglo o caja de texto para saber los que el usuario pretende ingresar en este campo.








































Después validamos que no ingrese letras y sean solo números para este campo, si el campo no cuenta con estas restricciones nos darán mensajes de error según el error cometido.
 


b)	Se debe validar qué, en el campo del nombre, ingrese mínimo un nombre y que permita ingresar sólo letras. 












Primero validamos que en este campo si ingresen solo letras, no se podrán ingresar numero o otros caracteres especiales. Para ello ingresamos todas las letras del abecedario en una variable letras que luego la mandaremos a verificar en la entrada del campo de texto y no nos permitirá escribir otra cosa mas que las letras especificadas anteriormente.

Después empezamos a validar que se ingrese al menos un nombre. 











6.	GALERIA


7.	En el archivo README del repositorio debe constar la misma información del informe de resultados de la práctica que se indica en el siguiente punto. 

Cuando ya creamos el archivo README procedemos a insertar la información que encontramos en el informe realizado de la practica:






Ahora validaremos que se ingresen al menos un nombre para ello especificamos que al menos se ingresen 3 letras en el campo ya que es un rango en donde puede haber un nombre de una persona, y si no se cumple esto el cuadro de texto se pintara de rojo.

 

 
c)	Se debe validar qué, en el campo del apellido, ingrese mínimo un apellido y que permita ingresar sólo letras. 












	






Para la validación del apellido hacemos lo mismo que en el nombre, para ello ocupamos la misma función de validar letras, y en la función de validarApellido hacemos lo mismo que el nombre, ponemos de mínimo 3 letras para la validación un apellido.

 

d)	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10. 























Para esta validación primero validamos como en el nombre en este caso especificaremos solo los números del 0 al 9, y en la función validarTelefono especificamos que sean solo 10 números.

 
 
e)	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy. 



	




































Para esta validación primero empezamos por los días diciendo que el máximo es 31 dias, los meses a 12 y anos desde 1950, después cogemos lo que tenemos en el cuadro de texto y especificamos el formato de fecha. 

 

f)	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”. 






















Para ello primero hacemos como en el nombre especificamos los caracteres que queremos que se ingresen en este campo y luego especificamos las extensiones que deben tener.

 


g)	Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $) 
























Para ello como en todos los otros campos primero validamos los caracteres que queremos que se ingresen aquí y luego especificamos lo mínimo de caracteres que se ingresen.

6. GALERIA DE FOTOS.


a)	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/) 

 


En la galería ponemos 10 imágenes en un directorio images, luego debemos hacer una presentacion seleccionando 5 imágenes de las 10 e ir pasando una por una.

 

Como vemos esta agregada las 10 imágenes en el github.























































8.	Realizar el archive README.

 

RESULTADO(S) OBTENIDO(S):

•	Tener el conocimiento suficiente para que el estudiante pueda entender y organizar de una mejor manera los sitios de web y de negocios en Internet 



CONCLUSIONES:

•	Los estudiantes podrán organizar sitios web basados en el lenguaje de etiquetado HTML, CSS y JavaScript 
.
RECOMENDACIONES:
•	Crear un diseño antes de realizar.
•	Utilizar bien los códigos y formulación html.
•	Realizar con tiempo para una perfecta estructuración y visualización de este. 
•	Para probar la solución de la práctica en al menos tres navegadores web; Google Chrome, Firefox y Safari 
•	Utilizar bien los comandos javaScript

Nombre de estudiante: Alex Cristopher Cuji Torres


Firma de estudiante: 
                                         


