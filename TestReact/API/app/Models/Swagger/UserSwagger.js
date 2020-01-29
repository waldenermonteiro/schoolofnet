/** 
*  @swagger
* definitions:
*   NewUser:
*     type: object
*     required:
*       - name
*       - lastName
*       - data
*       - check
*     properties:
*       name:
*         type: string
*       lastName:
*         type: string
*       date:
*         type: string
*         format: date
*       check:
*         type: boolean
*         format: boolean
*/