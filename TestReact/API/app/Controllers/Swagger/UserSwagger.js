/**
* @swagger
* /api/v1/users:
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
* /api/v1/users/{id}:
*   get:
*     tags:
*       - User
*     summary: Get User by id
*     parameters:
*       - name: id
*         description: Id of user
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*   put:
*     tags:
*       - User
*     summary: Update User
*     parameters:
*       - name: id
*         description: Id of user
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewUser'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     tags:
*       - User
*     summary: Delete User by id
*     parameters:
*       - name: id
*         description: Id of user
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/