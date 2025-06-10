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
      "get": { "tags": ["Users"], "description": "Λήψη όλων των χρηστών" }
    },
    "/api/users/register": {
      "post": {
        "tags": ["Users"],
        "description": "Εγγραφή νέου χρήστη",
        "requestBody": {
          "content": { "application/json": { "schema": { "$ref": "#/components/schemas/User" } } }
        },
        "responses": { "201": { "description": "Επιτυχής εγγραφή χρήστη" } }
      }
    },
    "/api/users/create": {
      "post": {
        "tags": ["Users"],
        "description": "Δημιουργία νέου χρήστη",
        "requestBody": {
          "content": { "application/json": { "schema": { "$ref": "#/components/schemas/User" } } }
        },
        "responses": { "201": { "description": "Επιτυχής δημιουργία χρήστη" } }
      }
    },
    "/api/users/{username}": {
      "get": { "tags": ["Users"], "description": "Βρες χρήστη με username" },
      "patch": { "tags": ["Users"], "description": "Ενημέρωση χρήστη" },
      "delete": { "tags": ["Users"], "description": "Διαγραφή χρήστη" }
    },
    "/api/users/check_duplicate_email/{email}": {
      "get": {
        "tags": ["Users"],
        "description": "Έλεγχος εάν υπάρχει το email",
        "parameters": [{ "name": "email", "in": "path", "required": true, "description": "Email χρήστη", "schema": { "type": "string" } }],
        "responses": {
          "200": { "description": "Το email είναι διαθέσιμο" },
          "400": { "description": "Το email υπάρχει ήδη" }
        }
      }
    },
    "/api/users/check_duplicate_username/{username}": {
      "get": {
        "tags": ["Users"],
        "description": "Έλεγχος εάν υπάρχει το username",
        "parameters": [{ "name": "username", "in": "path", "required": true, "description": "Username χρήστη", "schema": { "type": "string" } }],
        "responses": {
          "200": { "description": "Το username είναι διαθέσιμο" },
          "400": { "description": "Το username υπάρχει ήδη" }
        }
      }
    },
    "/api/teachers": {
      "get": { "tags": ["Teachers"], "description": "Λήψη όλων των καθηγητών" }
    },
    "/api/teachers/create": {
      "post": {
        "tags": ["Teachers"],
        "description": "Δημιουργία νέου καθηγητή",
        "requestBody": {
          "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Teacher" } } }
        },
        "responses": { "201": { "description": "Επιτυχής δημιουργία καθηγητή" } }
      }
    },
    "/api/teachers/{vat}": {
      "get": { "tags": ["Teachers"], "description": "Βρες καθηγητή με VAT" },
      "patch": { "tags": ["Teachers"], "description": "Ενημέρωση καθηγητή" },
      "delete": { "tags": ["Teachers"], "description": "Διαγραφή καθηγητή" }
    },
    "/api/students": {
      "get": { "tags": ["Students"], "description": "Λήψη όλων των μαθητών" }
    },
    "/api/students/create": {
      "post": {
        "tags": ["Students"],
        "description": "Δημιουργία νέου μαθητή",
        "requestBody": {
          "content": { "application/json": { "schema": { "$ref": "#/components/schemas/Student" } } }
        },
        "responses": { "201": { "description": "Επιτυχής δημιουργία μαθητή" } }
      }
    },
    "/api/students/{email}": {
      "get": { "tags": ["Students"], "description": "Βρες μαθητή με email" },
      "patch": { "tags": ["Students"], "description": "Ενημέρωση μαθητή" },
      "delete": { "tags": ["Students"], "description": "Διαγραφή μαθητή" }
    }
  }
};
