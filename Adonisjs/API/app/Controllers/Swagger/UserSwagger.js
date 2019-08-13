/**
* @swagger
* definitions:
*   NewUser:
*     type: object
*     required:
*       - username
*       - email
*       - password
*     properties:
*       username:
*         type: string
*       email:
*         type: string
*       password:
*         type: string
*         format: password
* /users:
*   get:
*     tags:
*       - Test
*     summary: Sample API
*     parameters:
*       - name: name
*         description: Name of the user
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           message: Hello Guess
*   post:
*     tags:
*       - Test
*     summary: Sample API
*     parameters:
*       - name: Parametros
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewUser'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           message: Hello Guess
*/