/**
* @swagger
* /users/login:
*   post:
*     tags:
*       - User
*     summary: Login User
*     parameters:
*       - name: Parametros
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/Login'
*     responses:
*       200:
*         example:
*           message: Hello Guess
* /users:
*   get:
*     tags:
*       - User
*     summary: List User
*     responses:
*       200:
*         example:
*           message: Hello Guess
*   post:
*     tags:
*       - User
*     summary: Create User
*     parameters:
*       - name: Parametros
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewUser'
*     responses:
*       200:
*         example:
*           message: Hello Guess
*/