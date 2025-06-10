const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');
const Student = require('./models/student.model');
const Teacher = require('./models/teacher.model');

exports.options = {
  "openapi": "3.1.0",
  "info": {
    "version": "1.0.0",
    "title": "School Management API",
    "description": "API για τη διαχείριση μαθητών, καθηγητών και χρηστών.",
    "contact": {
      "name": "API Support",
      "url": "https://school.example.com",
      "email": "support@example.com"
    }
  },
  "servers": [
    { "url": "http://localhost:3000", "description": "Local Server" },
    { "url": "http://www.backend.school.example.com", "description": "Testing server" }
  ],
  "components": {
    "schemas": {
      "User": m2s(User),
      "Student": m2s(Student),
      "Teacher": m2s(Teacher)
    },
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    }
  },
  "security": [{ "bearerAuth": [] }],
  "tags": [
    { "name": "Users", "description": "Endpoints για χρήστες" },
    { "name": "Students", "description": "Endpoints για μαθητές" },
    { "name": "Teachers", "description": "Endpoints για καθηγητές" }
  ],
  "paths": {
    "/api/users": {
      "get": { "tags": ["Users"], "description": "Λήψη όλων των χρηστών" },
      "post": {
        "tags": ["Users"],
        "description": "Δημιουργία νέου χρήστη",
        "requestBody": { "content": { "application/json": { "schema": { "$ref": "#/components/schemas/User" } } } },
        "responses": { "201": { "description": "Επιτυχής δημιουργία χρήστη" } }
      }
    },
    "/api/users/{username}": {
      "get": { "tags": ["Users"], "description": "Βρες χρήστη με username" },
      "patch": { "tags": ["Users"], "description": "Ενημέρωση χρήστη" },
      "delete": { "tags": ["Users"], "description": "Διαγραφή χρήστη" }
    },
    "/api/users/check_duplicate_email/{email}": {
      "get": { "tags": ["Users"], "description": "Έλεγχος εάν υπάρχει το email" }
    },
    "/api/users/check_duplicate_username/{username}": {
      "get": { "tags": ["Users"], "description": "Έλεγχος εάν υπάρχει το username" }
    },
    "/api/teachers": {
      "get": { "tags": ["Teachers"], "description": "Λήψη όλων των καθηγητών" },
      "post": {
        "tags": ["Teachers"],
        "description": "Δημιουργία νέου καθηγητή",
        "requestBody": { "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Teacher" } } } },
        "responses": { "201": { "description": "Επιτυχής δημιουργία καθηγητή" } }
      }
    },
    "/api/teachers/{firstname}": {
  "get": {
    "tags": ["Teachers"],
    "description": "Βρες καθηγητή με Firstname",
    "parameters": [
      { "name": "firstname", "in": "path", "required": true, "description": "Το μικρό όνομα του καθηγητή", "schema": { "type": "string" } }
    ],
    "responses": { "200": { "description": "Επιτυχής εύρεση καθηγητή" }, "404": { "description": "Ο καθηγητής δεν βρέθηκε" } }
  }
},
"/api/teachers/update/{vat}": {
  "patch": {
    "tags": ["Teachers"],
    "description": "Ενημέρωση στοιχείων καθηγητή με VAT",
    "parameters": [
      { "name": "vat", "in": "path", "required": true, "description": "Το VAT του καθηγητή", "schema": { "type": "string" } }
    ],
    "requestBody": {
      "description": "Νέα στοιχεία καθηγητή",
      "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Teacher" } } }
    },
    "responses": { "200": { "description": "Ο καθηγητής ενημερώθηκε" } }
  }
},
"/api/teachers/delete/{vat}": {
  "delete": {
    "tags": ["Teachers"],
    "description": "Διαγραφή καθηγητή με VAT",
    "parameters": [
      { "name": "vat", "in": "path", "required": true, "description": "Το VAT του καθηγητή", "schema": { "type": "string" } }
    ],
    "responses": { "200": { "description": "Ο καθηγητής διαγράφηκε" }, "404": { "description": "Ο καθηγητής δεν βρέθηκε" } }
  }
},
    "/api/students": {
      "get": { "tags": ["Students"], "description": "Λήψη όλων των μαθητών" },
      "post": {
        "tags": ["Students"],
        "description": "Δημιουργία νέου μαθητή",
        "requestBody": { "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Student" } } } },
        "responses": { "201": { "description": "Επιτυχής δημιουργία μαθητή" } }
      }
    },
    "/api/students/{firstname}": {
      "get": {
        "tags": ["Students"],
        "description": "Βρες μαθητή με Firstname",
        "parameters": [
          { "name": "firstname", "in": "path", "required": true, "description": "Το μικρό όνομα του μαθητή", "schema": { "type": "string" } }
        ],
        "responses": { "200": { "description": "Επιτυχής εύρεση μαθητή" }, "404": { "description": "Ο μαθητής δεν βρέθηκε" } }
      }
    },
    "/api/students/update/{email}": {
      "patch": {
        "tags": ["Students"],
        "description": "Ενημέρωση στοιχείων μαθητή με email",
        "parameters": [
          { "name": "email", "in": "path", "required": true, "description": "Το email του μαθητή", "schema": { "type": "string" } }
        ],
        "requestBody": { "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Student" } } } },
        "responses": { "200": { "description": "Ο μαθητής ενημερώθηκε" } }
      }
    },
    "/api/students/delete/{email}": {
      "delete": {
        "tags": ["Students"],
        "description": "Διαγραφή μαθητή με email",
        "parameters": [
          { "name": "email", "in": "path", "required": true, "description": "Το email του μαθητή", "schema": { "type": "string" } }
        ],
        "responses": { "200": { "description": "Ο μαθητής διαγράφηκε" }, "404": { "description": "Ο μαθητής δεν γίνετε να διαγραφεί"} } }}}}